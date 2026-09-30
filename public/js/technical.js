fetch("/api/system-metrics")
    .then(response => response.json())
    .then(data => {

        document.getElementById("cpu").textContent = data.cpu;
        document.getElementById("memory").textContent = data.memory;
        document.getElementById("apiResponse").textContent = data.apiResponse;
        document.getElementById("dbLatency").textContent = data.databaseLatency;
        document.getElementById("networkLatency").textContent = data.networkLatency;
        document.getElementById("websocket").textContent =
            data.websocketConnections;
    });