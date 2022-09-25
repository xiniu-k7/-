const loading = document.querySelector('.loading')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring,30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
    loading.innerHTML = load+'%'
    loading.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    
}
let scale = (num, inmin, inmax, outmin, outmax) => {
    return (num-inmin)*(outmax-outmin)/(inmax-inmin)+outmin
}