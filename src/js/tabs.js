let tabsLinks = document.querySelectorAll('.tabs__link');

for (let tabsLink of tabsLinks) {
    tabsLink.addEventListener('click', (e) => {
        e.preventDefault();
        let hrefElement = document.querySelector(tabsLink.getAttribute('href'));
        for (let tabsPanel of hrefElement.parentNode.children) {   
            tabsPanel.classList.remove('tabs__panel_active');
            setTimeout(() => {
                tabsPanel.classList.remove('in');
            }, 150);
        }
        hrefElement.classList.add('tabs__panel_active');
        setTimeout(() => {
            hrefElement.classList.add('in');
        }, 150);
        for (let tabsItem of tabsLink.parentNode.parentNode.children) {
            tabsItem.classList.remove('tabs__item_active');
            if (tabsItem.classList.contains('tabs__item_option')) {
                tabsItem.classList.remove('tabs__item_option_active');
            }
            if (tabsItem.classList.contains('tabs__item_delivery')) {
                tabsItem.classList.remove('tabs__item_delivery_active');
            }
            if (tabsItem.classList.contains('params__display-item')) {
                tabsItem.classList.remove('params__display-item_active');
            }
        }
        tabsLink.parentNode.classList.add('tabs__item_active');
        if (tabsLink.parentNode.classList.contains('tabs__item_option')) {
            tabsLink.parentNode.classList.add('tabs__item_option_active');
        }
        if (tabsLink.parentNode.classList.contains('tabs__item_delivery')) {
            tabsLink.parentNode.classList.add('tabs__item_delivery_active');
        }
        if (tabsLink.parentNode.classList.contains('params__display-item')) {
            tabsLink.parentNode.classList.add('params__display-item_active');
        }
    })
}