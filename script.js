"use strict";

const NUMS_URL = "http://numbersapi.com/";

async function getNumberFact() {
  const response = await axios.get("http://numbersapi.com/1,2,3,4?json");
  console.log("response.data", response.data);
  const numFacts = response.data;
  for (let num in numFacts) {
    $("#num-facts").append(`<p>${numFacts[num]}</p>`);
  }
}
getNumberFact();


async function getFactsForFavNum() {
  const resp1 = axios.get("http://numbersapi.com/42?json");
  const resp2 = axios.get("http://numbersapi.com/42?json");
  const resp3 = axios.get("http://numbersapi.com/42?json");
  const resp4 = axios.get("http://numbersapi.com/42?json");

  let results = await Promise.allSettled([resp1, resp2, resp3, resp4]);
  console.log(results);
  const numFacts = results.map(fact => fact.value.data.text)

  for (let num in numFacts) {
    $("#fav-num-facts").append(`<p>${numFacts[num]}</p>`);
  }
}

getFactsForFavNum();