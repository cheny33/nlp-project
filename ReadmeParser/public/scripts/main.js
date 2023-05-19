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

const inputText = `Scouting P.A.S.S.\nA scouting system for FIRST FRC competitions developed by PWNAGE - Team #2451.\n\nLive Demo . Pit Scouting . Getting Started . FAQ\n\n  \n\nTable of Contents\nFeatures:\nConfigurable\nA JSON configuration file controls the elements of the game to track. Create a new configuration file each year for the new game, or tweak it week to week to refine your scouting. No additional coding needed.\nUniversal\nWorks on any device that has a web browser that runs JavaScript. Apple, Android, phones, tablets, laptops, it works on them all.\nLow/No Bandwidth\nNeither WiFi nor Cellular required at event. The web page can be downloaded before the event and doesn't need to be reloaded.\nEasy hosting\nSelf hosting via GitHub. (See directions below)\nThe Blue Alliance Integration\nPull data for the event from The Blue Alliance. Team #s, Team Names and Schedules\nGoogle Sheets Integration\nSend data to a Google Sheets spreadsheet\n\n(back to top)\n\nLive Demo\n\nThis repository is hosted on GitHub Pages. You can view a live version of it here: https://PWNAGERobotics.github.io/ScoutingPASS. (You can host your ScoutingPASS application on GitHub Pages as well.)\n\n(back to top)\n\nDescription:\n\nScouting PASS is a web page displayed in a browser. It consists of 5 "swipeable" pages each representing a specific aspect of a FRC match: Pre-Match, Autonomous, Teleop, End Game and Post-Match. A configuratioin file allows the screens to be easily modified to collect any metrics that are important for your scouting needs. The scouter can use the "Next" or "Prev" buttons or a swiping motion on touchscreens to move between pages. A QR code is dynamically generated on the last page. This QR code can be scanned to transfer the data to your data repository. The QR code can also be stored for processing later using a screenshot or camera. Once the data has been transfered, the scout hits the clear button and the form is cleared out and ready for the next match.\n\nConfiguration is as easy as creating a JSON file with the fields that your scouting team wants to track. Some fields are common to all teams and years. The basic fields are:\n\nScouter - who is scouting this robot\nEvent - the event that is being scouted\nLevel - The level of competition (Qualifications, Double Elimination, Finals, etc)\nMatch - the match number that is being scouted\nRobot - Which robot is being scouted (Red-1, Blue-1, etc.)\nTeam # - What team is being scouted\n\nUser defined fields can be of several different types:\n\nText - A freeform text field\nNumber - Like text, but restricted to numbers\nCounter - A counter that can be increased or decreased with a click or touch\nRadio Buttons - A single choice between several options (Ball pick up: ()Ground ()Loading Bay ()Both ()None)\nCheckbox - A single on/off or yes/no check box (Exit Start Line? []Yes if checked)\nTimer - A time counter to count the number of seconds it takes to do something (How long did it take to climb?)\nCycle Timer - Start the timer and with 1 click track cycle times of robots.\nField Image - Using an image of the field, select positions on the field. (Use to record starting point, or shooting locations)\n\nThese should cover most of your scouting team's data collection needs. PWNAGE's 2020 Infinite Recharge configuration file is included as an example. The import of the configuration file is in index.html and would need to be updated to import a different configuration file. Only import one configuration file.\n\nSince this is a HTML/JavaScript web page, scouters can use almost any device that has a web broswer. If the device has a touchscreen the screen can be used to swipe back and forth between pages and interact with the data elements. The webpage only needs to be loaded once. Once loaded the functionality and data is stored locally in the webpage and doesn't need to be reloaded. The QR code generation and clear button only resets the form and does not cause the page to reload. This means that a cellular or WiFi connection is not needed at the competition as long as the webpage is loaded before the event.\n\nIf your team has a The Blue Alliance API access token (See https://www.thebluealliance.com/apidocs) the web page will pull team and schedule information from The Blue Alliance. Put your access token in the authKey variable in resources/js/TBAInterface.js and when the web page is loaded it will load the data (for the event code in the Event field). This enables some features on the PreMatch Screen. With the team information the team name will populate just below the Team # field when the team # field is filled in. If the schedule information is available when the web page is loaded then when the match and robot fields are populated it will automatically populate the team number and team name for the scouter. This reduces typo errors when entering the team numbers manually. (Schedules are usually published before the event a day or two before matches start. However, it may be delayed for various reasons an may only be published hours or minutes before the start of a competition.)\n\nThe QR code can be read by a web camera or hand scanner to import the data into the Excel scouting database. The hand scanner used reads the QR code and inputs the data as if it is typed in from a keyboard. Included in this repository is the Excel code to pop up an input window and parse the qr data into a row in Excel. (see the Excel directory)\n\n(back to top)\n\nGetting Started:\n\nIt's really simple to get started:\n\nFork GitHub project (as public if you want to host on GitHub Pages)\nChange configuration file (examples in 2020 or 2022 directories)\nUpdate your the competition your attending\nChange the data elements to capture (if desired)\nEnable GitHub Pages in your repository settings (GitHub Pages Instructions)\nLoad page via GitHub pages (https://<your_username>.github.io/ScoutingPASS)\n\nTo enable The Blue Alliance API:\n\nPut your API token in the authKey variable in resources/js/TBAInterface.js. (line 4)\nReload your page.\n\nNote: In order for this to work, the schedule has to be posted to The Blue Alliance. That usually doesn't happen until just before the event. (a few days to a few hours) To test this you can point it to a past event. Set the event to 2020ilch. Reload the page to load the schedule for that event. Select Match 6 and Blue-2. You should see it populate the Team # to 2451, and the next line will show the team name, PWNAGE.\n\n(back to top)\n\nPit Scouting:\n\nScountingPASS now supports Pit Scouting\n\nTo access the pit scouting page, add '/pit.html' to the end of your URL. (i.e. http://pwnagerobotics.github.io/ScoutingPASS/pit.html)\n\nIt works almost exactly like the main scouting pages, except there is only one page of input. Once your scouters have filled out the information, swipe left to display the QR code. That QR code can be scanned to push the data to Excel.\n\nThe default configuration file is 2023/CU_Pit_config.js. You can modify that configuration to meet your needs.\n\nWe realize that you may not want to lug your computer around the pits to scan each QR code. Our recommendation is to have your scouters take screenshot of the QR codes. Then when they are back to the scouting computer, just go through the photos to scan each QR code.\n\n(back to top)\n\nHow We Scout\n\nWe have 6 scouts per match. One for each robot. Each scout has this web site pre-loaded on their phone or a team tablet.\n\nThe lead scout has a laptop with Excel and a wired hand held scanner in the stands with the scouts. (Nadomoo Bur3072 - ~$55)\n\nAt the end of each match the lead scout kicks off an Excel macro that pops up an input box. (See an example Excel spreadsheet in the Excel directory) The scouts show their QR code to the lead scout, one by one, who scans the QR code. The data from the QR code is parsed and a row is added to the Scouting Data Table in Excel. If the table doesn't exist, it will create it.\n\nWe use custom Excel screens and graphs to determine strategy for each of our matches.\n\nThe night before Eliminations we load the Excel data into Tableau where we use the data mining/graphing capabilities to make a pick list.\n\nThe pick list can be modified up to Alliance Selection based on the data that is continued to be collected all the way up to the last match.\n\n(back to top)\n\nContributing\n\nContributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.\n\nIf you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue if anything is missing or unclear in this documentation. to let us know what you'd like changed.\n\nDon't forget to give the project a star!\n\n(back to top)\n\nFrequently Asked Questions:\nWhy hardcode and disable the event field?\nWhy doesn't my configuration file load?\nWhat does P.A.S.S. stand for?\nHow does the Field Image element work?\n\n(back to top)\n\nThings we might want to add someday:\nPit Scouting\nMore options for processing the QR code\n\n(back to top)\n\nLicense\n\nDistributed under the GNU GPL v3.0 License. See LICENSE for more information.\n\n(back to top)\n\n2023 Updates\n\nScouting PASS continues to evolve.`;

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
	console.log("Ready");
  getLinkToRepos("https://github.com/rhit-halseysh?tab=repositories");

};

rhit.main();
