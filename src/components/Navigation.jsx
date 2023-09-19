// import React from 'react';
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import {
  Box,
  Flex,
  Spacer,
  VStack,
  HStack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import AuthForm from "./AuthForm";

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setname] = useState("");
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const data = JSON.parse(localStorage.getItem("user"));
      setname(data.name);
    } else {
      setIsModalOpen(true);
    }
  }, []);
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AuthForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button colorScheme="green">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box bg="blue.500" p={4} color="white">
        <Flex align="center">
          {/* Mobile Navigation Toggle Button */}
          <IconButton
            display={{ base: "block", md: "none" }}
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
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            <Link to="/">Home</Link>
            <Link to="/create">Create Form</Link>
            {name === "" ? (
              <Button onClick={openModal}>Open Modal</Button>
            ) : (
              <p onClick={handleLogout}>{name}</p>
            )}
          </HStack>

          {/* Mobile Navigation Drawer */}
          <VStack
            spacing={4}
            display={{ base: "block", md: "none" }}
            position="absolute"
            top="60px" /* Adjust as needed */
            right="0"
            bg="blue.500"
            p={4}
          >
            <Link to="/">Home</Link>
            <Link to="/create">Create Form</Link>
            {name === "" ? (
              <Button onClick={openModal}>Open Modal</Button>
            ) : (
              <p onClick={handleLogout}>{name}</p>
            )}
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default Navigation;
