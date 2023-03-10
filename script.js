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
let purchase_buttons = document.getElementsByClassName('purchase-button');
let purchase_form = document.getElementsByClassName('purchase-form')[0];
let close_button = document.getElementsByClassName('close-button')[0];
let blur_block = document.getElementsByClassName('blur')[0];
let pay_inputs = document.getElementsByClassName('pay-input');
let numbers = ['1','2','3','4','5','6','7','8','9','0'];

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

for(let i=0; i<purchase_buttons.length; i++) {
    purchase_buttons[i].addEventListener('click', () => {
        purchase_form.style.display = 'flex';
        blur_block.style.display = 'flex';
    });
}

close_button.addEventListener('click', () => {
    purchase_form.style.display = 'none';
    blur_block.style.display = 'none';
});

pay_inputs[1].addEventListener('keydown', (event) => {
    if((pay_inputs[1].value.length == 4 || pay_inputs[1].value.length == 9 || pay_inputs[1].value.length == 14) && event.keyCode != 8 && event.keyCode != 32) {
        pay_inputs[1].value += " ";
    }
    if(numbers.includes(pay_inputs[1].value[pay_inputs[1].value.length-1]) == false && pay_inputs[1].value[pay_inputs[1].value.length-1] != ' ') {
        pay_inputs[1].value = pay_inputs[1].value.slice(0, -1);
    }
});

pay_inputs[1].addEventListener('keyup', () => {
    if(numbers.includes(pay_inputs[1].value[pay_inputs[1].value.length-1]) == false && pay_inputs[1].value[pay_inputs[1].value.length-1] != ' ') {
        pay_inputs[1].value = pay_inputs[1].value.slice(0, -1);
    }
});

pay_inputs[2].addEventListener('keydown', (event) => {
    if(pay_inputs[2].value.length == 2 && event.keyCode != 8 && event.keyCode != 191) {
        pay_inputs[2].value += "/";
    }
    if(numbers.includes(pay_inputs[2].value[pay_inputs[2].value.length-1]) == false && pay_inputs[2].value[pay_inputs[2].value.length-1] != '/') {
        pay_inputs[2].value = pay_inputs[2].value.slice(0, -1);
    }
});

pay_inputs[2].addEventListener('keyup', () => {
    if(numbers.includes(pay_inputs[2].value[pay_inputs[2].value.length-1]) == false && pay_inputs[2].value[pay_inputs[2].value.length-1] != '/') {
        pay_inputs[2].value = pay_inputs[2].value.slice(0, -1);
    }
});

pay_inputs[3].addEventListener('keyup', () => {
    if(numbers.includes(pay_inputs[3].value[pay_inputs[3].value.length-1]) == false) {
        pay_inputs[3].value = pay_inputs[3].value.slice(0, -1);
    }
});

function submitForm() {
    const btn = document.getElementsByClassName('btn')[0];
    var doneTimeout = null, resetTimeout = null;

	const runClass = "btn--running";
	const doneClass = "btn--done";
	// `.btn--running .btn__progress-fill` `stroke-dashoffset` duration in ms
	const submitDuration = 2000;
	const resetDuration = 1500;

	// fake the submission
	btn.disabled = true;
	btn.classList.add(runClass);

	clearTimeout(doneTimeout);
	clearTimeout(resetTimeout);

	doneTimeout = setTimeout(() => {
		btn.classList.remove(runClass);
		btn.classList.add(doneClass);
				
		// reset the button
		resetTimeout = setTimeout(() => {
			btn.disabled = false;
			btn.classList.remove(doneClass);
		}, resetDuration);
        setTimeout(() => {
            purchase_form.style.display = 'none';
            blur_block.style.display = 'none';
            purchase_form.reset();
        }, 1000);
	}, 600 + submitDuration);
}

purchase_form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm();
});