let i = 0;
let tiempo = 0;

const imagenes = ['arriba2.jpg', 'arriba.jpg'];
const footer = document.querySelector('#footer');
const imagenHero = document.querySelector('.hero');
const btnFlotante = document.querySelector('.btn__flotante');


document.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        imagenHero.style.backgroundPositionY = '-' + tiempo + 'px';

        if (tiempo > 40) {
            tiempo = 0;

            imagenHero.style.backgroundImage = `url(./assets/img/${imagenes[i]})`;

            if (i === (imagenes.length - 1)) {
                i = 0;
            } else {
                i++;
                // console.log(i);
            }
        }

        tiempo++;
        // console.log(tiempo);
    }, 100);

});

btnFlotante.addEventListener('click', (e) => {
    e.preventDefault();

    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');

        btnFlotante.textContent = 'Idioma Y Moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');

        btnFlotante.textContent = 'X Cerrar';
    }
});