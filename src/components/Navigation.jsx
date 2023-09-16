// import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  VStack,
  HStack,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function Navigation() {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex align="center">
        {/* Mobile Navigation Toggle Button */}
        <IconButton
          display={{ base: 'block', md: 'none' }}
          aria-label="Toggle Navigation"
          icon={<HamburgerIcon />}
        />

        {/* Logo */}
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Your App
          </Text>
        </Box>

        <Spacer />

        {/* Desktop Navigation Links */}
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <Link to="/">Home</Link>
          <Link to="/create">Create Form</Link>
        </HStack>

        {/* Mobile Navigation Drawer */}
        <VStack
          spacing={4}
          display={{ base: 'block', md: 'none' }}
          position="absolute"
          top="60px" /* Adjust as needed */
          right="0"
          bg="blue.500"
          p={4}
        >
          <Link to="/">Home</Link>
          <Link to="/create">Create Form</Link>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Navigation;
