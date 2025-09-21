export const LOGO = 
 "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
 "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
  };

  export const API_OPTIONS = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmYzYjA3YjRiMWEyZGIxY2Q1OTFiMDJlMGQ2MmYwZiIsIm5iZiI6MTcyNzg2MzQ4NC45MzMzOTMsInN1YiI6IjY2ZjFhMTE0NzMwMGE1YmEyMTNiYWUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pV3HZ6lFNaS1o42o4CcKMwBpjypbVabB3UYD8WzMoZY",
      }
    };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg" 

  export const SUPPORTED_LANG = [
    {identifier:"en", name: "English"},
    {identifier:"tamil", name: "Tamil"},
    {identifier:"french", name: "French"},
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAPI_KEY