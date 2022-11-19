var url = document.URL;

if (url.split("#").length > 1 && url.split("#")[1] == 'example') {
    showExample();
}

function showExample() {
    hideAll();
    $("#example").show();
}

function backToIndex() {
    hideAll();
    $("#schedule").show();
    $("#news").show();
}

function hideAll() {
    $("#schedule").hide();
    $("#example").hide();
    $("#news").hide();
}
