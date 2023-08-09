// content_script.js

// Function to interact with the DOM elements
const manipulateDOM = async () => {
  setTimeout(async () => {
    console.log("Inside manipulate dom");
    const url = window.location.href;
    console.log(url);
    const allIDS = url.split("=");
    const data = allIDS[1];

    console.log("The id is ", data);

    try {
      const res = await fetch("http://localhost:5000/short_classifier", {
        method: "POST",
        body: data,
      });

      const dataResponse = await res.json();
      console.log(dataResponse);
    } catch (err) {
      console.error(err.message);
    }
  }, 4000);
};

// Execute the function when the content script is injected into the page
manipulateDOM();
