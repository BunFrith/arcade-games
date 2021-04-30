let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
let favList = document.querySelector(".favs");
let favsAll = document.querySelector(".favs-list");
const render = () => {
  favList.innerHTML = "";
  favsAll.innerHTML = "";
  favourites.forEach((favGame) => {
    favList.innerHTML += `
              <div class="games-list__item">
                <div class="games-list__item-img">
                  <img src="${favGame.game_image}" alt="" />
                </div>
                <p class="scroll_title">${favGame.game_name}</p>
                <a href="${favGame.game_link}"></a>
                <div class="delgame" onclick="remGameFavs('${favGame.game_link}')">X</div>
              </div>
          `;
  });
  favourites.forEach((favGame) => {
    favsAll.innerHTML += `
              <div class="games-list__item">
                <div class="games-list__item-img">
                  <img src="${favGame.game_image}" alt="" />
                </div>
                <p class="scroll_title">${favGame.game_name}</p>
                <a href="${favGame.game_link}"></a>
                <div class="delgame" onclick="remGameFavs('${favGame.game_link}')">X</div>
              </div>
          `;
  });
  localStorage.setItem("favourites", JSON.stringify(favourites));
};
render();
let remGameFavs = (delLink) => {
  favourites = favourites.filter((favGame) => favGame.game_link !== delLink);
  render();
};
