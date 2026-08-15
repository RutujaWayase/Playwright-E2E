//What are promises in Javascript? Explain the difference between cllback funtions and promises with an example.
function fetchData(callback) {
    //Fetch data from server resolve, pending, rejected
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched!");
            const data = "Sample Data"; //2
            resolve(data)
        }, 2000);
    }); 
}

fetchData().then(function(data) {
    console.log("Processing:", data);
})

const data = await fetchData()
console.log("Processing:", data);