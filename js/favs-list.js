let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
let favList = document.querySelector(".favs");
let favsAll = document.querySelector(".favs-list");
let main = document.querySelector(".main");
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
  if (favourites.length == 0) {
    main.innerHTML = '<p class="favl_msg">Вы пока не добавили ни одной игры в избранное</p>';
    favList.innerHTML = '<p class="fav_msg">В списке нет игр</p>';
  }
};
console.log(favourites);
render();
let remGameFavs = (delLink) => {
  favourites = favourites.filter((favGame) => favGame.game_link !== delLink);
  render();
};
