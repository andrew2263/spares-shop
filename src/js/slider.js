try {

    let seeMoreButton = document.querySelector('.popular__more');
    let popularContainer = document.querySelector('body').querySelector('.swiper-container-popular');
    let popularList = popularContainer.querySelector('.popular__list');
    let buttonLeft = popularContainer.parentElement.querySelector('.popular-left');
    let buttonRight = popularContainer.parentElement.querySelector('.popular-right');



    seeMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (mySwiperPopular.initialized === true) {
            popularContainer.classList.remove('swiper-container');
            popularList.classList.remove('swiper-wrapper');
            popularList.classList.add('popular__list_wrap');
            popularContainer.style.transition = "none !important";
            popularList.style.transition = "none !important";
            try {
                mySwiperPopular.destroy();
            } catch (error) {
            } finally {
                seeMoreButton.innerHTML = 'Свернуть';
                buttonLeft.style.display = "none";
                buttonRight.style.display = "none";
            }
        } else {
            popularContainer.classList.add('swiper-container');
            popularList.classList.add('swiper-wrapper');
            popularList.classList.remove('popular__list_wrap');
            mySwiperPopular.init();
            seeMoreButton.innerHTML = 'Смотреть еще';
            buttonLeft.style.display = "inline-block";
            buttonRight.style.display = "inline-block";
        }
    });
} catch(error) {
    
}