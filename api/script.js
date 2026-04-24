const content = document.querySelector("#content")
let url = "./data.json"
const hitAPI = async(url) => {
    const api = await fetch(url)
    const data = api.json()
    return data
}
url = "https://kitsu.io/api/edge/anime?filter[categories]=adventure"

document.addEventListener("DOMContentLoaded", async() => {
    let data = await hitAPI(url);
    data = data.data
    console.log(data)
    let teks = '<ul class="movie">'
    data.forEach(element => {
        let attr = element.attributes;
        teks += `<li>
          <h3>${attr.titles.en}</h3>
          <img src="${attr.posterImage.tiny}"><br>`;
        if (attr.youtubeVideoId) {
          teks += `<a href="https://youtu.be/watch?v=${attr.youtubeVideoId}" target="_blank">Link Youtube</a>`;
        }
        teks += `</li>`;
      });
      
    teks += "</ul>"
    content.innerHTML = teks
})