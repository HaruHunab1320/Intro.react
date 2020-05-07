import React from "react";

//Use detructuring to pull out the specific properties to avoid writing something like props.name, props,animal, props.breed
export default function Pet({ name, animal, breed }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed),
  //   ]);
  // }

  return (
    //curly brace can contain anything on the right side of an = sign, not
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
