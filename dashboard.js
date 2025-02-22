// 📈 Speed Chart
new Chart(document.getElementById('speedChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['00:00', '06:00', '12:00', '18:00'],
        datasets: [{
            label: 'Speed (km/h)',
            data: [30, 45, 38, 50],
            backgroundColor: 'rgba(255, 204, 0, 0.4)',
            borderColor: '#ffcc00',
            tension: 0.4
        }]
    }
});

// 🏗 Load Chart
new Chart(document.getElementById('loadChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Crane 1', 'Crane 2', 'Crane 3'],
        datasets: [{
            label: 'Load (tons)',
            data: [10, 15, 12],
            backgroundColor: ['#ffcc00', '#ffc107', '#ffdb58'],
            borderColor: '#000',
            borderWidth: 1
        }]
    }
});

// 🌡 Temperature Chart
new Chart(document.getElementById('temperatureChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Temperature (°C)',
            data: [20, 22, 25, 23],
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: '#ff6384',
            borderWidth: 2
        }]
    }
});

// 🔋 Battery Health Chart
new Chart(document.getElementById('batteryChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Healthy', 'Needs Check'],
        datasets: [{
            data: [80, 20],
            backgroundColor: ['#36a2eb', '#ffcd56']
        }]
    }
});

// 🥧 Safety Pie Chart
new Chart(document.getElementById('safetyPieChart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['Safe Operations', 'Warnings', 'Critical'],
        datasets: [{
            data: [65, 25, 10],
            backgroundColor: ['#28a745', '#ffc107', '#dc3545']
        }]
    }
});

// ⚡ Energy Efficiency Pie Chart
new Chart(document.getElementById('energyPieChart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['Optimal Usage', 'Moderate', 'High Consumption'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['#17a2b8', '#ffc107', '#ff6384']
        }]
    }
});

// 🔔 Toggle Notification Panel
document.getElementById("notificationToggle").addEventListener("click", function () {
    document.getElementById("notificationPanel").classList.toggle("open");
});

