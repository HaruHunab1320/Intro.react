import React from "react";
//I could import reactDom with reactDom, but this way only grabs specifically the render function. This isnt destructuring but is kind of like destructuring
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

//Anytime App() is called, its going to "stamp" a div and an h1 with the tag "adopt Me"
const App = () => {
  return (
    //strictmode forces you to use code not schedules for deprecation.
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

//React.createElement can take a literal string like "h1" or a stamp we created earlier
//written in raw react as:
// render(React.createElement(App), document.getElementById("root"));

//written in JSX as:
render(<App />, document.getElementById("root"));
