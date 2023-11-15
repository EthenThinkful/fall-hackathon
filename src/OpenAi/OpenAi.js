const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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", // exclude when pushing to github
});
const openai = new OpenAIApi(configuration);

export async function runPromt(message) {
  const prompt = `Return me back an array of the same type of word that ${message} is. Include single quotations around the words (example: 'example'). Include ${message} as a value in the array. Make the array have at least 25 values.`;

  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  return res.data.choices[0].text;
}

