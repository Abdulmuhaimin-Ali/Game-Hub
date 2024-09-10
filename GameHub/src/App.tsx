import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import { Grid } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import { NavBar } from "./components/NavBar";
import AsideGrid from "./components/AsideGrid";
import { GenreList } from "./components/GenreList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <AsideGrid />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
