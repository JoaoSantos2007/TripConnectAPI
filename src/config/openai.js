import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new OpenAI.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);

const callGPT = async (text) => {
  const chat = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: text }],
  });

  const message = chat.data.choices[0].message.content;

  return message;
};

export { openai, OpenAI, callGPT };
