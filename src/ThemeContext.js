import { createContext } from "react";

//You can put anything into createContext, here we are using a hook(has a state and an updater).
//By declaring the empty function, we are defining an empty placeholder that will be used if nothing is provided.
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
