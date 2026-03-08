// Define consistent Chart.js defaults
Chart.defaults.color = "#7d8590";
Chart.defaults.font.family = "'Outfit', sans-serif";
Chart.defaults.scale.grid.color = "rgba(255, 255, 255, 0.05)";

// 1. Daily Trend Chart (Line)
const ctxTrend = document.getElementById("trendChart").getContext("2d");

// Create a gradient for the line chart fill
const gradientFill = ctxTrend.createLinearGradient(0, 0, 0, 400);
gradientFill.addColorStop(0, "rgba(88, 166, 255, 0.4)");
gradientFill.addColorStop(1, "rgba(88, 166, 255, 0)");

const trendChart = new Chart(ctxTrend, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "New Cases (Global)",
        data: [
          1500000, 2200000, 1800000, 2500000, 3100000, 2800000, 2100000,
          1700000, 1200000, 800000,
        ],
        borderColor: "#58a6ff",
        borderWidth: 3,
        backgroundColor: gradientFill,
        fill: true,
        tension: 0.4, // Smooth curves
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#58a6ff",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(22, 27, 34, 0.9)",
        titleColor: "#fff",
        bodyColor: "#e6edf3",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { display: false },
      },
      x: {
        grid: { display: false },
        border: { display: false },
      },
    },
  },
});

// 2. Top Affected Chart (Bar)
const ctxCountry = document.getElementById("countryChart").getContext("2d");
const countryChart = new Chart(ctxCountry, {
  type: "bar",
  data: {
    labels: ["USA", "India", "France", "Germany", "Brazil"],
    datasets: [
      {
        label: "Total Cases (Millions)",
        data: [103.4, 44.9, 40.1, 38.4, 37.5],
        backgroundColor: "#8957e5",
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { display: false },
        grid: { color: "rgba(255, 255, 255, 0.05)" },
      },
      x: {
        grid: { display: false },
        border: { display: false },
      },
    },
  },
});

// 3. Vaccination Progress (Doughnut)
const ctxVax = document.getElementById("vaxChart").getContext("2d");
const vaxChart = new Chart(ctxVax, {
  type: "doughnut",
  data: {
    labels: ["Fully Vaccinated", "Partially Vaccinated", "Not Vaccinated"],
    datasets: [
      {
        data: [65, 10, 25],
        backgroundColor: ["#3fb950", "#d29922", "#30363d"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 11 },
        },
      },
    },
  },
});

// Mock Refresh button animation
document.querySelector(".btn-primary").addEventListener("click", (e) => {
  const btn = e.target;
  btn.innerHTML = "Refreshing...";
  btn.style.opacity = "0.7";

  setTimeout(() => {
    btn.innerHTML = "Refresh Data";
    btn.style.opacity = "1";

    // Randomize some data lightly for effect
    const baseCases = 684231102;
    const newCases = baseCases + Math.floor(Math.random() * 50000);
    document.getElementById("kpi-cases").innerHTML = newCases.toLocaleString();
  }, 800);
});
