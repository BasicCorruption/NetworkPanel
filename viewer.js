function getSiteLabel() {
    var label = document.getElementById("sitelabel");
    const queryString = window.location.search;
    console.log(queryString);
    const params = new URLSearchParams(queryString);
    console.log(params);
    const url = params.get("url");
    console.log(url);

    var regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
    if (url.match(regex)) {
        console.log("Parameter is URL");
    } else {
        console.log("Parameter is not a URL, returning to home page");
        window.location.href = "index.html";
        return;
    }

    label.innerHTML = `<p>${url}</p>`;
}
function loadSite() {
    var box = document.getElementById("pagebox");
    const queryString = window.location.search;
    console.log(queryString);
    const params = new URLSearchParams(queryString);
    console.log(params);
    const url = params.get("url");
    console.log(url);

    var regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
    if (url.match(regex)) {
        console.log("Parameter is URL");
    } else {
        console.log("Parameter is not a URL, returning to home page");
        window.location.href = "index.html";
        return;
    }

    box.innerHTML = `<iframe src="${url}"></iframe>`;
}