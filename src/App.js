import { useEffect } from "react";

import Scribex from "./components/Scribex";
import { ScribexContextProvider } from "./hooks/ScribexContext";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ScribexContextProvider>
        <Scribex />
      </ScribexContextProvider>
    </div>
  );
}
