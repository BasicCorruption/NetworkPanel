function getSiteLabel() {
    var label = document.getElementById("sitelabel");
    const queryString = window.location.search;
    console.log(queryString);
    const url = queryString.slice(5);
    console.log(url);
}
function loadSite() {
    var box = document.getElementById("pagebox");
    const queryString = window.location.search;
}