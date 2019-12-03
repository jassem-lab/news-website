



var allData = [];
var httpReq = new XMLHttpRequest();
var category = "general";
getData(category);

var links = document.querySelectorAll(".nav-link");

for(var i= 0 ; i < links.length ; i++)
{
    links[i].addEventListener("click" , function(e){
        category =  e.target.text;
        getData(category);

    })
}


function getData(category)
{

    httpReq.open("GET",  "https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=31cf74b9d55a4b6780e02b8c74a4cf61" ) // hatft7 tari2 bena w ben eltanyeen
    httpReq.send(); // hatb3t 3arbia nos na2l t7ml eldata
    httpReq.onreadystatechange = function()
    {
        if(httpReq.readyState == 4 && httpReq.status == 200)
        {
    
            allData =  JSON.parse( httpReq.response).articles; // di hat4il eldata ely rag3a
            displayData();
        }
    }
    

}
function displayData()
{
    var temp = ``;

    for(var i = 0 ; i <allData.length ; i++)
    {
        temp +=`
        <div class="col-md-3">
          <div class="item">
          <img src="`+allData[i].urlToImage+`" class="img-fluid"/>
            <h5>`+allData[i].title+`</h5>
            <p>`+allData[i].description+`</p>
          </div>
        </div>`;
    }

    document.getElementById("rowData").innerHTML = temp;
}