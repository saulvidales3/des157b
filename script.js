(function() {
    'use strict';
    console.log ('reading JS');

    const label = document.querySelector('label');
    const checkbox = document.querySelector('.sled input[type="checkbox"]');
    const block1 = document.querySelector('.block1 ul');
    const block2 = document.querySelector('.block2 ul');
    const block3 = document.querySelector('.block3 ul');
    const block4 = document.querySelector('.block4 ul');
    // add near the top
    const block2H2 = document.querySelector('.block2 h2.links2');
    const block1H2 = document.querySelector('.block1 h2.links1');
    const block3H2 = document.querySelector('.block3 h2.links3');
    const block4H2 = document.querySelector('.block4 h2.links4');



   

    const body = document.querySelector('body');
    const sections = document.querySelectorAll('section')
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const h2 = document.querySelector('h2');
    const h1 = document.querySelector('h1');
    const navli = document.querySelector('nav ul li a');
    let mode = 'dark';

    // helper to apply or remove the "switch" state
    function applySwitch(on) {
        if (on) {
            if (body) body.classList.add('switch');
            if (block1) block1.classList.add('switch');
            if (block2) block2.classList.add('switch');
            if (block3) block3.classList.add('switch');
            if (block4) block4.classList.add('switch');
            if (block2H2) block2H2.classList.add('switch');
            if (block1H2) block1H2.classList.add('switch');
            if (block3H2) block3H2.classList.add('switch');
            if (block4H2) block4H2.classList.add('switch');
            if (main) main.classList.add('switch');
            if (header) header.classList.add('switch');
            if (header) header.innerHTML = "<img src='images/saulon.svg' height='400' width='700'>";
            if (h2) h2.classList.add('switch');
            if (h1) h1.classList.add('switch');
            for (const section of sections) { if (section) section.classList.add('switch'); }
        } else {
            if (body) body.classList.remove('switch');
            if (block1) block1.classList.remove('switch');
            if (block2) block2.classList.remove('switch');
            if (block3) block3.classList.remove('switch');
            if (block4) block4.classList.remove('switch');
            if (block2H2) block2H2.classList.remove('switch');
            if (block1H2) block1H2.classList.remove('switch');
            if (block3H2) block3H2.classList.remove('switch');
            if (block4H2) block4H2.classList.remove('switch');
            if (main) main.classList.remove('switch');
            if (header) header.classList.remove('switch');
            if (header) header.innerHTML = "<img src='images/sauloff.svg' height='300' width='500'>";
            if (h2) h2.classList.remove('switch');
            if (h1) h1.classList.remove('switch');
            for (const section of sections) { if (section) section.classList.remove('switch'); }
        }
    }

    // Prefer checkbox change (your slider), fallback to label click if checkbox missing
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            const on = checkbox.checked;
            applySwitch(on);
            mode = on ? 'light' : 'dark';
        });
    } else if (label) {
        label.addEventListener('click', function() {
            const on = mode === 'dark';
            applySwitch(on);
            mode = on ? 'light' : 'dark';
        });
    }
})()




     