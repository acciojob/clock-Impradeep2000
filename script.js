//your JS code here. If required.
// function updateTimer() {
// 	const timerElement = document.getElementById("timer");
// 	const time = new date();
// }
function updateTimer() {
      const timerElement = document.getElementById('timer');
      const now = new Date();
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      const formattedTime = now.toLocaleDateString('en-US', options);
      timerElement.textContent = formattedTime;
    }

    // Initial call to updateTimer to set the initial time
    updateTimer();

    // Update the timer every second
    setInterval(updateTimer, 1000);