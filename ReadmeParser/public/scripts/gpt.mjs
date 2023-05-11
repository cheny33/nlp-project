import {
    Configuration,
    OpenAIApi
} from "openai"; // need to install package to work



//const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     organization: "org-7iwDAUhp2gK0kJaJmN67GZGf",
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);
// const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{
//         role: "user",
//         content: "What is the weather in Terre Haute 2 years ago"
//     }],
// });

// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listModels();


console.log(completion.data.choices[0].message.content);

function config (){
    
}

export const foo = completion.data.choices[0].message.content;