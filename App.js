import { useState } from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import Login from "./app/Login";
import ToDoList from "./app/ToDoList";

export default function App() {
  
  const[user, setUser] = useState();

  return (
    <NativeBaseProvider>
      <Box bg="darkBlue.900" alignItems="center" justifyContent="center" flex={1}>
        <Text color="darkBlue.400" fontSize="4xl" >Chekov ToDo</Text> 
        {!user
          ? <Login setUser={setUser} />
          : <ToDoList user={user} /> 
          }
      </Box>
    </NativeBaseProvider>
  );
}


