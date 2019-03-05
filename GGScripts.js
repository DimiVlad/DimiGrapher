// general grapher and button functions
// David's Soft Dev Clas 2019

function wtf() {
  f=$("#function").val();
  console.log(f);
  Ggraph();
}

function Ggraph () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    nx =  (w/2-(i+1))/k;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Red";
    ctx.moveTo(scaledX(x),scaledY(plugX2(x)));
    ctx.lineTo(scaledX(nx),scaledY(plugX2(nx)));
    ctx.stroke();
  }
  $("#yInt").text("Y intercept is at (0," + plugX2(0)+")");
  ctx.beginPath();
  ctx.arc(scaledX(0),scaledY(plugX2(0)),5,0,6.28);
  ctx.fill();
} // end of Ggraph()

function zoomIn() {
  ctx.clearRect(0,0,w,h);
  if (k<150) {
 k=k+3;
 graphpaper();
 Ggraph();
 results();
  }
}

function resetCanvas() {
  ctx.clearRect(0,0,w,h);
  graphpaper();
}
function zoomOut() {
  ctx.clearRect(0,0,w,h);
  if (k>4) {
 k=k-3;
 graphpaper();
 Ggraph();
 results();  }
}

function scaledX(x) {
 newx = w/2+x*k;
 return newx;
}
function scaledY(y) {
 newy = h/2-y*k;
 return newy;
}

function plugX2(x) {
 y = eval(f);
 return y;
}