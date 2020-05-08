import React from "react";
import { Link } from "@reach/router";

//Use detructuring to pull out the specific properties to avoid writing something like props.name, props,animal, props.breed
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  //with a hook like [ foo, setFoo] = useState('blah), if you only wanted the "setFoo" value, you can use a _ as a place holder and ignore the lint checker with a comment
  //eg. [ _, setFoo ] = useState('blah') //eslint-disable-line no-unused-cars

  return (
    //changed this to <Link> because <a> tag destroys the DOM and regenerates it, where link redirects without detroying the DOM
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
}
