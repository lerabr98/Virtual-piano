function makeSoundByName (name) {
    const audioObject = new Audio(`./sounds/${name}.mp3`)
    audioObject.play()
}

document.addEventListener('keydown', function (e) {
    makeSoundByName(e.key.toUpperCase())
})