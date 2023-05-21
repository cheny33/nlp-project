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

const APIKEY = "INSERT KEY HERE"



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


function stripHtmlTagsAndLimitText(html, wordLimit) {
  // Remove HTML tags
  let strippedText = html.replace(/<[^>]+>/g, '');

  // Remove newline characters and extra spaces
  strippedText = strippedText.replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ');

  // Grab the first 990 words
  const words = strippedText.trim().split(' ');
  const truncatedText = words.slice(0, wordLimit).join(' ');

  // Check if the last word is within a sentence
  const lastWord = words[wordLimit - 1];
  const hasCompleteSentence = /\.[^\.\?!]*$/.test(truncatedText);

  // Extend the truncated text to include the rest of the sentence if needed
  let finalText = truncatedText;
  if (!hasCompleteSentence && words.length > wordLimit) {
    const remainingWords = words.slice(wordLimit);
    const sentenceEndIndex = remainingWords.findIndex(word => /\.\s*$/.test(word));
    if (sentenceEndIndex !== -1) {
      finalText += ' ' + remainingWords.slice(0, sentenceEndIndex + 1).join(' ');
    }
  }

  return finalText;
}


function getLinkToRepos(URL) {
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
      for (let i = 0; i < foundtags.length; i++) {
        const foundLink = foundtags[i].match(pattern3);

        arrayOfLink.push(foundLink[1]);
        arrToString += `${i}: https://github.com${foundLink[1]} \n`;
      }

      console.log(`Links to Repositories grabbed ----------- \n${arrToString}\n`)

    })
    .catch(error => console.error(error));

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
    console.log("summary:\n")
    selectOption.value === "option1" ? readGithubPath() : readDoc()
  });
}

function summarizeFetch(text) {
  console.log("RAW TEXT RECIEVED ================ >  GENERATING SUMMARIZATION ...");
  const prompt = `Prompt:
  You are a language model AI tasked with summarizing a given text from a README file into a maximum of 5 bullet points. Your response should end with a unique string of characters to indicate that the generation is complete.
  Try to indentify and include important key features, goals, and relevant informations such as frameworks or technologies utilized in your summary.
  Also please include any informations that would be useful to a recruiter in the tech industry.
  
  Text to be summarized:
  """
  ${text}
  """
  
  Please start by stating the name of the project, then provide the summary in at most 5 bullet points;

  Once the generation is complete, please append the following unique string of characters at the end of the generated text: ***GENERATION COMPLETE***.
` 
  
  const apiUrl = "https://api.openai.com/v1/engines/text-davinci-003/completions";

  const summarization = fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${APIKEY}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 1000,
        temperature: 0.5,
        n: 1,
        stop: "***GENERATION COMPLETE***",
      }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data.choices[0].text))
    .then((data) => {
;
    })
    .catch((error) => console.error(error));
}

function getReadMeFromRepo(URL) {
  console.log("Parsing URL :=> " + URL);

  fetch(URL)
    .then(response => response.text())
    .then(html => {

      // console.log(html);
      const pattern = /<article([.\n\s\w\W]+)<\/article>/gm;
      const matched = html.match(pattern);
      const rawText = stripHtmlTagsAndLimitText(matched[0], 850);

      return rawText;
    } )
    .then(rawText => {
      console.log("RAW TEXT GRABBED: ============= \n" + rawText);

      const summarize = summarizeFetch(rawText)
      return summarize;
    })
    .catch(error => console.error(error));

}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
  console.log("Ready");
  // getLinkToRepos("https://github.com/rhit-halseysh?tab=repositories");

  getReadMeFromRepo("https://github.com/JPStrydom/Crypto-Trading-Bot"); // - > take in  a link

  //    stripHtmlTagsAndLimitText(html, wordLimit) // -> take in raw html and grab first 1000 words
  //    summarizeFetch(text) // -> take in raw text

};


rhit.main();