document.addEventListener('DOMContentLoaded', () => {
    const imgCancel = document.getElementById('jedi-cancel-button');
    const linkSearch = document.querySelector('.header__container__top-row__functions__search__link');

    imgCancel.addEventListener('click', () => toggleSearchVisibility());
    linkSearch.addEventListener('click', () => toggleSearchVisibility());
});

const toggleSearchVisibility = () => {
    const form = document.querySelector('.header__container__top-row__functions__search__form');
    const link = document.querySelector('.header__container__top-row__functions__search__link');

    form.classList.toggle('header__container__top-row__functions__search__form--is-active');
    link.classList.toggle('header__container__top-row__functions__search__link--is-inactive');
};
