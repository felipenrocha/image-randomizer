let images = [

    {
        "path": "assets/images/diamond.png",
        "link": "https://www.youtube.com/watch?v=QHse6q92lb0",
        "height": 1280
    },

    {
        "path": "assets/images/baguette.png",
        "link": "https://www.amazon.com/Simulation-Pillow-Lumbar-Cushion-Stuffed/dp/B07SHP29DM/?tag=readerwp-20&th=1",
        "height": 289
    },
    {
        "path": "assets/images/eiffel-tower.png",
        "link": "https://open.spotify.com/track/6fuO9uk9wbjCHvQJqk2Qpx?si=42f9e2b4f16b4f8a",
        "height": 670
    }]

$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
    let imageDiv = $("#image-catalog");
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        imageDiv.append("<div id=" + (i + 1) + " style='width: 200px;height:200px;'></div>");
        let imageElement = $("#" + (i + 1));
        imageElement.css("background-image", "url(" + image['path'] + ")");
        imageElement.css("background-size", "100%");
        imageElement.click(function (e) {
            window.open(image['link'])
        });
    }


}); 