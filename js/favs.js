let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
let favList = document.querySelector(".favs");
let favMob = document.querySelector(".favour");
const render = () => {
  favList.innerHTML = "";
  let favListC = 0;
  try {
    favourites.forEach((favGame) => {
      favListC++;
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
      if (favListC === 3) throw "end";
    });
  } catch (e) {
    if (e != "end") throw e;
  }

  if (window.innerWidth < 576) {
    favMob.innerHTML = "";
    let favMobC = 0;
    try {
      favourites.forEach((favGame) => {
        favMobC++;
        favMob.innerHTML += `
                  <div class="games-list__item">
                    <div class="games-list__item-img">
                      <img src="${favGame.game_image}" alt="" />
                    </div>
                    <p>${favGame.game_name}</p>
                    <a href="${favGame.game_link}"></a>
                    <div class="delgame" onclick="remGameFavs('${favGame.game_link}')">X</div>
                  </div>
              `;
        if (favMobC === 3) throw "end";
      });
    } catch (e) {
      if (e != "end") throw e;
    }
  }

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
  if (!check) {
    let gameObject = {
      game_name: name,
      game_image: img,
      game_link: link,
    };
    favourites = [gameObject, ...favourites];
    render();
  } else {
    favourites = favourites.filter((favGame) => favGame.game_link !== link);
    render();
  }
}
let remGameFavs = (delLink) => {
  favourites = favourites.filter((favGame) => favGame.game_link !== delLink);
  render();
};
$(".sgame-content__panel-favourites svg").click(addGameFavs);
