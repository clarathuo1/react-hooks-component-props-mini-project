import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header className="App header"><h2>Underreacted</h2></header>
      <aside className="App aside"><h1>Aside Component</h1></aside>
      <main className="App main"><h1>Main Component</h1></main>
    </div>
  );
}

export default App;