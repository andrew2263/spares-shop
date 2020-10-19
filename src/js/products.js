let likedButtons = document.querySelectorAll('.popular__like');

for (let likedButton of likedButtons) {
    likedButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (likedButton.classList.contains('popular__like_liked')) {
            likedButton.classList.remove('popular__like_liked');
            likedButton.setAttribute('aria-label', 'Добавить в избранное');
        } else {
            likedButton.classList.add('popular__like_liked');
            likedButton.setAttribute('aria-label', 'Убрать из избранного');
        }
    })
}