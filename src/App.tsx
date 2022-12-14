import { Box, Text } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <Box width="100%" maxWidth="936px">
      <Text>Content Here</Text>
    </Box>
  );
}

function App() {
  return (
    <Box alignItems="center" flexDirection="column" display="flex" width="100%">
      <Box justifyContent="center" display="flex" width="100%" paddingTop="36px" paddingBottom="36px">
        <Box alignItems="center" flexDirection="row" display="flex" width="100%" maxWidth="936px">
          <Text>Starter</Text>
          <Box marginLeft="auto"></Box>
        </Box>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
