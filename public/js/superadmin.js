Promise.all([
    fetch("/api/exams").then(res => res.json()),
    fetch("/api/candidates").then(res => res.json()),
    fetch("/api/incidents").then(res => res.json()),
    fetch("/api/audit-logs").then(res => res.json())
])
.then(([exams, candidates, incidents, logs]) => {

    const activeExams = exams.filter(
        exam => exam.status === "LIVE"
    ).length;

    const onlineCandidates = candidates.filter(
        candidate => candidate.status === "Online"
    ).length;

    const activeIncidents = incidents.filter(
        incident => incident.status === "Active"
    ).length;

    document.getElementById("activeExams").textContent = activeExams;
    document.getElementById("onlineCandidates").textContent = onlineCandidates;
    document.getElementById("activeIncidents").textContent = activeIncidents;

    const table = document.getElementById("auditTable");

    logs.forEach(log => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${log.user}</td>
            <td>${log.action}</td>
            <td>${log.target}</td>
            <td>${log.timestamp}</td>
        `;

        table.appendChild(row);
    });
});