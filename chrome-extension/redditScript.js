// content_script.js

// Function to interact with the DOM elements
function manipulateDOM() {
  console.log("hoisfaj");
  // Example: Changing the background color of all paragraphs to red

  setTimeout(async () => {
    const allHeadlines = document.querySelectorAll("h3");
    for (const headline of allHeadlines) {
      console.log(headline.innerText);

      // Creating spinner
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
      headline.parentElement.appendChild(spanParent);
      try {
        const res = await fetch("http://localhost:5000/category_classifier", {
          method: "POST",
          body: headline.innerText,
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

          headline.parentElement.appendChild(paragraph);
        } else {
          spanParent.style.display = "none";
          const paragraph = document.createElement("p");
          paragraph.innerHTML = "&#9989;";
          paragraph.style.fontSize = "40px";

          headline.parentElement.appendChild(paragraph);
        }

        try {
          const res = await fetch("http://localhost:4000/api/news/storeNews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData),
          });

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

      headline.parentElement.appendChild(spanParent);
    }
  }, 4000);
  // tweet.style.backgroundColor = "red";
}

// Execute the function when the content script is injected into the page
manipulateDOM();

// async function apicall() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   console.log(data);
// }

// apicall();
