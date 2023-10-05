const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function runPromt() {
  const prompt = "Return me back a list of words relating to Painting.";

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

