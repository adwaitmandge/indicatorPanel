// content_script.js

// Function to interact with the DOM elements
const manipulateDOM = async () => {
  setTimeout(async () => {
    console.log("hoisfaj");
    // Example: Changing the background color of all paragraphs to red

    const tweetContainer = document
      .querySelector("section")
      .querySelector("div")
      .querySelector("div")
      .querySelector("div")
      .querySelector("div")
      .querySelectorAll("article");
    console.log("About to display the the anchor tag");
    console.log(tweetContainer);
    for (const article of tweetContainer) {
      const tweet = article
        .querySelector("div")
        .querySelector("div")
        .children.item(1)
        .children.item(1)
        .children.item(1)
        .querySelector("span");
      if (tweet?.innerHTML) {
        console.log(tweet.innerHTML);
        try {
          const res = await fetch("http://localhost:5000/classify", {
            method: "POST",
            body: tweet.innerHTML,
          });

          const data = await res.json();
          console.log(data);

          if (
            data.result.splice(4) == "Fake" ||
            data.result.splice(4) == "fake" ||
            data.result.splice(4) == 0
          ) {
            article.style.backgroundColor = "red";
          } else {
            return;
          }
        } catch (err) {
          console.error(err.message);
        }
      } else {
        console.log("No text");
      }
    }
    // tweet.style.backgroundColor = "red";
  }, 4000);

  // setTimeout(async () => {
  //   const tweetContainer = document
  //     .querySelector("section")
  //     .querySelector("div")
  //     .querySelector("div")
  //     .querySelector("div")
  //     .querySelector("div")
  //     .querySelectorAll("article");

  //   for (let article of tweetContainer) {
  //     const imageElement = article
  //       .querySelector("div")
  //       .querySelector("div")
  //       .children.item(1)
  //       .children.item(1)
  //       .children.item(2)
  //       .querySelector("img");

  //     console.log("About to display the image");
  //     if (imageElement) {
  //       console.log(imageElement.src);
  //       // About to send an image to the flask server
  //       try {
  //         const res = await fetch("http://localhost:5000/imagegenerator", {
  //           method: "POST",
  //           body: imageElement.src,
  //         });

  //         const data = await res.json();
  //         console.log(data);
  //       } catch (err) {
  //         console.error(err.message);
  //       }
  //     } else {
  //       console.log("No image element");
  //     }
  //   }
  // }, 4000);
};

// Execute the function when the content script is injected into the page
manipulateDOM();

// async function apicall() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   console.log(data);
// }

// apicall();
