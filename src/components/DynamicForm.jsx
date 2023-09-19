import { useState } from "react";
import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

function DynamicForm() {
  const [fields, setFields] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [obj, setobj] = useState({
    type:"",
    label:"",
    required:false
  })

  const addField = () => {
    setFields([...fields, obj]);
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
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <label>label</label>
            <input  name="label" onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})}/>
            
          <label>type</label>
            <input  name="type" onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button colorScheme="green" onClick={addField}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <Box key={index}>
          <Input
            value={field.label}
            // onChange={(e) => handleChange(e.target.value, index)}
            // placeholder={`Field ${index + 1}`}
          />
          <Input value={field.type}/>
          <Button onClick={() => removeField(index)} colorScheme="red">
            Remove
          </Button>
        </Box>
      ))}
      <Button onClick={openModal} colorScheme="teal">
        Add Field
      </Button>
      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </form>
    </>
  );
}

export default DynamicForm;
