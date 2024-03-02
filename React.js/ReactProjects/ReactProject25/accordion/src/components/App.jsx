import React, { useState } from "react";
// import ReactDOM from "react-dom";
import data from "./data";

function App() {
  const [selection, setSelection] = useState(null);
  const [enableMultiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(currentId) {
    setSelection(selection === currentId ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    setMultiple((prevArray) => {
      return prevArray.includes(currentId)
        ? prevArray.filter((item) => {
            return currentId !== item;
          })
        : [...prevArray, currentId];
    });
  }
  return (
    <div className="ItemList">
      <button
        type="button"
        onClick={() => setMultiSelection(enableMultiSelection ? false : true)}
      >
        MultiSelection
      </button>
      {data.map((dataItem) => {
        return (
          <div
            className="Item"
            onClick={
              enableMultiSelection
                ? () => handleMultiSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)
            }
          >
            <div className="Title">
              <h3>{dataItem.question}</h3>
              <span className="Extend">+</span>
            </div>
            {enableMultiSelection ? (
              multiple.includes(dataItem.id) ? (
                <div>{dataItem.content}</div>
              ) : null
            ) : selection === dataItem.id ? (
              <div>{dataItem.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default App;
