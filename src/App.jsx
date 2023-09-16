// import React from 'react';
import { ChakraProvider, CSSReset} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormCreation from './components/FormCreation';
import FormList from './components/FormList';
import FormResponse from './components/FormResponse';
import Navigation from "./components/Navigation";



function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<FormList/>} />
          <Route path="/create" element={<FormCreation/>} />
          <Route path="/responses/:formId" element={<FormResponse/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
