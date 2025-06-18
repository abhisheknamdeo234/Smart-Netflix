 import OpenAI from 'openai';
import { GPT_KEY } from './Constants';
 

const openai = new OpenAI({
  
  apiKey: GPT_KEY,
  dangerouslyAllowBrowser:true, // This is the default and can be omitted
});

export default  openai;