const data=[
    {
        id: 1,
        news: "India's GDP growth rate is expected to be 7% in the next quarter."
    },
    {
        id: 2,
        news: "The government has announced a new policy to boost the manufacturing sector."
    },
    {
        id: 3,
        news: "The central bank has decided to increase the repo rate by 25 basis points."
    },
    {
        id: 4,
        news: "A major tech company has announced its entry into the Indian market."    
    },
    {
        id: 5,
        news: "The stock market has seen a significant rise in the last week, with the Sensex crossing 50,000 points."
    }
]

// waf to find news by id
// waf to print n number of news from start
// waf to print n number of news from end
// waf to search news by keyword and show valid list matching news

// function findNewsById(id){
//     return data.find(news => news.id === id);
// }

// function printNewsFromStart(n){
//     return data.slice(0, n);
// }

// function printNewsFromEnd(n){
//     return data.slice(-n);
// }

// function searchNewsByKeyword(keyword){
//     return data.filter(news => news.news.includes(keyword));
// }


// console.log(findNewsById(3)); // { id: 3, news: "News Title 3" }
// console.log(printNewsFromStart(3)); // [ { id: 1, news: "News Title 1" }, { id: 2, news: "News Title 2" }, { id: 3, news: "News Title 3" } ]
// console.log(printNewsFromEnd(2)); // [ { id: 4, news: "News Title 4" }, { id: 5, news: "News Title 5" } ]
// console.log(searchNewsByKeyword("Title 2")); // [ { id: 2, news: "News Title 2" } ]



function findNewsById(data, id){
    for(let i=0; i<data.length; i++){
        if(data[i].id === id){
            return data[i];
        }
    }
    return "News not found";
}

function printNewsFromStart(data, n){
    let result = [];
    for(let i=0; i<n && i<data.length; i++){
        result.push(data[i]);
    }
    return result;
}

function printNewsFromEnd(data, n){
    let result = [];
    for(let i=data.length-1; i>=data.length-n && i>=0; i--){
        result.unshift(data[i]); // unshift adds elements to the beginning of the array, maintaining the original order
    }
    return result;
}

function searchNewsByKeyword(data, keyword){ // data is the array of news objects, keyword is the string to search for (we used (data) array because we wont get global array all the time)
    let result = [];
    for(let i=0; i<data.length; i++){
        if(data[i].news.toLowerCase().includes(keyword.toLowerCase())){
            result.push(data[i]);
        }
        if(result.length == 0){
            return "No news found with the given keyword";
        }
    }
    return result;
}

console.log(searchNewsByKeyword(data, "IS")); 