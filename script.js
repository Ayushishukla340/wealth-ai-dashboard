function startAI() {
    simulateGrowth();
    changeSignal();
}

// 📈 Growth Animation
function simulateGrowth() {
    let value = 12400;

    setInterval(() => {
        value += Math.floor(Math.random() * 300);

        document.getElementById("investment").innerText = "$" + value;

        let percent = (Math.random() * 5 + 15).toFixed(1);
        document.getElementById("growth").innerText = "+" + percent + "%";

    }, 1500);
}

// 🔄 Signal Change
function changeSignal() {
    let signals = ["BUY 📈", "SELL 📉", "HOLD ⏳"];

    setInterval(() => {
        let random = Math.floor(Math.random() * signals.length);
        document.getElementById("signal").innerText = signals[random];
    }, 2000);
}