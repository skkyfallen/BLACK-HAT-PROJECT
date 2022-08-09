var xValues = ["In Progress", "Discharged", "Awaiting"];
var yValues = [200, 270, 100];
var barColors = [
  "#FC945B",
  "#FFC146",
  "#a278f7"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      // text: "Statistics"
    }
  }
});