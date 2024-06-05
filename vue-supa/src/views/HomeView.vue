<script>
const url = "https://api.quotable.io/random";
let likedQuotes = [];

async function createCard() {
  document.querySelector("quote").textcontent = "";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    document.querySelector("quote").insertAdjacentHTML(
      "beforeend",
      `<div id="bird"
    <h2 class="card-name">${data.content}</h2>
    </div>`
    );
  } catch (error) {
    console.error("error", error);
  }
}
createCard();
async function createCardlike() {
    document.querySelector("quote").textContent = "";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    document.querySelector("quote").insertAdjacentHTML(
      "beforeend",
      `<div id="bird"
    <h2 class="card-name">${data.content}</h2>
    </div>`
    );
    const quoteContent = document.querySelector("quote").textContent;
    if (quoteContent) {
      likedQuotes.push(quoteContent);
      console.log(likedQuotes);
    }
  } catch (error) {
    console.error("error", error);
  }
}

async function createCardDislike() {
    document.querySelector("quote").textContent = "";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    document.querySelector("quote").insertAdjacentHTML(
      "beforeend",
      `<div id="bird"
    <h2 class="card-name">${data.content}</h2>
    </div>`
    );
  } catch (error) {
    console.error("error", error);
  }
}

function showQuotes() {
    document.querySelector("quote").textcontent = "";
  const copies = likedQuotes.slice();
  for (let i = 0; i < copies.length - 1; i++) {
    for (let j = 0; j < copies.length - 1 - i; j++) {
      if (copies[j].length > copies[j + 1].length) {
        const temp = copies[j];
        copies[j] = copies[j + 1];
        copies[j + 1] = temp;
      }
    }
  }
  copies.forEach((quote, index) => {
    document.querySelector("quote").insertAdjacentHTML(
      "beforeend",
      `<div>
    <p>${index + 1}. ${quote}</p>
    </div>`
    );
  });
}

document.querySelector("btn2").addEventListener("click", createCardDislike);

document.querySelector("btn1").addEventListener("click", createCardlike);

document.querySelector("btn3").addEventListener("click", showQuotes);
</script>

<template>
   
  <body class="cool">
 
      <h2>After showing your saved quotes, hit dislike to see another one!</h2>
   
    <div id="quote"></div>
    <button type="text" id="btn1">Like</button>
    <button type="text" id="btn2">Dislike</button>
    <button type="text" id="btn3">My Quotes</button>
    
  </body>
<h3>hi</h3>


</template>
