const input = document.querySelector(".input");

const apiData = {
    url: "https://v2.jokeapi.dev/joke/",
    cate: ""
  };

let dataUrl = apiData.url;

function cateBtn(category){
    dataUrl+=category;
    console.log(dataUrl);
    fetch(dataUrl)
        .then((results) => results.json())
        .then(console.log)
    dataUrl=apiData.url;

}
