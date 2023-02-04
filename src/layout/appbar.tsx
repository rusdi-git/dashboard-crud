
import React from 'react';

import { Box, Flex, Heading } from '@chakra-ui/react';

export default function AppBar() {
  const drawerWidth = 240;
  return (
    <Box
      as="header"
      boxShadow="lg"
      width={`calc(100% - ${drawerWidth}px)`}
      zIndex="banner"
      py="1"
      position="fixed"
      h="64px"
      ml={`${drawerWidth}px`}
      sx={{
        transitionProperty: 'width, margin',
        transitionDuration: '200ms',
        transitionTimingFunction: 'linear',
      }}
    >
      <Flex justify="space-between" pl="2" pr="2">        
      </Flex>
    </Box>
  );
}