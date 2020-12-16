import "./App.css";
import React from "react";
import DropLeftLayout from "./components/drop/DropLeft/DropLeftLayout";
import ModalLayout from "./components/common/Modal/ModalLayout";
import TextInput from "./components/common/input/TextInput";
import SearchBar from "./components/common/input/SearchBar";

function App() {
  return (
    <div className="App">
      <DropLeftLayout />
      <ModalLayout />
      <TextInput placeholder="text" />
      <SearchBar />
    </div>
  );
}

export default App;
