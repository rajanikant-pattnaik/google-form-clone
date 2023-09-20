import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

function FormCreation() {
  const [formTitle, setFormTitle] = useState("");
  const [description,setDescription]=useState("");
  const [id,setId]=useState("");

 
  const [fields, setFields] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [obj, setobj] = useState({
    type: "",
    label: "",
    require: false,
  });

  const addField = () => {
    setFields([...fields, obj]);
    setobj({
      type: "",
      label: "",
      required: false,
    });
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
  const handleFormSubmit = async(e) => {
    // Implement form creation logic here
    e.preventDefault();
    console.log({id,formTitle,description,fields})
    try {
      const res=await axios.post('http://localhost:4000/api/v1/forms/new',{id,formTitle,description,fields});
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const data = JSON.parse(localStorage.getItem("user"));
      setId(data.id);
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
          <Box className="form-container" maxW="400px" m="0 auto">
          <VStack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="label">Label</FormLabel>
              <Input
                type="text"
                id="label"
                name="label"
                onChange={(e) => setobj({ ...obj, [e.target.name]: e.target.value })}
              />
            </FormControl>
        
            <FormControl>
              <FormLabel htmlFor="type">Type</FormLabel>
              <Input
                type="text"
                id="type"
                name="type"
                onChange={(e) => setobj({ ...obj, [e.target.name]: e.target.value })}
              />
            </FormControl>
            <FormControl>
            <FormLabel htmlFor="checkbox">Checkbox</FormLabel>
            <Checkbox
              id="require"
              name="require"
              onChange={(e) => setobj({ ...obj, [e.target.name]: e.target.checked })}
            >
              Check this box
            </Checkbox>
          </FormControl>
          </VStack>
        </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button colorScheme="green" onClick={addField}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
        <FormControl>
          <FormLabel>Form description</FormLabel>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <Box key={index}>
              <Input
                value={field.label}
                // onChange={(e) => handleChange(e.target.value, index)}
                // placeholder={`Field ${index + 1}`}
              />
              <Input value={field.type} />
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
        <Button onClick={handleFormSubmit}>Create Form</Button>
      </Box>
    </>
  );
}

export default FormCreation;
