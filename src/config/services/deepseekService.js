// // const OpenAI = require("openai");
// const { OpenRouter } = require('@openrouter/sdk');

// // const deepseekClient = new OpenAI({
// //   apiKey: process.env.DEEPSEEK_API_KEY,
// //   baseURL: "https://api.deepseek.com"
// // });

// const openRouter = new OpenRouter({
//   apiKey: process.env.OPENAI_API_KEY,
// });


// async function chatWithDeepSeek(prompt) {
//   const completion = await openRouter.chat.send({
//   model: 'deepseek/deepseek-r1-0528:free',
//   messages: [
//     {
//       role: 'user',
//       content: 'What is the meaning of life?',
//     },
//   ],
//   stream: false,
// });
// console.log(completion.choices[0].message.content);
// }

// module.exports = {
//   chatWithDeepSeek
// };
