const process = async function processData(section) {
  var url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    section +
    "&api-key=58PLob60x40xC803A4URZP7eQulEqSSO";
  var data = await fetch(url);
  var arr = await data.json();
  console.log(arr);
};

export default process;
