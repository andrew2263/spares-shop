(() => {

let selects = document.querySelectorAll('.select');

for (let i = 0; i < selects.length; i++) {
    let selectHead = selects[i].querySelector('.select__head');
    let selectList = selects[i].querySelector('.select__list');    
    let selectInput = selects[i].querySelector('.select_input');
    let selectItems = selectList.querySelectorAll('.select__item');

    selectHead.addEventListener('click', (e) => {
        e.preventDefault();
        selectHead.classList.toggle('select__head_expanded');
        selectList.classList.toggle('select__list_expanded');

        for (let j = 0; j < selects.length; j++) {
            if ((j !== i) && selects[j].querySelector('.select__head').classList.contains('select__head_expanded') &&
            selects[j].querySelector('.select__list').classList.contains('select__list_expanded')) {
                selects[j].querySelector('.select__head').classList.remove('select__head_expanded');
                selects[j].querySelector('.select__list').classList.remove('select__list_expanded');
            }
        }
    });

    for (let selectItem of selectItems) {
        selectItem.addEventListener('click', (e) => {
            e.preventDefault();
            for (let j = 0; j < selectItems.length; j++) {
                if (selectItems[j].classList.contains('select__item_active')) {
                    selectItems[j].classList.remove('select__item_active');
                }
            }            
            selectHead.classList.toggle('select__head_expanded');
            selectList.classList.toggle('select__list_expanded');
            selectHead.innerHTML = selectItem.innerHTML;
            selectInput.value = selectItem.innerHTML;
            selectItem.classList.add('select__item_active');
        });
    }
}

let collapseButtons = document.querySelectorAll('.params__collapse-button');

for (let collapseButton of collapseButtons) {
    collapseButton.addEventListener('click', (e) => {
        e.preventDefault();
        let fieldset = collapseButton.parentElement.parentElement.querySelector('.params__fieldset');
        console.log(fieldset);
        collapseButton.classList.toggle('params__collapse-button_expanded');
        fieldset.classList.toggle('params__fieldset_hidden');
    });
}

let buttonBlocks = document.querySelectorAll('.product-top__button_block');
let buttonLists = document.querySelectorAll('.product-top__button_list');

for (let buttonBlock of buttonBlocks) {
    buttonBlock.addEventListener('click', (e) => {
        e.preventDefault();
        let productList = buttonBlock.parentElement.parentElement.parentElement.parentElement.querySelector('.products').querySelector('.products__list');
        productList.classList.remove('products__list_column');
        buttonBlock.classList.add('product-top__button_active');
        buttonBlock.parentElement.querySelector('.product-top__button_list').classList.remove('product-top__button_active');
    });
}

for (let buttonList of buttonLists) {
    buttonList.addEventListener('click', (e) => {
        e.preventDefault();
        let productList = buttonList.parentElement.parentElement.parentElement.parentElement.querySelector('.products').querySelector('.products__list');
        productList.classList.add('products__list_column');
        buttonList.classList.add('product-top__button_active');
        buttonList.parentElement.querySelector('.product-top__button_block').classList.remove('product-top__button_active');
    });
}

})();