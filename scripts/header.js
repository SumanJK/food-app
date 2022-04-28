let showCancel= () => {
    button.innerHTML=""

    console.log("get it")
    let inputText= document.getElementById("searchTerm").value

    var buttonDiv= document.getElementById("button");

    if(inputText.length==0){
        button.innerHTML="";
    }
    
    else{
        let button= document.createElement("button");
        button.setAttribute("id","clear")
        button.onclick= deleteInputBox

        let iTag= document.createElement("i");
        iTag.setAttribute("class","fa-solid fa-xmark")

        buttonDiv.append(button)
        button.append(iTag)
    }

}

let deleteInputBox= () =>{

    button.innerHTML="";

   document.getElementById("searchTerm").value=""

}


