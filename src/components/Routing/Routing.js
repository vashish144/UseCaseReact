import React from "react";
import CovidTestComponent from "../CovidTest/CovidTestComponent";
import ToDo from "../TableSortingWithInputfileld/ToDo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CovidTestComponent />} />
        <Route path="/arraytable" element={<ToDo/>}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "2px" }}>
              <p>There is nothing here</p>
            </main>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
