import { choice, remove } from "./helpers";
import React from "react";
import fruits from "./foods";
import "./App.css";

function App() {
  let fruit = choice(fruits);
  console.log(`I'd like one ${fruit}, please`);
  console.log(`Here you go: ${fruit}`);
  console.log(`Delicious! May I have another?`);
  let remaining = remove(fruit, fruits);
  console.log(`I'm sorry, we're all out. We have ${remaining.length} left`);
  return <h1>Testing</h1>;
}

export default App;
