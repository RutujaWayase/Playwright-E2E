//Callback Function
function fetchData(callback){
    //Fetch dats from server
    setTimeout(() => 
    {
        console.log("Data fetched!");
        const data = "Sample Data"; //2
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing:",data);
}

function modifyData(data) {
    console.log("Modifying:", data);
}

fetchData(processData);
fetchData(modifyData);