import axios from 'axios';
import axiosRetry from 'axios-retry';

import logger from './logging.js';

export type OpenAIMessage = { role: string; name?: string } & (
  | { content: string; tool_calls?: null }
  | { content: null; tool_calls: { name: string; function: { arguments: any } }[] } // eslint-disable-line @typescript-eslint/no-explicit-any
  | { content: { type: 'image_url'; image_url: string }[] }
);

export type OpenAIToolDefinition = {
  type: 'function';
  function: {
    name: string;
    description: string;
    parameters: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};

export const message = async (model: string, messages: OpenAIMessage[], maxTokens: number, temperature?: number) => {
  const client = axios.create({ baseURL: 'https://api.openai.com/v1' });
  axiosRetry(client, {
    retries: 5,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: error =>
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.response?.status === 429 ||
      error.response?.status === 500 ||
      error.response?.status === 502,
  });
  const data = {
    model,
    messages,
    temperature: temperature || 0,
    max_tokens: maxTokens,
  };
  try {
    const res = await client.post('/chat/completions', data, {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    if (res.status !== 200) {
      throw new Error(`OpenAI API error: ${res.statusText}`);
    }

    return res.data.choices[0].message.content.trim();
  } catch (error) {
    // @ts-ignore
    logger.error(JSON.stringify(error.response?.data));
    throw error;
  }
};

export type RawMessageOptions = {
  maxTokens?: number;
  temperature?: number;
  tools?: OpenAIToolDefinition[];
  toolChoice?: { type: 'function'; function: { name: string } };
};

export const rawMessage = async (
  model: string,
  messages: OpenAIMessage[],
  options?: RawMessageOptions
): Promise<OpenAIMessage> => {
  const client = axios.create({ baseURL: 'https://api.openai.com/v1' });
  axiosRetry(client, {
    retries: 5,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: error =>
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.response?.status === 429 ||
      error.response?.status === 502,
  });

  try {
    const res = await client.post(
      '/chat/completions',
      {
        model,
        messages,
        temperature: options?.temperature || 0,
        max_tokens: options?.maxTokens,
        tools: options?.tools,
        tool_choice: options?.toolChoice,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    if (res.status !== 200) {
      throw new Error(`OpenAI API error: ${res.statusText}`);
    }

    return res.data.choices[0].message;
  } catch (error) {
    // @ts-ignore
    logger.error(JSON.stringify(error.response?.data));
    throw error;
  }
};

export const embedding = async (text: string) => {
  const client = axios.create({ baseURL: 'https://api.openai.com/v1' });
  axiosRetry(client, {
    retries: 5,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: error => axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response?.status === 429,
  });

  const embeddingRes = await client.post(
    '/embeddings',
    {
      model: 'text-embedding-ada-002',
      input: [text],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  return embeddingRes.data.data[0].embedding;
};
