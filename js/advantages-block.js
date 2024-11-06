const contentArray = [
    {
        title: "Организуем проекты мирового масштаба",
        text: "Мы обладаем большим опытом организации проектов мирового масштаба",
        image: "assets/images/advantages/image-advan.png"
    },
    {
        title: "Широкий спектр услуг",
        text: "Мы предлагаем широкий спектр сценических и продакшн услуг по выгодным ценам",
        image: "assets/images/advantages/image-advan2.png"
    },
    {
        title: "Профессиональное оборудование",
        text: "Prolyte, Fenix, Layher, Doughty; звуковое оборудование — Allen&Heath, FBT, Yamaha, L-Acoustics, Pioneer, Nexo, ElectroVoice, Sennheiser, Shure; световое оборудование — Robe, Martin, Clay Paky",
        image: "assets/images/catalog/image-catalog.png"
    },
    {
        title: "Крупная техническая база",
        text: "Одна из самых крупных технических баз в России, позволяющая реализовывать проекты любого масштаба.",
        image: "assets/images/advantages/image-advant4.png"
    },
    {
        title: "География проектов",
        text: "Широкая география реализованных проектов, охватывающая множество городов и стран.",
        image: "assets/images/advantages/image-advant5.png"
    },
    {
        title: "Сотрудничество с лидерами отрасли",
        text: "Мы сотрудничаем с такими компаниями, как Nussli, ETC, AED group, PRG, Neumann&Müller и Adunic.",
        image: "assets/images/advantages/image-advant6.png"
    },
    {
        title: "Аттестация специалистов",
        text: "Наши специалисты регулярно проходят аттестацию в сертифицированных органах надзора.",
        image: "assets/images/advantages/image-advant7.png"
    },
    {
        title: "Сертификаты и лицензии",
        text: "Обладаем свидетельством саморегулируемой организации о праве ведения строительной и проектировочной деятельности.",
        image: "assets/images/advantages/image-advant8.png"
    }
];


let currentId = 0;

function updateContent() {
    const itemContent = document.querySelector('.main-advantages_item');
    const itemText = itemContent.querySelector('.item-content_text');
    const itemTitle = itemContent.querySelector('.item_title');
    const itemImage = itemContent.querySelector('.image-advan');

    itemText.textContent = contentArray[currentId].text;
    itemTitle.textContent = contentArray[currentId].title;
    itemImage.src = contentArray[currentId].image;
    const itemNumber1 = itemContent.querySelector('.item-content_numder');
    itemNumber1.innerHTML = `${String(currentId + 1).padStart(2, '0')}<span class="numder-small">/${String(contentArray.length).padStart(2, '0')}</span>`;

    // Обновление номера во втором элементе
    const itemNumber2 = document.querySelector('.main-advantages_btn .item-content_numder');
    itemNumber2.innerHTML = `${String(currentId + 1).padStart(2, '0')}<span class="numder-small">/${String(contentArray.length).padStart(2, '0')}</span>`;
}

function scrollContent(button, direction) {
    if (direction === 'left' || direction === 'up') {
        currentId = (currentId - 1 + contentArray.length) % contentArray.length;
    } else if (direction === 'right' || direction === 'down') {
        currentId = (currentId + 1) % contentArray.length;
    }

    updateContent();
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent(); 
});
