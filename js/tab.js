function addStudent() {
  let nome = document.sample.nome.value;
  let cognome = document.sample.cognome.value;
  let data = document.sample.data.value;
  let tr = document.createElement("tr");
  let td1 = tr.appendChild(document.createElement("td"));
  var td2 = tr.appendChild(document.createElement("td"));
  let td3 = tr.appendChild(document.createElement("td"));
  td1.innerHTML = nome;
  td2.innerHTML = cognome;
  td3.innerHTML = data;
  document.getElementById("tbI").appendChild(tr);
}
