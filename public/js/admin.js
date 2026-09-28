// fetch the data from the api/candidates

fetch("/api/candidates")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

const table = document.getElementById("candidateTable");

data.forEach((candidate) => {

    // create a row

    // put candidate data inside the row

    // add row to table

});