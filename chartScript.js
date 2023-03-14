async function makeChart(data) {
  new Chart(
    document.getElementById('voteResultsChart'),
    {
      type: 'doughnut',
      data: {
        labels: data.map(row => row.partia),
        datasets: [
          {
            label: 'Oddane głosy',
            data: data.map(row => row.oddaneGlosy),
            color: '#000000'
          }
        ]
      }
    }
  );
};