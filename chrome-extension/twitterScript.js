// content_script.js

// Function to interact with the DOM elements
const manipulateDOM = async () => {
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
  setTimeout(async () => {
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
        // About to send an image to the flask server
        try {
          const res = await fetch("http://localhost:5000/imagegenerator", {
            method: "POST",
            body: imageElement.src,
          });

          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.error(err.message);
        }
      } else {
        console.log("No image element");
      }
    }
  }, 4000);
};

// Execute the function when the content script is injected into the page
manipulateDOM();

// async function apicall() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   console.log(data);
// }

// apicall();
