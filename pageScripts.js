async function votePageScript() {
  const formDest = document.getElementById("voteForm");
  const candidates = await getURL('http://127.0.0.1:3000/selectCandidates');
  //console.log(candidates);

  formDest.appendChild(makeInputField("imie", "Podaj imie:"));
  formDest.appendChild(makeInputField("nazwisko", "Podaj nazwisko:"));
  formDest.appendChild(makeSelectField("kandydat", candidates));
  formDest.appendChild(makeSubmitButton(submitForm));
}

async function adminPageScript() {
  const votes = await getURL('http://127.0.0.1:3000/selectVotes');
  //console.log(votes);
  displayVotes(votes);
}

async function getURL(url) {
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

function makeSelectField(id, candidateArray) {
  const selectField = document.createElement("select");
  selectField.setAttribute("id", id);

  for (candidate of candidateArray) {
    const optText = `${candidate.imie} ${candidate.nazwisko} z partii "${candidate.partia}"`

    const option = document.createElement("option");
    option.setAttribute("value", candidate.id);
    option.innerHTML = optText;

    selectField.appendChild(option);
  }

  return selectField;
}

function makeInputField(id, placeholder) {
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("id", id);
  inputField.setAttribute("placeholder", placeholder);

  return inputField;
}

function submitForm() {
  const imie = document.getElementById("imie").value;
  const nazwisko = document.getElementById("nazwisko").value;
  const kandydat = document.getElementById("kandydat").value;
  const url = 'http://127.0.0.1:3000/insertVote';
  
  fetch(`${url}/${imie}/${nazwisko}/${kandydat}`);
  alert("Głos oddany");
}

function displayVotes(voteResults) {
  const divDest = document.getElementById("divDest");

  for (partia of voteResults) {
    let div = document.createElement("div");
    div.setAttribute("class", "resultDiv");
    div.innerHTML = `Ilość głosów uzyskanych przez partię "${partia.partia}": ${partia.oddaneGlosy}`

    divDest.appendChild(div);
  }
}