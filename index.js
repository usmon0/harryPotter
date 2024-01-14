import { persArr } from "./data/pers.js";
let cardCont = document.querySelector(".card_container");
let input = document.querySelector(".input");
let School = document.querySelector(".SchoolSelect");

const checkImg = (img, gen) => {
  if (img == "") {
    if (gen == "male") {
      return "https://yt3.googleusercontent.com/ytc/AIf8zZTsClyB8cA99Ub3ud1eXiGd04Y4_y1i2NDW9QT82Q=s900-c-k-c0x00ffffff-no-rj";
    } else if (gen == "female") {
      return "https://w.forfun.com/fetch/d5/d512b11c82e78fe85eca70ce75c36188.jpeg";
    }
  } else {
    return img;
  }
};

function createCard(obj) {
  let newCard = document.createElement("article");
  newCard.classList.add("card");
  newCard.innerHTML = `
        <div class="cac">
              <img class="card_img" src="${checkImg(
                obj.image,
                obj.gender
              )}" alt="">
        </div>
        <div class="actor_description">
            <h3 class="pers_name">${obj.name}</h3>
            <p class="actor">Actor: ${obj.actor}</p>
            <p class="Gender">Gender: ${obj.gender}</p>
            <p class="House">House: ${obj.house}</p>
            <p class="wand_core">Wand core: ${obj.wand.core}</p>
            <p class="alive">Alive: ${obj.alive ? "yes" : "No"}</p>
        </div>
    `;
  return newCard;
}

persArr.forEach((el) => cardCont.append(createCard(el)));

const render = (arr) => {
  cardCont.innerHTML = "";
  arr.forEach((el) => cardCont.append(createCard(el)));
};

School.addEventListener("change", function () {
  let arr = persArr.filter((el) =>
    el.house.trim().includes(School.value.trim())
  );
  render(arr);
});

input.addEventListener("input", function () {
  let newArr = persArr.filter((el) =>
    el.name.toLowerCase().includes(input.value.trim().toLowerCase())
  );
  render(newArr);
});
