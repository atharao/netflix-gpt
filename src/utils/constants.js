export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
  },
};

export const IMG_POSTER = "https://image.tmdb.org/t/p/w300";

export const LANG = [
  {
    lang: "English",
    value: "eng",
  },
  {
    lang: "Hind",
    value: "hind",
  },
  {
    lang: "Urdu",
    value: "urd",
  },
];

export const SelectedLang = {
  eng: {
    search: "seach",
    placeholder: "enter movie name",
  },
  hind: {
    search: "khojo",
    placeholder: "movie serach kro",
  },
};
