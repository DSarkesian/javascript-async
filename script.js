"use strict"

const NUMS_URL = "http://numbersapi.com/";

async function getNumberFact(){
  const response = await axios.get("http://numbersapi.com/1,2,3,4?json")
  console.log("response.data", response.data)
  $("#num-facts").append( `<p>${response.data}</p>` );
}
getNumberFact();
