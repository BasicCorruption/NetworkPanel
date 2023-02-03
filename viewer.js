function getSiteLabel() {
    var label = document.getElementById("sitelabel");
    const queryString = window.location.search;
    console.log(queryString);
    const params = new URLSearchParams(queryString);
    console.log(params);
    const url = params.get("url");
    console.log(url);
}
function loadSite() {
    var box = document.getElementById("pagebox");
    const queryString = window.location.search;
}