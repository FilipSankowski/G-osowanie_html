async function votePageScript() {
  const formDest = document.getElementById("voteForm");
  const candidates = await getCandidates();
  //console.log(candidates);

  formDest.appendChild(makeSelectField(candidates));
  formDest.appendChild(makeSubmitButton(submitForm));
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

function makeSubmitButton(onSubmit) {
  const button = document.createElement("button");
  button.onclick = onSubmit;
  button.innerHTML = "Zagłosuj";

  return button;
}

function makeSelectField(candidateArray) {
  const selectField = document.createElement("select");
  selectField.setAttribute("id", "selectField");

  for (candidate of candidateArray) {
    const optText = `${candidate.imie} ${candidate.nazwisko} z partii "${candidate.partia}"`

    const option = document.createElement("option");
    option.setAttribute("value", candidate.id);
    option.innerHTML = optText;

    selectField.appendChild(option);
  }

  return selectField;
}

function submitForm() {
  const value = document.getElementById("selectField").value;
  const url = 'http://127.0.0.1:3000/insertVote';
  
  fetch(`${url}/${value}`);
}