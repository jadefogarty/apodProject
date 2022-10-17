//console.log("js file connected");

const api_key = "cjzAWKyCfClMXNLBEVqeZTh21wcXiNefpJw6glYe"


//console.log(dateInput);
function selectDate(){
    
    
    
}

async function loadInfo(){

    var dateInput = document.getElementById('selectedDate').value;
    console.log("date input: "+ dateInput);

    var basicURL = "api.nasa.gov/planetary/apod?api_key="+api_key
    var mainURL = basicURL + "&date=" +dateInput
    //console.log(basicURL);
    console.log("url is:" +mainURL);
    document.getElementById("link").innerHTML= "Info from: https://" +mainURL

    var result= "";
    var response = await fetch("https://"+mainURL);
    var data = await response.json();
    console.log(data)

    result+="<div class=\"container-fluid\"><div class=\"row\"><h2> " + data["title"] + " </h2></div></div>";
    result+="<div class=\"container-fluid\"> <div class=\"row\"><img src=\"" + data["url"] + "\" alt=\"image\"></div></div>";
    result+="<div class=\"container-flui\"><div class=\"container-fluid\"><p>" + data["explanation"] + "</p></div></div>";

    console.log(result);
    document.getElementById("content").innerHTML = result;
    

}