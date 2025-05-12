fetch("https://api.jikan.moe/v4/top/manga?limit=5")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("manga-list");
    data.data.forEach(manga => {
      const mangaDiv = document.createElement("div");
      mangaDiv.innerHTML = `
        <h3>${manga.title}</h3>
        <img src="${manga.images.jpg.image_url}" alt="${manga.title}" width="150">
        <p>Értékelés: ${manga.score ?? 'N/A'}</p>
        <a href="${manga.url}" target="_blank">További infó</a>
        <hr>
      `;
      container.appendChild(mangaDiv);
    });
  });
