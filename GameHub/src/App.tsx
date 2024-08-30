import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="blue">Button</Button>
      </Stack>
    </div>
  );
}

export default App;
