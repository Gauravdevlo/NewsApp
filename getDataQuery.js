require("dotenv").config();

let apiKeyarr = JSON.parse(process.env.NEWS_API_ARR);

let i = 0;

let apiKey = "bc44b1aa876e4c02921593da7b50ff66";

const getData = async (q) => {
  let url = `https://newsapi.org/v2/everything?q=${q}&apiKey=bc44b1aa876e4c02921593da7b50ff66`;

  let response = await fetch(url);

  while (!response.ok) {
    for (const key of apiKeyarr) {
      apiKey = key;

      url = `https://newsapi.org/v2/everything?q=${q}&apiKey=bc44b1aa876e4c02921593da7b50ff66`;

      response = await fetch(url);

      if (response.ok) {
        break;
      }
    }
    // console.log('Hi');

    i++;

    if (i > 8) {
      break;
    }
  }
  if (response.ok) {
    let data = response.json();

    return data;
  }
};

module.exports = getData;
