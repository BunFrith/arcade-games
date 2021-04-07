let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
let favList = document.querySelector(".favs");
const render = () => {
  favList.innerHTML = "";
  let count = 0;
  favourites.forEach((favGame) => {
    favList.innerHTML += `
              <div class="games-list__item">
                <div class="games-list__item-img">
                  <img src="${favGame.game_image}" alt="" />
                </div>
                <p>${favGame.game_name}</p>
                <a href="${favGame.game_link}"></a>
                <div class="delgame" onclick="remGameFavs('${favGame.game_link}')">X</div>
              </div>
          `;
    count++;
  });
  localStorage.setItem("favourites", JSON.stringify(favourites));
};
render();
function addGameFavs() {
  let img = $(this).closest(".sgame").find(".sgame-info__img img").attr("src"),
    name = $(this).closest(".sgame-content__panel").find("h2").text(),
    link = window.location.href;
  var check = favourites.some(function (e) {
    return link === e.game_link;
  });
  console.log(check);
  if (!check) {
    let gameObject = {
      game_name: name,
      game_image: img,
      game_link: link,
    };
    favourites = [gameObject, ...favourites];
    render();
  } else {
    alert("Игра уже добавлена в избранное!");
  }
}
let remGameFavs = (delLink) => {
  favourites = favourites.filter((favGame) => favGame.game_link !== delLink);
  render();
};
$(".sgame-content__panel-favourites svg").click(addGameFavs);
