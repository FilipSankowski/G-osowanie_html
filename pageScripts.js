votePageScript();

// ==================
async function votePageScript() {
  const candidates = await getCandidates();
  console.log(candidates);
}

async function getCandidates() {
  const url = 'http://127.0.0.1:3000/selectAll';
  let results;

  try {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        results = res;
      });
  } catch (error) {
    throw error;
  }

  //console.log(results);
  return results;
};