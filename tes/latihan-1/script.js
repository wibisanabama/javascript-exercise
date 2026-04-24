const divDetik = document.querySelector("#detik")
let detik = Number(divDetik.textContent)

const divMenit = document.querySelector("#menit")
let menit = Number(divMenit.textContent)

const divJam = document.querySelector("#jam")
let jam = Number(divJam.textContent)

const clockCounter = () => {
    detik++
    if(detik == 60) {
        menit ++
        detik = 0
    }
    if(menit == 60) {
        jam++
        menit = 0
        detik = 0
    }

        divDetik.textContent = detik < 10 ? `0${detik}`:detik
        divMenit.textContent = menit < 10 ? `0${menit}`:menit
        divJam.textContent = jam < 10 ? `0${jam}`: jam
}
setInterval(clockCounter, 0)