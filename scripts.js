// Function to send a chat message
function sendMessage() {
    var input = document.getElementById('chatInput');
    var messages = document.getElementById('chatMessages');
    var newMessage = document.createElement('div');
    newMessage.textContent = input.value;
    newMessage.className = 'message'; // Add a class for styling
    messages.appendChild(newMessage);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

// Function to initialize the progress chart
function initProgressChart() {
    var ctx = document.getElementById('progressChart').getContext('2d');
    var progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['June', 'July', 'August'],
            datasets: [{
                label: 'Amount Saved',
                data: [620, 800, 1000],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize the chart when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('progressChart')) {
        initProgressChart();
    }
});

