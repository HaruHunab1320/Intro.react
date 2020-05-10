import React from "react";
import { hydrate } from "react-dom";
import App from "./app";

//hydrate is like render except it is saying "I expect there to be markup already in this place, just take over from there and dont re-render"
//render would say blow away anything that was there and rerender

hydrate(<App />, document.getElementById("root"));
