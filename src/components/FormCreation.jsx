// import React, { useState } from 'react';

import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import DynamicForm from './DynamicForm';

function FormCreation() {
  const [formTitle, setFormTitle] = useState('');

  const handleFormSubmit = () => {
    // Implement form creation logic here
  };

  return (
    <Box>
      <h1>Create a New Form</h1>
      <FormControl>
        <FormLabel>Form Title</FormLabel>
        <Input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
      </FormControl>
      <DynamicForm/>
      <Button onClick={handleFormSubmit}>Create Form</Button>
    </Box>
  );
}

export default FormCreation;
