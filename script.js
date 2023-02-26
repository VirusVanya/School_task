let nav_buttons = document.getElementsByClassName('navigation-button');
let mobile_nav_buttons = document.getElementsByClassName('mobile-navigation-button');
let element1 = document.getElementsByClassName('features')[0];
let element2 = document.getElementsByClassName('advantages')[0];
let element3 = document.getElementsByClassName('pricing')[0];
let element4 = document.getElementsByClassName('instructions')[0];
let menu_list_button = document.getElementsByClassName('list-button')[0];
let list_arrow = document.getElementsByClassName('list-arrow')[0];
let buttons_list = document.getElementsByClassName('buttons-list')[0];
let main = document.getElementsByClassName('main')[0];
let footer = document.getElementsByClassName('footer')[0];

for (let i = 0; i < nav_buttons.length; i++) {
    nav_buttons[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                element1.scrollIntoView({
                    behavior: 'smooth'
                })
                break;
            case 1:
                element2.scrollIntoView({
                    behavior: 'smooth'
                })
                break;
            case 2:
                element3.scrollIntoView({
                    behavior: 'smooth'
                })
                break;
            case 3:
                element4.scrollIntoView({
                    behavior: 'smooth'
                })
                break;
            default:
                break;
        }
    });
    mobile_nav_buttons[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                element1.scrollIntoView({
                    behavior: 'smooth'
                })
                break;
            case 1:
                element2.scrollIntoView({
                    behavior: 'smooth'
                })
                break;
            case 2:
                element3.scrollIntoView({
                    behavior: 'smooth'
                })
                break;
            case 3:
                element4.scrollIntoView({
                    behavior: 'smooth'
                })
                break;
            default:
                break;
        }
    });
}

menu_list_button.addEventListener('click', () => {
    if(buttons_list.style.display == 'none') {
        list_arrow.style.transform = 'rotate(180deg)';
        buttons_list.style.display = 'block';
    } else {
        list_arrow.style.transform = '';
        buttons_list.style.display = 'none';
    }
});

main.addEventListener('click', () => {
    list_arrow.style.transform = '';
    buttons_list.style.display = 'none';
});

footer.addEventListener('click', () => {
    list_arrow.style.transform = '';
    buttons_list.style.display = 'none';
});