// const {
//   chatWithDeepSeek
// } = require("../services/deepseekService");

// exports.chat = async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ message: "Prompt is required" });
//     }

//     const result = await chatWithDeepSeek(prompt);

//     res.status(200).json({ result });

//   } catch (error) {
//     console.error("DeepSeek Error:", error);
//     res.status(500).json({ error: error.message });
//   }
// };
