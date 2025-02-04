let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim(); //Eliminar espacios

  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombreAmigo);
  actualizarListaAmigos();
  alert(`Amigo: '${nombreAmigo}' añadido correctamente.`);
  inputAmigo.value = "";
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    const listItem = document.createElement("li");
    listItem.textContent = amigo;
    listaAmigos.appendChild(listItem);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
