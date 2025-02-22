// 🕒 Filter Reports by Date
function filterReports() {
    const selectedDate = document.getElementById("reportDate").value;
    const rows = document.querySelectorAll("#reportTableBody tr");

    rows.forEach(row => {
        const rowDate = row.children[0].textContent.trim();
        row.style.display = rowDate === selectedDate || selectedDate === "" ? "" : "none";
    });
}

// 📊 Speed & Load Trend Chart
new Chart(document.getElementById("speedLoadTrend"), {
    type: "line",
    data: {
        labels: ["2025-02-18", "2025-02-19", "2025-02-20"],
        datasets: [
            {
                label: "Speed (km/h)",
                data: [38, 35, 40],
                borderColor: "#ffcc00",
                fill: false,
                tension: 0.4
            },
            {
                label: "Load (tons)",
                data: [11, 10, 12],
                borderColor: "#36a2eb",
                fill: false,
                tension: 0.4
            }
        ]
    },
    options: { responsive: true }
});

// ⚡ Power & Fuel Trend Chart
new Chart(document.getElementById("powerFuelTrend"), {
    type: "bar",
    data: {
        labels: ["2025-02-18", "2025-02-19", "2025-02-20"],
        datasets: [
            {
                label: "Power (%)",
                data: [79, 78, 80],
                backgroundColor: "#ffcc00"
            },
            {
                label: "Fuel (%)",
                data: [72, 70, 75],
                backgroundColor: "#ff6384"
            }
        ]
    },
    options: { responsive: true }
});
