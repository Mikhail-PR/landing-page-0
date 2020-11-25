const anchors = [...document.querySelectorAll('a[href*="#"]')];

document.addEventListener('click', e => {
    if (anchors.includes(e.target.closest('a'))) {
        e.preventDefault();
        let blockID = e.target.closest('a').getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});