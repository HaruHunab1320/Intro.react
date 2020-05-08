import React from "react";

const Details = (props) => {
  return (
    //This is a debugging technique to get a full list of the info that the router is pulling in, or use react dev tool in inspector
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
