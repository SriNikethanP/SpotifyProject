import React from "react";
import Flashcard from "./Flashcard";
import emojipedia from '../emojipedia'



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map( (emojipedia)=> {
  return (
    <Flashcard 
        key = {emojipedia.id}
          emoji={emojipedia.emoji}
          name={emojipedia.name}
          meaning={emojipedia.meaning}
        />

  )
})}
      </dl>
    </div>
  );
}

export default App;
