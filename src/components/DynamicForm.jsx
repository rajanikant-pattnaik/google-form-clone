import { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

function DynamicForm() {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([...fields, ""]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleChange = (value, index) => {
    const updatedFields = [...fields];
    updatedFields[index] = value;
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", fields);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <Box key={index}>
          <Input
            value={field}
            onChange={(e) => handleChange(e.target.value, index)}
            placeholder={`Field ${index + 1}`}
          />
          <Button onClick={() => removeField(index)} colorScheme="red">
            Remove
          </Button>
        </Box>
      ))}
      <Button onClick={addField} colorScheme="teal">
        Add Field
      </Button>
      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </form>
  );
}

export default DynamicForm;
