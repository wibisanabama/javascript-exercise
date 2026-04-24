const pkn = document.getElementById("pkn");
const mtk = document.getElementById("mtk");
const inggris = document.getElementById("inggris");
const btnhitung = document.getElementById("btnhitung")
const jumlah = document.getElementById("jumlah")
const ratarata = document.getElementById("ratarata")
const predikat = document.getElementById("predikat")
const statuslulus = document.getElementById("status")
const keterangan = document.getElementById("keterangan")

btnhitung.addEventListener('click', function(){
    const JumlahNilai = parseFloat(pkn.value) + parseFloat(mtk.value) + parseFloat(inggris.value);
    jumlah.innerHTML = JumlahNilai

    const RataRata = parseFloat(JumlahNilai/3);
    ratarata.innerHTML = RataRata

    if(RataRata >= 90) {
        predikat.innerHTML = "A"
    }
    else if(RataRata >= 80 && RataRata <= 90) {
        predikat.innerHTML = "B"
    }
    else if(RataRata >= 70 && RataRata <= 80) {
        predikat.innerHTML = "C"
    }
    else {
        predikat.innerHTML = "D"
    }

    if(RataRata >= 80) {
        statuslulus.innerHTML = "Lulus"
    }
    else {
        statuslulus.innerHTML = 'Tidak Lulus'
    }

    if(RataRata >= 80) {
        keterangan.innerHTML = "Kelazzz Kinkkk 😍😘🥰👑👑👑"
    }
    else {
        keterangan.innerHTML = "Pfft Skill Issues 😏🤭🥴"
    }
})