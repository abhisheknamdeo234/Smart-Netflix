export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const user_logo = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const Api_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDA0NGU0ODExNDIwMjRhYjRlNWZiZTc2MjM5MzJkMyIsIm5iZiI6MTczMjM5MDE1OC42MDcsInN1YiI6IjY3NDIyZDBlZGFlMmU2YTkzODI1OWNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lbIz5Ij00sPgVmXEAD87tpqMj2zJnmyjHnFt5cTx4TM'
  }
};

export const Netflix_icon = "https://toppng.com/uploads/preview/netflix-logo-png-11593869496jqso5gxgsy.png";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg"

export const SUPPORTED_LANGUAGES = [{indentifier:"en",name:"English"},
  {indentifier:"hindi",name:"Hindi"},
  {indentifier:"spanish",name:"Spanish"}
] 



export const gemini_key = "AIzaSyCfbwKgV2wdZaHCuytiRombbdJy_PmfWo8";

// export const Api_gemini={
//     method: "POST", // Method should be a string and inside the options object
//     headers: {
//       "Content-Type": "application/json", // Important: Tell the server you're sending JSON
//     },
//     body: JSON.stringify({ // Data goes in the 'body' and must be stringified JSON
//       contents: [{ parts: [{ text: gptQuery }] }],
//       // You can add generation config or safety settings here if needed:
//       // generationConfig: {
//       //   temperature: 0.7,
//       //   maxOutputTokens: 100,
//       // },
//     }),
//   }
