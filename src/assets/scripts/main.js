document.addEventListener('DOMContentLoaded', () => {
    const dbCharacters = [
        {
            img: 'astromech-jabba-s-palace-main_cdc9691a.jpeg',
            caption: '8D8',
        },
        {
            img: 'databank_ackbar_01_169_55137220.jpeg',
            caption: 'Admiral Ackbar',
        },
        {
            img: 'databank_admiralpiett_01_169_18014135.jpeg',
            caption: 'Admiral Priett',
        },
        {
            img: 'anakin-skywalker-main_23e5105b.jpeg',
            caption: 'Anakin Skywalker',
        },
        {
            img: 'barada_cd0c628e.jpeg',
            caption: 'Barada',
        },
        {
            img: 'bib-fortuna-main_376ba1ba.jpeg',
            caption: 'Bib Fortuna',
        },
        {
            img: 'boba-fett-main_a8fade4d.jpeg',
            caption: 'Boba Fett',
        },
        {
            img: 'databank_bossk_01_169_c3c42fbe.jpeg',
            caption: 'Bossk',
        },
        {
            img: 'c-3po-main_d6850e28.jpeg',
            caption: 'C-3PO',
        },
        {
            img: 'chewie-main_e1968a8a.jpeg',
            caption: 'Chewbacca',
        },
        {
            img: 'chief-chirpa_1176b0ea.jpeg',
            caption: 'Chief Chirpa',
        },
        {
            img: 'darth-vader-main_4560aff7.jpeg',
            caption: 'Darth Vader',
        },
        {
            img: 'databank_dengar_01_169_18886b62.jpeg',
            caption: 'Dengar',
        },
        {
            img: 'image_3bfc14aa.jpeg',
            caption: 'Droopy McCool',
        },
        {
            img: 'emperor-palpatine-main_d6632d0a.jpeg',
            caption: 'Emperor Palpatine / Darth Sidius',
        },
        {
            img: 'ev-9d9-2_28db778f.jpeg',
            caption: 'EV-9D9',
        },
        {
            img: 'databank_generalmadine_01_169_81edb078.jpeg',
            caption: 'General Madine',
        },
        {
            img: 'greeata_813f2567.jpeg',
            caption: 'Greeata',
        },
    ];
    const dbCreatures = [
        {
            img: 'bantha-main_a52af05f.jpeg',
            caption: 'Bantha',
        },
        {
            img: 'kowakian-monkey-lizard_7768e56f.jpeg',
            caption: 'Kowakian Monkey-Lizard',
        },
        {
            img: 'the-book-of-boba-fett-chapter-1-story-gallery-02_a6166942.jpeg',
            caption: 'Sarlacc',
        },
        {
            img: 'databank_tauntaun_01_169_b7307446.jpeg',
            caption: 'Tauntaun',
        },
        {
            img: 'worrt-main_19e66222.jpeg',
            caption: 'Worrt',
        },
    ];
    const dbDroids = [
        {
            img: 'wed-treadwell-droid-main-image_dfbea7b6.jpeg',
            caption: 'WED Treadwell Droid',
        },
        {
            img: 'tt-8l-y7_83c329ce.jpeg',
            caption: 'TT-8L/Y7',
        },
        {
            img: 'smelter-droid_465314de.jpeg',
            caption: 'Smelter Droid',
        },
        {
            img: 'protocol_droid_6ddeb574.jpeg',
            caption: 'Protocol Droid',
        },
        {
            img: 'mouse-droid-main-image_035abc9d.jpeg',
            caption: 'Mouse Droid',
        },
        {
            img: 'databank_imperialprobedroid_01_169_9667313a.jpeg',
            caption: 'Imperial Probe Droid',
        },
        {
            img: 'gnk-droid-main-image_f0d89099.jpeg',
            caption: 'Gonk Droid',
        },
        {
            img: 'databank_astromechdroid_01_169_9d9b98b1.jpeg',
            caption: 'Astromech Droid',
        },
        {
            img: '2-1b-droid-main-image_546a90ad.jpeg',
            caption: '2-1B Droid',
        },
    ];
    const dbLocations = [
        {
            img: 'Bespin_2d0759aa.jpeg',
            caption: 'Bespin',
        },
        {
            img: 'databank_ewokvillage_01_169_e8ae9721.jpeg',
            caption: 'Bright Tree Village',
        },
        {
            img: 'databank_cloudcity_01_169_e589ba2c.jpeg',
            caption: 'Cloud City',
        },
        {
            img: 'coruscant-main_59b865a4.jpeg',
            caption: 'Coruscant',
        },
        {
            img: 'Dagobah_890df592.jpeg',
            caption: 'Dagobah',
        },
        {
            img: 'death-star-ii-main_92554cb4.jpeg',
            caption: 'Death Star II',
        },
        {
            img: 'emperor-s-throne-room-main_638aef97.jpeg',
            caption: "Emperor's Throne Room",
        },
        {
            img: 'databank_endor_01_169_68ba9bdc.jpeg',
            caption: 'Endor',
        },
        {
            img: 'jabba-the-hutt-s-palace-main_3b79a010.jpeg',
            caption: "Jabba the Hutt's Palace",
        },
        {
            img: 'databank_jeditemple_01_169_1b756b23.jpeg',
            caption: 'Jedi Temple',
        },
        {
            img: 'databank_naboo_01_169_6cd7e1e0.jpeg',
            caption: 'Naboo',
        },
        {
            img: 'sarlacc-pit-main_d8851a67.jpeg',
            caption: 'Sarlacc Pit',
        },
        {
            img: 'tatooine-main_9542b896.jpeg',
            caption: 'Tatooine',
        },
        {
            img: 'theed-palace_84f09a19.jpeg',
            caption: 'Theed Royal Palace',
        },
        {
            img: 'yodas-hut_a3d1133d.jpeg',
            caption: "Yoda's Hutt",
        },
    ];

    const imgCancel = document.getElementById('jedi-cancel-button');
    const linkSearch = document.querySelector('.header__container__top-row__functions__search__link');
    const tabButtons = document.querySelectorAll('[data-tab-button]');

    imgCancel.addEventListener('click', () => toggleSearchVisibility());
    linkSearch.addEventListener('click', () => toggleSearchVisibility());

    populateTabDB(dbCharacters, 'characters');
    populateTabDB(dbCreatures, 'creatures');
    populateTabDB(dbDroids, 'droids');
    populateTabDB(dbLocations, 'locations');

    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', e => {
            toggleTabVisibility(e.target);
        });
    });
});

const toggleSearchVisibility = () => {
    const form = document.querySelector('.header__container__top-row__functions__search__form');
    const link = document.querySelector('.header__container__top-row__functions__search__link');

    form.classList.toggle('header__container__top-row__functions__search__form--is-active');
    link.classList.toggle('header__container__top-row__functions__search__link--is-inactive');
};

const populateTabDB = (itemsList, tabName) => {
    const ul = document.querySelector(`[data-tab-list=${tabName}]`);
    let list = '';

    itemsList.forEach(char => {
        list += '<li class="databank__content__list__item">';
        list += `<img class="databank__content__list__item__image" src="./assets/images/databank/${char['img']}" alt="${char['caption']}" />`;
        list += '<div class="databank__content__list__item__decal"></div>';
        list += `<h3 class="databank__content__list__item__caption">${char['caption']}</h3>`;
        list += '</li>';
    });

    ul.innerHTML = list;
};

const cleanTabButtons = () => {
    document.querySelectorAll('[data-tab-button]').forEach(tabButton => {
        tabButton.classList.remove('databank__content__tabs__button--is-active');
    });
};

const cleanTabs = () => {
    document.querySelectorAll('[data-tab-list]').forEach(tab => {
        tab.classList.remove('databank__content__list--is-active');
    });
};

const toggleTabVisibility = button => {
    const tab = button.getAttribute('data-tab-button');

    cleanTabButtons();
    cleanTabs();
    button.classList.add('databank__content__tabs__button--is-active');
    document.querySelector(`[data-tab-list=${tab}]`).classList.add('databank__content__list--is-active');
};
