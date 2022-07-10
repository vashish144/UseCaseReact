import React, { useState } from "react";
import ToDoDisplay from "./ToDoDisplay";

const ToDo = () => {
  const [addRow, setAddRow] = useState([]);
  // date
  const date = new Date();
  let time = date.toLocaleTimeString();
  console.log("addRow", addRow);
  // addRow at Top
  const addRowAtTop = () => {
    const tableContent = {
      _index: addRow.length,
      id: addRow.length + 1,
      value: "",
      _time: time,
    };
    // console.log("tableContent", tableContent);
    setAddRow([tableContent, ...addRow]);
  };
  // addRow at bottom
  const addRowAtBottom = () => {
    const tableContent = {
      _index: addRow.length,
      id: addRow.length + 1,
      value: "",
      _time: time,
    };
    // console.log("tableContent", tableContent);
    setAddRow([...addRow, tableContent]);
  };

  // sort Assending
  const sortAssending = () => {
   const onBasisOFId= [...addRow].sort((a, b) => {
      return a.id - b.id;
    });
    setAddRow(onBasisOFId)
  };
// sorting Dessending
  const sortDessending = () => {
    const onBasisOFId= [...addRow].sort((a, b) => {
       return b.id - a.id;
     });
     setAddRow(onBasisOFId)
   };
  // display handler
  const handleOnChage = (data, e) => {
    data.value = e.target.value;
    // console.log("data", data);
  };

  //   display row of table
  const displayData = addRow.map((data, index) => {
    return (
      <ToDoDisplay  key={data.id} item={data} index={index} handleOnChage={handleOnChage}/>
    );
  });

  return (
    <>
      <div className="buttonComponent" style={{ textAlign: "center" }}>
        <button className="addClassTop" onClick={addRowAtTop}>
          AddTop
        </button>
        ||
        <button className="addClassBottom" onClick={addRowAtBottom}>
          AddBottom
        </button>
        ||
        <button className="sortAccending" onClick={sortAssending}>
          SortAccending
        </button>
        ||
        <button className="sortDesending" onClick={sortDessending}>SortDesending</button>
      </div>
      <div>
        <table style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>index</th>
              <th>id</th>
              <th>Item</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>{displayData}</tbody>
        </table>
      </div>
    </>
  );
};

export default ToDo;
