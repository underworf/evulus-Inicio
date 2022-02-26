/* --------------------- BUTTON TOP --------------------- */
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        $('.go-top').addClass('active')
    } else {
        $('.go-top').removeClass('active')
    }
})




/* ----------------------- SLIDER ----------------------- */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        700: {
            items: 3
        },
        800: {
            items: 4,
        },
        1000: {
            items: 5,
        },
        1200: {
            items: 6
        }
    }
})


/* ------------------ NUMBERS-ANIMATION ----------------- */

const contadores = $('.contador')
const velocidad = 500

const animacionContadores = () => {
    for (const contador of contadores) {
        const actualizar_contador = () => {
            let cantidad_maxima = +contador.dataset.cantidad
            let valor_actual = +contador.innerText
            let incremento = cantidad_maxima / velocidad


            if (valor_actual < cantidad_maxima) {
                contador.innerText = Math.ceil(valor_actual + incremento)
                setTimeout(actualizar_contador, 30)
            } else {
                contador.innerText = cantidad_maxima
            }
        }
        actualizar_contador()
    }
}


/* ---------------- INTERSECTIONOBSERVER ---------------- */

const iniciarConteo = elementos => {
    elementos.forEach(elemento => {
        if (elemento.isIntersecting) {


            let container = document.querySelectorAll('.contador-container')
            container.forEach(item => {
                item.classList.add('animation-number')
                item.classList.remove("show-number")
            })
            setTimeout(animacionContadores, 300)
        }
    })
}

const observador = new IntersectionObserver(iniciarConteo, {
    threshold: 0.75
})

const elementosHTML = document.querySelectorAll('.contador')
elementosHTML.forEach(containerContador => {
    observador.observe(containerContador)
})