const capitalize = (s) => {
    if (typeof s !== 'string') return null
    return s.charAt(0).toUpperCase() + s.slice(1)
}

document.onkeyup = (e) => {
    // [shift + alt + d]
    if (e.which === 68 && e.altKey && e.shiftKey) {
        let el = document.querySelector('.debug');
        el.classList.toggle("hide");
    }
};