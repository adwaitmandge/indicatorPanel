// content_script.js

// Function to interact with the DOM elements
function manipulateDOM() {
  console.log("hoisfaj");
  // Example: Changing the background color of all paragraphs to red

  // const tweetContainer = document
  //   .querySelector("section")
  //   .querySelector("div")
  //   .querySelector("div")
  //   .querySelector("div")
  //   .querySelector("div")
  //   .querySelectorAll("article")
  // .querySelectorAll("img");
  console.log("About to display the the anchor tag");
  // console.log(tweetContainer);
  // for (const article of tweetContainer) {
  //   const tweet = article
  //     .querySelector("div")
  //     .querySelector("div")
  //     .children.item(1)
  //     .children.item(1)
  //     .children.item(1)
  //     .querySelector("span");
  //   if (tweet?.innerHTML) {
  //     console.log(tweet.innerHTML
  //   } else {
  //     console.log("No text");
  //   }
  //   article.style.display = "none";
  // }
  // tweet.style.backgroundColor = "red";
  const tweetContainer = document
    .querySelector("section")
    .querySelector("div")
    .querySelector("div")
    .querySelector("div")
    .querySelector("div")
    .querySelectorAll("article");

  for (let article of tweetContainer) {
    const imageElement = article
      .querySelector("div")
      .querySelector("div")
      .children.item(1)
      .children.item(1)
      .children.item(2)
      .querySelector("img");
    console.log("About to display the image");
    if (imageElement) {
      console.log(imageElement.src);
    } else {
      console.log("No image element");
    }
  }
}

// Execute the function when the content script is injected into the page
setInterval(manipulateDOM, 5000);

// async function apicall() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   console.log(data);
// }

// apicall();
