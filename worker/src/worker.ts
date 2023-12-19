import { boss } from './db.js';
import logger from './logging.js';

logger.info('Worker booting up...');

boss.start();

// eslint-disable-next-line @typescript-eslint/ban-types
const jobFunctions: Record<string, Function> = {};

// eslint-disable-next-line @typescript-eslint/ban-types
const wrapExceptionLog = (jobFunction: Function) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (...args: any[]) => {
    try {
      return await jobFunction(...args);
    } catch (error) {
      const exception = error as Error;
      logger.error(`${exception.message}\n${exception.stack}`);
      throw error;
    }
  };
};

for (const [jobName, jobFunction] of Object.entries(jobFunctions)) {
  boss.work(jobName, wrapExceptionLog(jobFunction));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  boss.onComplete(jobName, (job: { failed: boolean; response: any }) => {
    logger.debug(job);
    if (job.failed) {
      logger.error(`Job ${jobName} failed: ${job.response}`);
    }
  });
}

boss.on('error', error => logger.error(error));

logger.info('Worker running!');

process.on('SIGINT', async () => {
  logger.info('SIGINT received, stopping...');
  await boss.stop();
  process.exit();
});

process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, stopping...');
  await boss.stop();
  process.exit();
});
