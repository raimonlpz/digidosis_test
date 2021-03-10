import cardSvgs from '../../assets/img/Card-Icon/*.svg';
import heroImgs from '../../assets/img/*.jpg';

/* Data set */
const cards = [
    {
        id: '01',
        title: 'Misión',
        description: 'El veganismo no es ninguna dieta. Es una actitud de rebeldía, una postura ética basada en el profundo respeto por los animales y nuestro entorno. Ese respeto pasa por no comerlos ni usarlos para vestir o esclavizarlos para nuestro disfrute o enriquecimiento. Es un espacio en el que se da voz a quienes no la tienen.',
        img: heroImgs['Hero-img-1'],
        img_mobile: heroImgs['Mobile-Hero-img-01'],
        cardlogo: cardSvgs[1]
    },
    {
        id: '02',
        title: 'Explora',
        description: 'Planeta Vegano es una tienda vegana y online fundada desde 2009. Somos una alternativa que ofrece e incentiva el uso de productos veganos libres de crueldad y de explotación animal. Todo con el ánimo de promover el veganismo y ayudar a quienes están interesados en adoptar esta alternativa de vida.',
        img: heroImgs['Hero-img-2'],
        img_mobile: heroImgs['Mobile-Hero-img-02'],
        cardlogo: cardSvgs[2]
    },
    {
        id: '03',
        title: 'Productos',
        description: 'Somos Veggie Room, un pequeño comercio en el centro de Madrid donde podéis comprar productos veganos (cien por cien vegetales) y libres de explotación. Sensibilizados y comprometidos con la defensa de los derechos humanos y el medio ambiente, y por supuesto, de los derechos de los animales.',
        img: heroImgs['Hero-img-3'],
        img_mobile: heroImgs['Mobile-Hero-img-03'],
        cardlogo: cardSvgs[3]
    }
];

let index = 0;
let selectedCard;
let isFirstLoad = true;
let sliderDirection = '';
let lastBgImgForBackUp = '01';
let isMobileView = false;

document.getElementById('arrow-right').addEventListener('click', () => {
    sliderDirection = 'left';
    populateTemplateWithNewCard('sum');
});
document.getElementById('arrow-left').addEventListener('click', () => {
    sliderDirection = 'right';
    populateTemplateWithNewCard('subtract');
});
window.addEventListener('resize', () => {
    checkClientScreenWidth();
});


// dynamic content
const content_id = document.getElementById('content-id');
const content_logo = document.getElementById('content-logo');
const content_title = document.getElementById('content-title');
const content_paragraph = document.getElementById('content-paragraph');
const hero_img = document.getElementById('hero-img');
const hero_img_backup = document.getElementById('hero-img-backup');

// static content - just for retriggering animations
const heading_divider = document.getElementById('heading-divider');
const regular_divider = document.getElementById('regular-divider');
const content_btn = document.getElementById('content-btn');

const populateTemplateWithNewCard = (action) => {
    if (action === 'sum') index++;
    if (action === 'subtract') index--;

    if (index > 2) index = 0; 
    if (index < 0) index = 2;

    selectedCard = cards[index];

    retriggerAnimationsAndPopulateContent(
        content_id, 
        "landing-description-content-heading-id", 
        `<h1>${selectedCard.id}</h1>`
    );
    retriggerAnimationsAndPopulateContent(
        content_title, 
        "landing-description-content-title", 
        `<h1>${selectedCard.title}</h1>`
    );
    retriggerAnimationsAndPopulateContent(
        content_paragraph, 
        "landing-description-content-paragraph", 
        `<p>${selectedCard.description}</p>`
    );
    retriggerAnimationsAndPopulateContent(
        content_logo, 
        "landing-description-content-heading-logo", 
        `<img src="${selectedCard.cardlogo}" />`
    );

    retriggerAnimationsAndPopulateContent(
        heading_divider, 
        "landing-description-content-heading-sm-divider"
    );
    retriggerAnimationsAndPopulateContent(
        regular_divider, 
        "landing-description-content-divider"
    );
    retriggerAnimationsAndPopulateContent(
        content_btn, 
        "landing-description-content-btn"
    );

    hero_img.style.backgroundImage = `url(${isMobileView ? selectedCard.img_mobile : selectedCard.img})`;

    hero_img_backup.classList.remove('bg-01', 'bg-02', 'bg-03', 'remove-slider-trans-right', 'remove-slider-trans-left');
    void hero_img_backup.offsetWidth;

    if (!isFirstLoad) {
        hero_img_backup.classList.add(`bg-${lastBgImgForBackUp}`, `remove-slider-trans-${sliderDirection === 'left' ? 'right' : 'left'}`);

        hero_img.classList.remove('present-slider-trans-right', 'present-slider-trans-left');
        void hero_img.offsetWidth;
        hero_img.classList.add(`present-slider-trans-${sliderDirection}`);

        if (sliderDirection === 'right') {
            hero_img.style.marginLeft = '-15%';
        }  else {
            hero_img.style.marginLeft = '14.99%';
        }   
    } 
    lastBgImgForBackUp = selectedCard.id;
}


const retriggerAnimationsAndPopulateContent = (el, className, htmlEl) => {
    el.classList.remove(className);
    void content_id.offsetWidth;
    el.classList.add(className);
    if (htmlEl) {
        el.innerHTML = htmlEl;
    }
}

const initApp = () => {
    const pageWrapper = document.getElementById('wrapper');
    pageWrapper.style.display = 'none';
    checkClientScreenWidth();

    setTimeout(() => {
        pageWrapper.style.display = 'flex';
        populateTemplateWithNewCard();
        isFirstLoad = false;
    }, 1600);
}   

const checkClientScreenWidth = () => {
    if (document.documentElement.clientWidth <= 800) {
        isMobileView = true;
    } else {
        isMobileView = false;
    }
}


initApp();
