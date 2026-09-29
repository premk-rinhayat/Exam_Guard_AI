// fetch the data from the api/candidates
const candidateTable = document.getElementById("candidateTable");

fetch("/api/candidates")
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        console.log(data);

        data.forEach((candidate) => {
        // 1. create a row
        const row = document.createElement('tr');

        // 2. put candidate data inside the row
        // Using template literals makes it easy to map object properties to columns
        row.innerHTML = `
            <td>${candidate.id}</td>
            <td>${candidate.name}</td>
            <td>${candidate.status}</td>
            <td>${candidate.progress}</td>
            <td>${candidate.networkStatus}</td>
        `;

        // 3. add row to table
        candidateTable.appendChild(row);
        });
    });


// fetch the data from the api/incident
const table = document.getElementById("incidentTable");

fetch("/api/incidents")
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        console.log(data);

        data.forEach((incident) => {
        // 1. create a row
        const row = document.createElement('tr');

        // 2. put candidate data inside the row
        // Using template literals makes it easy to map object properties to columns
        row.innerHTML = `
            <td>${incident.id}</td>
            <td>${incident.type}</td>
            <td>${incident.severity}</td>
            <td>${incident.affectedCandidates}</td>
            <td>${incident.status}</td>
        `;

        // 3. add row to table
        table.appendChild(row);
        });
    });