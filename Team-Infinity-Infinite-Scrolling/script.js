//Temporary URL
const url = "http://localhost:3000/posts"

//varible to navigate through received data from api
var dataIndex = 0;

//Empy object to store retrived data
var data = {};



//function to fetch data from api
async function fetchData(url) {
    

    //document.body.style.zoom = "80%"
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
     data = await response.json();

    //Passing data to loadData() function to load data on web-page
    loadData(data);
}


//incoking fetchData() function by passing api url as argument
fetchData(url);

//function to create dynamic elemnts, to display data
function loadData(data){

    //constant to append dyanmically created elements
    const container = document.querySelector(".container");

    //varible to track the count of articles to display
    let index = 0;

    while(index < 30  )
    {
        const quoteBody = document.createElement("div");

        const quoteAuthor = document.createElement("h3");
        quoteAuthor.innerHTML =   data[dataIndex].author ? data[dataIndex].author : "UnKnown Author";
        
        const quoteText = document.createElement("p");
        quoteText.innerHTML =   data[dataIndex].text;
        
        const breakLine = document.createElement("hr");

        container.appendChild(quoteBody).appendChild(quoteAuthor).appendChild(quoteText).appendChild(breakLine);
        
        index++;
        dataIndex++;
    }
}

var showData = (data)=>{

    setTimeout(

        loadData(data),

        1);

}
//scroll-eventlisner to perform infinite scroll on web-page
window.addEventListener('scroll',()=>{
    if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight){
        showData(data);
    }
})



