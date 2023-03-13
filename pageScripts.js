async function getCandidates() {
  const url = 'http://127.0.0.1:3000/selectAll';

  try {
    await fetch(url)
      .then((result) => result.json())
      .then((result) => console.log(result));
  } catch (error) {
    throw error;
  }
}

getCandidates();