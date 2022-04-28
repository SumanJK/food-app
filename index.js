import navbar from "./components/navbar.js";

import {getData,displayData} from "./scripts/main.js";


var head= document.getElementById("head")

head.innerHTML = navbar()


var searchButton= document.getElementById("searchButton");

var container= document.getElementById("container");

searchButton.addEventListener("click", async ()=>{
    try{

        var searchTerm= document.getElementById("searchTerm").value;

        var response = await getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        console.log('response:', response)


        displayData(response.meals,container);

    }catch(err){
        console.log('err:', err)

    }

})

// www.themealdb.com/api/json/v1/1/filter.php?a=Indian

// let searchVideo= ()=>{

//     console.log("ok ok kooo")
// }




// onclick="searchVideo()"
