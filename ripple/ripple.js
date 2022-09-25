const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
        
        const btntop = e.target.offsetTop
        const btnleft = e.target.offsetLeft
        
        const xinside = x - btnleft
        const yinside = y - btntop
        
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yinside + 'px'
        circle.style.left = xinside + 'px'
        
        button.appendChild(circle)
        setTimeout(()=>circle.remove(),500)
    })
})