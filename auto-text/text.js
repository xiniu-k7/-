const text0 = document.querySelector('#text')
const speed0 = document.querySelector('#Speed')
const text = 'Life means struggle!'
let idx = 1
let speed = 300 / speed0.value

autotext()

function autotext() {
    text0.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        idx=1
    }
    setTimeout(autotext,speed)
}

speed0.addEventListener('input',(e)=>speed=300/e.target.value)