// chat.ts
import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-3.5-turbo';
const API_KEY = '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';

export const chat = async (message: string): Promise<string | null> => {
  try {
    const response = await axios.post(`${API_URL}chat/completions`, {
      model: MODEL,
      messages: [
        {
          'role': 'system',
          'content': "○○の作り方を出力"
        },
        {
          'role': 'user',
          'content': message,
        }
      ],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    
    return response.data.choices[0].message.content;

  } catch (error) {
    console.error(error);
    return null;
  }
}