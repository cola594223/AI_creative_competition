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