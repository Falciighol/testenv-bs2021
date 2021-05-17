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

const getCookie = (name) => {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}