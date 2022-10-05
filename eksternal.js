<script src="http://code.jquery.com/jquery.min.js"></script>
<canvas id="C" width="300px" height="300px" style="border:1px solid;"></canvas>
<script>
$(function(){
var elem = document.getElementById("C");
var rect = {x: 50, y: 50, w: 150, h: 130};

var context = elem.getContext("2d");
context.fillRect(rect.x, rect.y, rect.w, rect.h);

$("#C").click(function(e) {
        console.log("click: " + e.offsetX + "/" + e.offsetY);
          if (rect.x+rect.w >= e.offsetX && rect.x <= e.offsetX && 
           rect.y+rect.h >= e.offsetY && rect.y <= e.offsetY) {
            console.log("collision");
        } else {
            console.log("no collision");
        }
    });
});
</script>
