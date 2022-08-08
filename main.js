const input = document.querySelector(".input");
let ul = document.getElementById('Joke');
let rep = document.getElementById('Repeat');
let bg = document.querySelector('body');

const apiData = {
    url: "https://v2.jokeapi.dev/joke/",
    cate: ""
  };

let dataUrl = apiData.url;

function cateBtn(category){
    dataUrl+=category;
    dataUrl+="?blacklistFlags=nsfw,racist,sexist"
    console.log(dataUrl);
    if(category==='Programming'){
        bg.background = "/images/JokeAPILogo";
    }
    fetch(dataUrl)
        .then((jokeData) => jokeData.json())
        .then((data)=>{
            console.log(data.joke);
            console.log(data.setup + " " + data.delivery);
            if(data.joke===undefined){
                ul.innerHTML=(data.setup+"<br><br>" + data.delivery);
            }
            else{
                ul.innerHTML=(data.joke);
            }
            rep.innerHTML="Click again for another joke!";
        })
    dataUrl=apiData.url;

}

function bgChange(theme){
    if(theme==='Christmas'){
        bg.style.backgroundImage = "url(../images/christmasBg.png)";
    }
    else if(theme==='Spooky'){
        bg.style.backgroundImage = "url(../images/spookyBg.png)";
    }
    else if(theme==='Programming'){
        bg.style.backgroundImage = "url(../images/programmingBg.png";
    }
    else if(theme==='Dark'){
        bg.style.backgroundImage = "url(../images/darkBg.png";
    }
    else if(theme==='Misc'){
        bg.style.backgroundImage = "url(../images/miscBg.png";
    }
    else if(theme==='Pun'){
        bg.style.backgroundImage = "url(../images/punBg.png";
    }
    else if(theme==='Any')
    bg.style.backgroundImage = "url(../images/anyBg.png";
    else{
        bg.style.backgroundImage = "none";
    }
}