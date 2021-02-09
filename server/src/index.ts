import express from "express";
import bodyParser from "body-parser";
import { listings } from "./listings";

// assigning express instance to a variable app
const app = express();
const port = 9000;

app.use(bodyParser.json());

// mock GET call
app.get("/listings", (_req, res) => {
  return res.send(listings);
});

// mock POST request to delete routes
app.post("/delete-listing", (req, res) => {
  const id: string = req.body.id;

  // find the listing we want to delete
  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
  }

  return res.send('failed to delete listing');
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
