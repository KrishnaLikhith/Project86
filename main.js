var canvas = new fabric.Canvas('myCanvas');
player_width = 30;
player_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var image_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        image_object = Img;

       image_object.scaleToWidth(block_image_width);
        image_object.scaleToHeight(block_image_height);
        image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(image_object);
    });
}