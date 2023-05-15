const express = require("express");
const cors = require("cors");
const axios = require("axios");
// const { lutimes } = require("fs/promises");
const app = express();
const port = 3500;


app.use(express.json());
app.use(cors());

const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '35d6872460msh7705f9f29d342bbp109a34jsn05ee531d47ad',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };


app.get("/data", (req, res) => {
    axios.request(options)
  .then((resp) => {
    res.json(resp.data);
});
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
