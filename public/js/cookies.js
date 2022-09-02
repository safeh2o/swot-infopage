const GA_MEASUREMENT_ID = 'UA-151594790-1';
const COOKIE_NAME = 'cookie_consent';
const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000;

let currentConsent = userHasConsented();

if (!currentConsent) {
    showCookieBanner();
} else {
    hideCookieBanner();
}

document.getElementById("reject-all-cookies-btn").addEventListener("click", () => {
    rejectCookies();
});
document.getElementById("accept-all-cookies-btn").addEventListener("click", () => {
    acceptCookies();
})

function hideCookieBanner () {
    const cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = 'none';
}

function showCookieBanner () {
    const cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = 'block';
}

function acceptCookies () {
    const d = new Date();
    d.setTime(d.getTime() + TWO_WEEKS);
    let expires = "expires=" + d.toUTCString();
    document.cookie = COOKIE_NAME + "=true;" + expires + ";path=/";
    hideCookieBanner();
}

function rejectCookies () {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    hideCookieBanner();
}

function getCookie () {
    const allCookies = document.cookie.split('; ');
    for (const cookieString of allCookies) {
        const firstEqual = cookieString.indexOf('=');
        if (cookieString.substring(0, firstEqual) === COOKIE_NAME) {
            return cookieString.substring(firstEqual + 1);
        }
    }

    return null;
}

function userHasConsented () {
    const consentCookie = getCookie();
    return consentCookie?.toLowerCase() === 'true';
}
