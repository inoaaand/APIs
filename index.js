async function carregarPersonagens() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
  
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
    } catch (err) {
      console.error("Erro ao carregar personagens:", err);
      document.getElementById("character-list").innerText = "Erro ao carregar dados.";
    }
  }
  
  carregarPersonagens();
  