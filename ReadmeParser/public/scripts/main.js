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

<<<<<<< HEAD



// functions 
const summarizeFetch = (newText, callback) => {

  // console.log(newText);
  const apiKey = "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";
  const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";
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
=======

function getLinkToRepos(URL){
  let username = URL.match(/github.com\/(.+)\?/);
  console.log("Parsing URL :=> " + URL);
  console.log("USER : " + username[1]);
  
  fetch(URL)
  .then(response => response.text())
  .then(html => {
    
    
    const pattern = /(<div id="user-repositories-list".+[.\n\s\w\W]+<\/ul>)/gm;

    const matched = html.match(pattern);
    
    const pattern2 = /<a href="(.*)" .* >[\W\s]+(.+)<\/a>/gm;
    


    const foundtags = matched[0].match(pattern2);
    console.log("Found tags containing repo -------------");
    console.log(foundtags);

    const pattern3 = /"(.+)"\s\w+/;

    const foundLink = foundtags[1].match(pattern3);
    let arrToString = "";
    let arrayOfLink = [];
    for (let i = 0; i < foundtags.length ; i++){
      const foundLink = foundtags[i].match(pattern3);

      arrayOfLink.push(foundLink[1]);
      arrToString += `${i}: https://github.com/${username[1]+foundLink[1]} \n`;
    }

    console.log(`Links to Repositories grabbed ----------- \n${arrToString}\n`)

  })
  .catch(error => console.error(error));

}


>>>>>>> 2aa4502ba0392b44b3376418ce8449b2ad112b14

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
    console.log("summary:\n")
    selectOption.value === "option1" ? readGithubPath() : readDoc()
  });
}

// const apiKey = "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";
// const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";

// fetch(apiUrl, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${apiKey}`,
//   },
//   body: JSON.stringify({
//     prompt: newText + '\nTL;DR:\n',
//     max_tokens: 50,
//     temperature: 0.5,
//     n: 1,
//     stop: "\n",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));



/* Main */
/** function and class syntax examples */
rhit.main = function () {
<<<<<<< HEAD
  summary()
=======
	console.log("Ready");
  getLinkToRepos("https://github.com/rhit-halseysh?tab=repositories");

>>>>>>> 2aa4502ba0392b44b3376418ce8449b2ad112b14
};

rhit.main();
