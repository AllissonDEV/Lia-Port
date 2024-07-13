const images = ['./assets/desenhos/Anna e Ephel.png','./assets/desenhos/Astra.png','./assets/desenhos/Bonequinho.png','./assets/desenhos/Daiana Thompson.png','./assets/desenhos/Lillithy.png','./assets/desenhos/Mãe da Suyen.png','./assets/desenhos/Suyen academia.png', './assets/desenhos/Suyen.png', './assets/desenhos/Undertale.png', './assets/desenhos/Vampira.png', './assets/desenhos/Veve Riel.png', './assets/desenhos/1.png', './assets/desenhos/2.png', './assets/desenhos/3.png', './assets/desenhos/4.png', './assets/desenhos/5.png', './assets/desenhos/6.png', './assets/desenhos/7.png', './assets/desenhos/8.png', './assets/desenhos/9.png', './assets/desenhos/10.png', './assets/desenhos/11.png', './assets/desenhos/12.png', './assets/desenhos/13.png', './assets/desenhos/14.png', './assets/desenhos/15.png', './assets/desenhos/16.jpg', './assets/desenhos/17.png'];


let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
    console.log(`Imagem anterior, índice atual: ${currentIndex}`);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
    console.log(`Próxima imagem, índice atual: ${currentIndex}`);
});

function updateImage() {
    imageElement.src = images[currentIndex];
    console.log(`Atualizando imagem para: ${images[currentIndex]}`);
}


var menuItem = document.querySelectorAll('.item-menu, contato')

function selectLink() {
    menuItem .forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')

}

menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)

// Expandir menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})