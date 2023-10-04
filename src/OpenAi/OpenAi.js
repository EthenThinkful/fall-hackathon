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

