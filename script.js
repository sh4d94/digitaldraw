const canvas= document.getElementById('canvas');
const ctx= canvas.getContext('2d');

//texto sin relleno
ctx.letterSpacing="10px"
ctx.font = "bold 25px serif"
ctx.strokeText("Freddie Turbina", 50, 50);

//texto con relleno
ctx.font = "italic 40px serif"
ctx.fillText("Freddie Turbina", 50, 100);

//texto con relleno y sombra


//círculo
ctx.beginPath();
ctx.arc(150, 200, 50, 0, Math.PI * 2, true);
ctx.stroke();