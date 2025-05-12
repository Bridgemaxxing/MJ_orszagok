fetch("https://api.jikan.moe/v4/top/anime?limit=5")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("anime-list");
    data.data.forEach(anime => {
      const animeDiv = document.createElement("div");
      animeDiv.innerHTML = `
        <h3>${anime.title}</h3>
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}" width="150">
        <p>Értékelés: ${anime.score}</p>
        <a href="${anime.url}" target="_blank">További infó</a>
        <hr>
      `;
      container.appendChild(animeDiv);
    });
  });
