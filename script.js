
const API_KEY = "i3cMVYkFVKlY2qn7wfbmgIRQNGBj1roI";

let lastTime = Date.now();
let input = document.getElementById("gifInput");
let cache = {};

const getUrl = (path) => `https://api.giphy.com/v1/gifs/search?q=${path}&api_key=${API_KEY}`;

const getGifs = () => {
  let path = input.value;
  let timeNow = Date.now();

  if (cache[path]) return cache[path];
  if (path.length === 0) return

  if (timeNow - lastTime >= 500) {
    lastTime = timeNow

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let response = fetch(getUrl(path))

        if (response.state !== 'rejected') {
          try {
            response.then(r => r.json()).then(r => {
              cache[path] = r.data
              resolve(r.data)
            })
          } catch (e) {
            reject(e)
          }
        } else {
          reject(new Error(`Finished with error: ${response.reason}`))
        }
      }, 500)
    });
  }
};

input.addEventListener("keyup", getGifs);
