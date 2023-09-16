// import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem } from '@chakra-ui/react';

function FormList() {
  // Fetch user's forms from a database or state

  return (
    <Box>
      <h1>Your Forms</h1>
      <List>
        {/* Map through user's forms and display them */}
        <ListItem>
          <Link to="/responses/form-1">Form 1</Link>
        </ListItem>
        <ListItem>
          <Link to="/responses/form-2">Form 2</Link>
        </ListItem>
        {/* Add more form links */}
      </List>
      <Button as={Link} to="/create">
        Create New Form
      </Button>
    </Box>
  );
}

export default FormList;
