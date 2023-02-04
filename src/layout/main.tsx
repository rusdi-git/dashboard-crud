import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import TableBrowser from './table-browser';
import AppBar from './appbar';

export default function Main() {
  return (
    <Flex>
      <AppBar />
      <TableBrowser />
      <Box flexGrow={1} marginTop="64px" padding="24px" overflow="scroll">
      </Box>
    </Flex>
  );
}