"use strict";

const NUMS_URL = "http://numbersapi.com/";
const CARDS_URL = "http://deckofcardsapi.com/api/";

async function getNumberFact() {
  const response = await axios.get("http://numbersapi.com/1,2,3,4?json");
  // console.log("response.data", response.data);
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
  // console.log(results);
  const numFacts = results.map(fact => fact.value.data.text)

  for (let num in numFacts) {
    $("#fav-num-facts").append(`<p>${numFacts[num]}</p>`);
  }
}

getFactsForFavNum();




async function draw(){
  const resp2 = await axios({
    baseURL: CARDS_URL,
    url: "deck/aq5hvfx4xq0r/draw/",
    method: "GET",
    params: {"count": 1}
  });
  const card2 = resp2.data.cards[0];
  const cardVal2 = card2.value;
  const cardSuit2 = card2.suit;
  console.log(`${cardVal2} of ${cardSuit2}`);

  $("#card-deck").append(`<div>${cardVal2} of ${cardSuit2}</div>`)


}






$("#get-card").on("submit",async function (evt){
  evt.preventDefault();
  await draw();
})
