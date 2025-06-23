function carregarPersonagens() {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById("character-list");
        data.results.forEach(personagem => {
          container.innerHTML += `
            <div class="character">
              <img src="${personagem.image}" alt="${personagem.name}" width="100">
              <div>
                <h2>${personagem.name}</h2>
                <p>Status: ${personagem.status}</p>
                <p>Espécie: ${personagem.species}</p>
                <p>Origem: ${personagem.origin.name}</p>
              </div>
            </div>
          `;
        });
      })
      .catch(error => {
        console.error("Erro ao carregar personagens:", error);
        document.getElementById("character-list").innerText =
          "Erro ao carregar dados.";
      });
  }
  
  carregarPersonagens();
  