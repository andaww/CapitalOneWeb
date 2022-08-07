const input = document.querySelector(".input");
let ul = document.getElementById('Joke');

const apiData = {
    url: "https://v2.jokeapi.dev/joke/",
    cate: ""
  };

let dataUrl = apiData.url;

function cateBtn(category){
    dataUrl+=category;
    dataUrl+="?blacklistFlags=nsfw,racist,sexist"
    console.log(dataUrl);
    fetch(dataUrl)
        .then((jokeData) => jokeData.json())
        .then((data)=>{
            console.log(data.joke);
            console.log(data.setup + " " + data.delivery);
            if(data.joke===undefined){
                ul.innerHTML=(data.setup+ " " + data.delivery);
            }
            else{
                ul.innerHTML=data.joke;
            }
        })
    dataUrl=apiData.url;

}