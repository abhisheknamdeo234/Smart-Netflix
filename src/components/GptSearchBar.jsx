import React, { useRef } from 'react'
import lang from "../utils/LanguageConstants"
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/Openai'
// import  genAI  from '../utils/Gemini'
import {gemini_key} from "../utils/Constants"
import { Methods } from 'openai/resources/fine-tuning/methods.mjs'
import { Api_options } from '../utils/Constants'
import { addGptMovieResult } from '../utils/GptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store=>store.config.lang)
  const searchText = useRef(null);
  console.log("first time")
  
  // let timer;
// const handleGptSearchClick = async () => {
//   clearTimeout(timer);
//   timer = setTimeout(async () => {
//     try {
//       const searchtext = searchText.current.value;
    
//     // api call to pgt search
//     const gptQuery ="Act as aa movie recommendation system and suggest some movies for the query " + searchtext + " . only give me names of 5 movies,comma seprated like the example result given ahead. Example result: Gadar, Don , 3 idiots ,jamtara,godfather"
//     console.log(gptQuery);
//       const response = await openai.chat.completions.create({
//         messages: [{ role: 'user', content: gptQuery }],
//         model: "gpt-3.5-turbo",
//       });
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }, 1000); // 1 second delay
// };
  const searchMovieTMDB = async (movie)=>{
          const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
            +movie+
            "&include_adult=false&language=en-US&page=1",Api_options);
            const json = await data.json(); 
           return json.results; 
  } 

  const handleGptSearchClick= async ()=>{
    console.log(searchText.current.value)
    console.log("first time in fn")
    
    const searchtext = searchText.current.value;
    
    // api call to pgt search
    const gptQuery ="Act as aa movie recommendation system and suggest some movies for the query " + searchtext + " . only give me names of 5 movies,comma seprated like the example result given ahead. Example result: Gadar, Don , 3 idiots ,jamtara,godfather"
    console.log(gptQuery);

   const AiSearchresult = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="+gemini_key, // Changed model to gemini-1.5-flash
  {
    method: "POST", // Method should be a string and inside the options object
    headers: {
      "Content-Type": "application/json", // Important: Tell the server you're sending JSON
    },
    body: JSON.stringify({ // Data goes in the 'body' and must be stringified JSON
      contents: [{ parts: [{ text: gptQuery }] }],
      // You can add generation config or safety settings here if needed:
      // generationConfig: {
      //   temperature: 0.7,
      //   maxOutputTokens: 100,
      // },
    }),
  }
);



 
  // const gptResult = await openai.chat.completions.create({
  //   messages: [{ role: 'user', content: gptQuery }],
  //   model: "gpt-3.5-turbo",
  // });
   const result =await AiSearchresult.json();
  //  console.log(result);
  //  console.log(result);
  //  console.log(result["candidates"][0]["content"]["parts"][0]["text"]);
   const AiMovies = result["candidates"][0]["content"]["parts"][0]["text"].split(",");
   
    const fg = AiMovies[4];
    // AiMovies.splice(4, 0, fg);
    // console.log(fg,"4 movies");
    const secArray = [...AiMovies];
    secArray.splice(4,1);
    // secArray.splice(4,0,fg);
    
    

   const promiseArray = secArray.map((movie)=> searchMovieTMDB(movie));

   const tmdbResults = await Promise.all(promiseArray);

  //  console.log(tmdbResults)
  dispatch(addGptMovieResult({movieName:secArray,movieResults:tmdbResults}));
}
    
    
    
   
   








  
  return (
    <div className='pt-[20%] md:pt-[10%] flex justify-center  '>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className="p-4 m-4 col-span-9 bg-white" type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-4 px-2 m-4 col-span-3 bg-red-700 text-white rounded-sm' onClick={handleGptSearchClick}>{lang[langKey].search}</button>

        </form>



    </div>
  )
}

export default GptSearchBar;