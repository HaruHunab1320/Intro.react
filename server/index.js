import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/app";

const PORT = process.env.PORT || 3000;

//this will read the output html so that we can use it in server side rendering
const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((req, res) => {
  res.write(parts[0]);
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  //nodeStream is a specific node data structure that progressively gives you data over time
  const stream = renderToNodeStream(reactMarkup);
  //stream.Pipe says connect this pipe with that pipe, send off the mark up to the res, but dont end it when its done...
  stream.pipe(res, { end: false });

  stream.on("end", () => {
    //..once your finished write the last piece of the html
    res.write(parts[1]);
    res.end();
  });
});

console.log("listening on " + PORT);
app.listen(PORT);
