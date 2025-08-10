var iconSelected = "other";
var starSelected = 1;

$(".icon-selector").click(function (e) { 
    $(".icon-selector").removeClass("icon-selected");
    $(this).addClass("icon-selected");
    iconSelected= this.id;
});

$(".star-selector").click(function (e) { 
    const clickedId = parseInt(this.id);

    $(".star-selector").removeClass("icon-selected");
    $(this).addClass("icon-selected");
    $(".star-selector").each(function () {
        if (parseInt(this.id) <= clickedId) {
            $(this).addClass("icon-selected");
            $(this).attr("src", "/assets/Five_Pointed_Star_Solid.svg");
        } else {$(this).attr("src", "/assets/star_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg");}
    });
    starSelected= parseInt(this.id);
});

$("#title-text").on("input", function () {
    let remaining = 40 - $(this).val().length;
    $("#title-remaining").text("Remaining text : "+ remaining + "/40");
});

$("#description").on("input", function () {
    let remaining = 360 - $(this).val().length;
    $("#desc-remaining").text("Remaining text : "+ remaining + "/360");
});