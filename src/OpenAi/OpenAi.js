const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function runPromt(message) {
  const prompt = `Return me back an array of the same type of word with single quotations around the words (example: 'example'), that ${message} is. Include ${message} as a value in the array. For example, If the ${message} name is a type of language, do not return me words back in that language, rather, return words that are different languages. Make the array have at least 25 values.`;

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

