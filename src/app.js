import React, { useState, lazy, Suspense } from "react";
//I could import reactDom with reactDom, but this way only grabs specifically the render function. This isnt destructuring but is kind of like destructuring
import { render } from "react-dom";
import { Router } from "@reach/router";

import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
//CODE SPLITTING: if your going to code split, you should be splitting at least 30kb otherwise its not worth it

//Details is a placeholder component that will not load until details is rendered for the first time.
// this is a lazy loaded component, parcel knows what to do with this and splits it into a seperate bundle.
//this is called a dynamic import
const Details = lazy(() => import("./Details"));
//Anytime App() is called, its going to "stamp" a div and an h1 with the tag "adopt Me"
const App = () => {
  const themeHook = useState({
    buttonColor: "darkblue",
    modalColor: "pink",
  });
  return (
    //strictmode forces you to use code not schedules for deprecation.
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          {/* suspense will show loading route untill the details component is rendered */}
          <Suspense fallback={<h1>loading route ...</h1>}>
            <Router>
              <SearchParams path="/" />

              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

//React.createElement can take a literal string like "h1" or a stamp we created earlier
//written in raw react as:
// render(React.createElement(App), document.getElementById("root"));

//written in JSX as:
render(<App />, document.getElementById("root"));
