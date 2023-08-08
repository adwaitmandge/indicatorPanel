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
          const res = await fetch("http://localhost:5000/category_classifier", {
            method: "POST",
            body: tweet.innerHTML,
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
          //   article.style.backgroundColor = "red";
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
