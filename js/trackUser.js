function logUserActivity() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"; 
    // checkout to understand proxyurl  https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
    $.get(proxyUrl+ "https://stormy-bastion-53133.herokuapp.com/logUserActivity/" + getCookie(), function (data, status) {
        console.log(data);
        setCookie(data, 30);// cookies are valid for 30 days
    });
}

function getCookie() {
    var v = document.cookie.match('(^|;) ?' + "userId" + '=([^;]*)(;|$)');
    return v ? v[2] : 0;
}

function setCookie(value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = "userId" + "=" + value + ";path=/;expires=" + d.toGMTString();
    // for google analytics user
    gtag('set', {'user_id': value}); // Set the user ID using signed-in user_id.
}

// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {

//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);

//   } else if (typeof XDomainRequest != "undefined") {

//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);

//   } else {

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;

//   }
//   return xhr;
// }