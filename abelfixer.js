let existAbel = document.body.innerHTML.search('Abel Pintos');
let isYoutube = window.location.href.search("youtube.com");

// Check if exist in page.
if (existAbel > 0) {
    let toReplace = {
        Abel: 'Raúl',
        Federico: 'A.',
        Pintos: 'Juárez',
    };

    if (isYoutube > 0) {
        let els = document.querySelectorAll(".title, #video-title, #content-text, #description")
        for (let i = 0; i < els.length; i++) {
            els[i].innerHTML = replaceName(toReplace, els[i].innerHTML);
        }
    } else {
        document.title = replaceName(toReplace, document.title);
        document.body.innerHTML = replaceName(toReplace, document.body.innerHTML);
    }
}

function replaceName(toReplace, innerHTML) {

    for(oldValue in toReplace){
        newValue = toReplace[oldValue];
        // Replace the current value by the new one
        regex = new RegExp(oldValue, "g");
        innerHTML = innerHTML.replace(regex, newValue);
        // Replace the upper case value
        regex = new RegExp(oldValue.toUpperCase(), "g");
        innerHTML = innerHTML.replace(regex, newValue.toUpperCase());
    }

    return innerHTML;
}