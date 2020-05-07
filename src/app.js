import React from "react";
//I could import reactDom with reactDom, but this way only grabs specifically the render function. This isnt destructuring but is kind of like destructuring
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

//Anytime App() is called, its going to "stamp" a div and an h1 with the tag "adopt Me"
const App = () => {
  // return React.createElement(
  //   //1st param is what kind of element it is
  //   "div",
  //   //2nd param is for what type of attributes there are eg. id="thisId"
  //   { id: "something-important" },
  //   [
  //     //3rd param is for what children there are, you can use an array [] for multiple children (div can have 15 children) but it isnt required
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "Cockatiel",
  //     }),
  //     React.createElement(Pet, {
  //       name: "sunshine",
  //       animal: "Pig",
  //       breed: "Big Ol' Boy",
  //     }),
  //   ]
  // );

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

//React.createElement can take a literal string like "h1" or a stamp we created earlier
//written in raw react as:
// render(React.createElement(App), document.getElementById("root"));

//written in JSX as:
render(<App />, document.getElementById("root"));
