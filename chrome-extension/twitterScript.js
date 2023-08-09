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
      var divChild = document.createElement("div");
      divChild.style.border = "16px solid #f3f3f3";
      divChild.style.borderTop = "16px solid #3498db";
      divChild.style.borderRadius = "50%";
      divChild.style.width = "40px";
      divChild.style.height = "40px";
      divChild.style.animation = "spin 2s linear infinite";

      // Create the @keyframes spin animation
      var styleSheet = document.styleSheets[0];
      var keyframes = `@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

      if (styleSheet.insertRule) {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      } else if (styleSheet.addRule) {
        styleSheet.addRule("@keyframes spin", keyframes);
      }

      // Append divChild to spanParent
      var spanParent = document.createElement("span");
      spanParent.appendChild(divChild);

      article
        .querySelector("div")
        .querySelector("div")
        .children.item(1)
        .children.item(1)
        .children.item(1)
        .appendChild(spanParent);

      const captionTweet = article
        .querySelector("div")
        .querySelector("div")
        .children.item(1)
        .children.item(1)
        .children.item(1)
        .querySelector("span");

      // const tweetAttributesContainer = article
      //   .querySelector("div")
      //   .querySelector("div")
      //   .children.item(1)
      //   .children.item(1)
      //   .children.item(3)
      //   .querySelector("div");

      // const allTags = tweetAttributesContainer.querySelectorAll("div");
      // // Select only the first two divs
      // const commentsContainer = tweetAttributesContainer.querySelector("div");
      // const comment = commentsContainer
      //   .querySelector("div")
      //   .querySelector("div")
      //   .children.item(1)
      //   .querySelector("span")
      //   .querySelector("span")
      //   .querySelector("span").innerText;
      // console.log("The comment is", comment);

      // const retweetsContainer = tweetAttributesContainer.children.item(1);
      // const retweets = retweetsContainer
      //   .querySelector("div")
      //   .querySelector("div")
      //   .children.item(1)
      //   .querySelector("span")
      //   .querySelector("span")
      //   .querySelector("span").innerText;
      // console.log("The retweets is", retweets);

      if (captionTweet?.innerText) {
        console.log(captionTweet.innerText);
        try {
          const res = await fetch("http://localhost:5000/category_classifier", {
            method: "POST",
            body: captionTweet.innerText,
          });

          const data = await res.json();
          console.log(data);

          const newData = {
            category: data[0],
            lbyr: data[1],
            viewsType: data[2],
            newsType: data[3],
            propogandaType: data[4],
            speechType: data[5],
            clickbaitType: data[6],
            sentiment: data[7],
            impKeyWords: data[8],
          };

          console.log(newData);
          if (newData.newsType != "factual news") {
            // article.style.backgroundColor = "red";
            spanParent.style.display = "none";
            const paragraph = document.createElement("p");
            paragraph.innerHTML = "&#10006;";
            paragraph.style.fontSize = "40px";
            const targetElement = article
              .querySelector("div")
              .querySelector("div")
              .children.item(1)
              .children.item(1)
              .children.item(1);

            targetElement.appendChild(paragraph);
          } else {
            spanParent.style.display = "none";
            const paragraph = document.createElement("p");
            paragraph.innerHTML = "&#9989;";
            paragraph.style.fontSize = "40px";
            const targetElement = article
              .querySelector("div")
              .querySelector("div")
              .children.item(1)
              .children.item(1)
              .children.item(1);

            targetElement.appendChild(paragraph);
          }

          try {
            const res = await fetch(
              "http://localhost:4000/api/news/storeNews",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData),
              }
            );

            const dataResponse = await res.json();
            console.log(dataResponse);
          } catch (err) {
            console.error(err.message);
          }

          // if (
          //   data.result.splice(4) == "Fake" ||
          //   data.result.splice(4) == "fake" ||
          //   data.result.splice(4) == 0
          // ) {
          // } else {
          //   return;
          // }
        } catch (err) {
          console.error(err.message);
        }
      } else {
        // OCR / IMAGE CAPTION
        console.log("No text");

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

            const newData = {
              category: data[0],
              lbyr: data[1],
              viewsType: data[2],
              newsType: data[3],
              propogandaType: data[4],
              speechType: data[5],
              clickbaitType: data[6],
              sentiment: data[7],
              impKeyWords: data[8],
            };

            console.log(newData);

            if (newData.newsType != "factual news") {
              // article.style.backgroundColor = "red";
              spanParent.style.display = "none";
              const paragraph = document.createElement("p");
              paragraph.innerHTML = "&#10006;";
              paragraph.style.fontSize = "40px";
              article
                .querySelector("div")
                .querySelector("div")
                .children.item(1)
                .children.item(1)
                .children.item(1)
                .appendChild(paragraph);
            } else {
              spanParent.style.display = "none";
              const paragraph = document.createElement("p");
              paragraph.innerHTML = "&#9989;";
              paragraph.style.fontSize = "40px";
              article
                .querySelector("div")
                .querySelector("div")
                .children.item(1)
                .children.item(1)
                .children.item(1)
                .appendChild(paragraph);
            }

            try {
              const res = await fetch(
                "http://localhost:4000/api/news/storeNews",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(newData),
                }
              );

              const dataResponse = await res.json();
              console.log(dataResponse);
            } catch (err) {
              console.error(err.message);
            }
          } catch (err) {
            console.error(err.message);
          }
        } else {
          console.log("No image element");
        }
      }
    }
    // tweet.style.backgroundColor = "red";
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
