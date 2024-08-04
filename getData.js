require("dotenv").config();

let apiKeyarr = JSON.parse(process.env.NEWS_API_ARR);

let i = 0;

let apiKey = "bc44b1aa876e4c02921593da7b50ff66";

const getData = async (_category, _pageno, _pageSize) => {
  let category = _category ?? "general";

  let pageno = _pageno ?? 1;

  let pageSize = _pageSize ?? 20;

  let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}&page=${pageno}&pageSize=${pageSize}&category=${category}`;
  

  let response = await fetch(url);

  while (!response.ok) {
    for (const key of apiKeyarr) {
      apiKey = key;

      url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}&page=${pageno}&pageSize=${pageSize}&category=${category}`;

      

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
