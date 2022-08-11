
const API_KEY = "i3cMVYkFVKlY2qn7wfbmgIRQNGBj1roI";

let lastTime = Date.now();
let input = document.getElementById("gifInput");
let gifsBlock = document.getElementById("gifs");
let cache = {};

const getUrl = (path) =>
  `https://api.giphy.com/v1/gifs/search?q=${path}&api_key=${API_KEY}`;

const getGifs = () => {
  let path = input.value;
  let timeNow = Date.now();

  if (cache[path]) return cache[path];

  if (timeNow - lastTime >= 500) {
    lastTime = timeNow;

    return new Promise((resolve, reject) => {
      let response = fetch(getUrl(path));

      response
        .then((r) => r.json())
        .then((r) => {
          if (path.length > 0) cache[path] = r.data;

          gifsBlock.innerHTML = "";

          r.data.forEach((d) => {
            let img = document.createElement("img");
            img.src = d.images.original.url;
            gifsBlock.append(img);
          });

          resolve(r.data);
        })
        .catch((e) => reject(e));
    });
  }
};

input.addEventListener("keyup", getGifs);
