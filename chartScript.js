async function makeChart(data) {

  new Chart(
    document.getElementById('voteResultsChart'),
    {
      type: 'pie',
      data: {
        labels: data.map(row => row.partia),
        datasets: [
          {
            label: 'Oddane głosy',
            data: data.map(row => row.oddaneGlosy)
          }
        ]
      }
    }
  );
};