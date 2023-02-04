import React from 'react';

import {
  Flex,
  Box,
  Divider,
  IconButton,
  Container,
  Icon,
  Heading,
  CircularProgress,
} from '@chakra-ui/react';
import {MdChevronLeft,MdChevronRight} from "react-icons/md";
import { useGetTables } from '../data/table';

export default function TableBrowser() {
  const tables = useGetTables();
  return (
    <Flex
      width="240px"
      flexDirection="column"
      minHeight="600px"
      sx={{
        transitionProperty: 'width',
        transitionDuration: '200ms',
        transitionTimingFunction: 'linear',
      }}
      borderRight="1px"
      borderRightColor="gray.200"
    >
      <Box h="64px" width="240px" overflowX="hidden" layerStyle="base">
      <Heading as="h4" size="md" textAlign="center">
            React Sandbox
          </Heading>
      </Box>
      <Divider />
      <Box paddingTop="15px" overflowX="hidden">
      {data ? (
        <Box>
          <HStack>
            <IconButton
              aria-label="new-member"
              icon={<Icon as={MdGroupAdd} boxSize={6} />}
              color="green.500"
              onClick={openNewForm}
            />
            <IconButton
              aria-label="download-member"
              icon={<Icon as={MdOutlineDownload} boxSize={6} />}
              color="orange.500"
            />
          </HStack>
          <ChakraTable<Member>
            data={formatMemberData({ data: data.data, openEditForm: openUpdateForm, openDeleteForm })}
            columns={fields}
            page={pageParams}
            changePage={changePage}
            total={data?.total || 0}
            isLoading={isLagging}
          />
        </Box>
      ) :(
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress isIndeterminate />
        </Box>
      )}
      </Box>
    </Flex>
  );
}