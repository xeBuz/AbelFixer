let existAbel = document.body.innerHTML.search('Abel Pintos');
let isYoutube = window.location.href.search("youtube.com");

// Check if exist in page.
if (existAbel > 0) {
    let name = 'Raúl';
    let lastName = 'Juárez';

    if (isYoutube > 0) {
        let els = document.querySelectorAll(".title, #video-title, #content-text, #description")
        for (let i = 0; i < els.length; i++) {
            els[i].innerHTML = replaceName(name, lastName, els[i].innerHTML);
        }
    } else {
        document.title = replaceName(name, lastName, document.title);
        document.body.innerHTML = replaceName(name, lastName, document.body.innerHTML);
    }
}

function replaceName(name, lastName, innerHTML) {
    innerHTML =innerHTML.replace(/Abel Pintos/g, name + ' ' + lastName);

    // Replace Name
    innerHTML = innerHTML.replace(/Abel/g, name);
    innerHTML = innerHTML.replace(/ABEL/g, name.toUpperCase());

    // Replace LastName
    innerHTML = innerHTML.replace(/Pintos/g, lastName);
    innerHTML = innerHTML.replace(/PINTOS/g, lastName.toUpperCase());

    return innerHTML;
}