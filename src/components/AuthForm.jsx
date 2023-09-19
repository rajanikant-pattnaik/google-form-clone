import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setisLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can add your logic for handling registration or login
    if (isLogin) {
      // Handle login
      try {
        const data = await axios.post(
          "http://localhost:4000/api/v1/users/login",
          { email, password }
        );
        const user = data.data;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      // Handle registration
      console.log({ name, email, password });
    }
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <Box p={4} maxW="400px" mx="auto">
      <Heading as="h2" size="xl" textAlign="center">
        {isLogin ? "Login" : "Register"}
      </Heading>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <FormControl mt={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
        )}
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button mt={6} isFullWidth type="submit" colorScheme="teal">
          {isLogin ? "Login" : "Register"}
        </Button>
        <Button
          mt={6}
          colorScheme="teal"
          isFullWidth
          onClick={() => setisLogin(!isLogin)}
        >
          change
        </Button>
      </form>
    </Box>
  );
};

export default AuthForm;
