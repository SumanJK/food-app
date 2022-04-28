
async function getData(url){
    try{
        let res= await fetch(url);

        let data= await res.json();

        return data;
    // return data
    }catch(err){
        console.log('err:', err)

    }
}

let displayData= (meals,parent) =>{

    parent.innerHTML=""
    meals.map((elem) =>{

        var mealBox= document.createElement("div");
        mealBox.addEventListener("click",()=>{

            localStorage.setItem("foods",JSON.stringify(elem));
            window.location.href="food.html"
        })

        var mealImg= document.createElement("img");
        mealImg.src= elem.strMealThumb;

        var title= document.createElement("h4");
        title.innerHTML= elem.strMeal;

        var cat= document.createElement("p");
        cat.innerHTML= `catagory:    <span> ${elem.strMeal}</span>`;


        parent.append(mealBox);
        mealBox.append(mealImg,title,cat);

    })
}
let displayDataTrend= (meals,parent) =>{

    parent.innerHTML=""
    meals.map((elem) =>{

        var mealBox= document.createElement("div");

        var mealImg= document.createElement("img");
        mealImg.src= elem.strMealThumb;

        var title= document.createElement("h4");
        title.innerHTML= elem.strMeal;

        var cat= document.createElement("p");
        cat.innerHTML= `catagory:    <span> ${elem.strMeal}</span>`;


        parent.append(mealBox);
        mealBox.append(mealImg,title,cat);

    })
}

let displayData2= (meals,parent) =>{

    parent.innerHTML=""
    meals.map((elem) =>{

        var mealBox= document.createElement("div");

        var mealImg= document.createElement("img");
        mealImg.src= elem.strMealThumb;

        var title= document.createElement("h4");
        title.innerHTML= elem.strMeal;

        var cat= document.createElement("p");
        cat.innerHTML= `catagory:    <span> ${elem.strCategory}</span>`;
            
        let ul= document.createElement("ul");
        ul.textContent= "Ingredients:"
        let li1= document.createElement("li");
        li1.textContent= elem.strIngredient1;

        let li2= document.createElement("li");
        li2.textContent= elem.strIngredient2;

        let li3= document.createElement("li");
        li3.textContent= elem.strIngredient3;

        let li4= document.createElement("li");
        li4.textContent= elem.strIngredient4;

        let li5= document.createElement("li");
        li5.textContent= elem.strIngredient5;

        let li6= document.createElement("li");
        li6.textContent= elem.strIngredient6;

        let li7= document.createElement("li");
        li7.textContent= elem.strIngredient7;

        let li8= document.createElement("li");
        li8.textContent= elem.strIngredient8;

        let li9= document.createElement("li");
        li9.textContent= elem.strIngredient9;

        let li10= document.createElement("li");
        li10.textContent= elem.strIngredient10;

        let processDiv= document.createElement("div");

        let pro= document.createElement("h3")
        pro.innerHTML="Procedure to prepare:"

        let process= document.createElement("p");
        process.textContent=elem.strInstructions;

        parent.append(mealBox,processDiv);
        mealBox.append(mealImg,title,cat,ul);
        ul.append(li1,li2,li3,li4,li5,li6,li7,li8,li9,li10)
        processDiv.append(pro,process);

    })
}
// https://www.themealdb.com/api/json/v1/1/search.php?f=a   

export {getData,displayData,displayDataTrend,displayData2};