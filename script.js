// assigning the variables
const input = document.querySelector("#input-area");
const translateButton = document.querySelector("#button-translator");
const output = document.querySelector("#output-area");

//api url
const url = "https://api.funtranslations.com/translate/minion.json";

// handling the url
const translationlURL = (typeText) =>{
    return `${url}?text= ${typeText}`;
}

//To handle the error as we can make only 5 API requests per hour
const handleError = (error) =>{
    alert("The Server is Down, Maybe come back after some time")
};

//translate the text to Minion language 
const translateText = (error) =>{
    console.log("Error occured", error);
    var inputText = input.value;

    fetch(translationlURL(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        output.textContent = outputText;
    })
    .catch(handleError)

    
}

// listen to the even as soon as the user click on Translate Button
translateButton.addEventListener("click",translateText);