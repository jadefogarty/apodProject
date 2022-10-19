//console.log("js file connected");
const api_key = "cjzAWKyCfClMXNLBEVqeZTh21wcXiNefpJw6glYe"


async function loadInfo(){

    var dateInput = document.getElementById('selectedDate').value;
    console.log("date input: "+ dateInput);

    var basicURL = "api.nasa.gov/planetary/apod?api_key="+api_key
    var mainURL = basicURL + "&date=" +dateInput
    //console.log(basicURL);
    console.log("url is:" +mainURL);
    //document.getElementById("link").innerHTML= "Info from: https://" +mainURL

    var result= "";
    var response = await fetch("https://"+mainURL);
    var data = await response.json();
    console.log(data)

    //display title
    result+="<div class=\"container-fluid\"><div class=\"row\ dataTitle\"><h2> " + data["title"] + " </h2></div></div>";
    //result+="<br />"
    //display image
    result+="<div class=\"container-fluid\"> <div class=\"row\"><img class=\"myImg\" src=\"" + data["url"] + "\" alt=\"image\"></div></div>";
    result+="<br />"
    //display info
    result+="<div class=\"container-fluid\"><div class=\"row\"><h3 class=\"infoTitle\"> Information </h3></div> <div class=\"row\"><p>" + data["explanation"] + "</p></div></div>";
    result+="<br />"

    //console.log(result);
    document.getElementById("content").innerHTML = result;
    

}
