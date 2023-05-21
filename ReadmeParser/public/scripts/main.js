/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "";

/** function and class syntax examples */
rhit.functionName = function () {
  /** function body */

};

rhit.ClassName = class {
  constructor() {

  }

  methodName() {

  }
}





//normalize the input

function normalizeText(text) {
  // remove HTML tags
  text = text.replace(/<[^>]*>/g, '');
  // convert text to lowercase
  text = text.toLowerCase();
  // remove non-alphanumeric characters
  text = text.replace(/[^0-9a-z]/g, ' ');
  // remove extra spaces and new lines
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}


// function gethtml() {
//   fetch('https://github.com/rhit-halseysh?tab=repositories')
//     .then(response => response.text())
//     .then(html => {
//       const pattern = /(<div id="user-repositories-list".+[.\n\s\w\W]+<\/ul>)/gm;

//       const matched = html.match(pattern);

//       const pattern2 = /<a href="(.*)" .* >[\W\s]+(.+)<\/a>/gm;



//       //console.log(typeof(matched[0]));

//       const foundLink = matched[0].match(pattern2);

//       console.log(foundLink);


//     })
//     .catch(error => console.error(error));
// }



// functions 
const summarizeFetch = (newText, callback) => {

  const apiKey = "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";
  const engine = "curie" // Or other Chatgpt3 models
  const apiUrl = "https://api.openai.com/v1/engines/" + engine + "/completions";
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: newText + '\nTL;DR:\n',
      max_tokens: 50,
      temperature: 0.5,
      n: 1,
      stop: "\n",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      callback(data);
    })
    .catch((error) => console.error(error));
}


const readGithubPath = () => {
  const inputElement = document.getElementById("github-text");
  const inputValue = inputElement.value;
  console.log(inputValue);

  //return inputValue;
}

const readDoc = () => {
  const fileUploadElement = document.getElementById("file-upload");
  const selectedFile = fileUploadElement.files[0];
  var textarea = document.querySelector('textarea');
  if (selectedFile) {
    const reader = new FileReader();
    reader.readAsText(selectedFile);
    reader.onload = function () {
      //console.log(reader.result);
    };
    reader.onload = function () {
      const fileContents = reader.result;
      console.log(fileContents);
      const normalizedText = normalizeText(fileContents);
      summarizeFetch(normalizedText, function (summary) {
        textarea.value = summary.choices[0].text;
      });
    };
  }
}

const summary = () => {
  const selectOption = document.querySelector('select');
  const summarizeButton = document.querySelector(".button1");
  summarizeButton.addEventListener("click", () => {
    console.log("content:\n")
    selectOption.value === "option1" ? readGithubPath() : readDoc()
  });
}



/* Main */
/** function and class syntax examples */
rhit.main = function () {
  summary();
};

rhit.main();
