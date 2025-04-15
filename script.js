const canvas= document.getElementById('canvas');
const ctx= canvas.getContext('2d');

//texto sin relleno
ctx.letterSpacing="10px"
ctx.font = "bold 25px serif"
ctx.strokeText("Reportero ecologista", 50, 50);

//texto con relleno
ctx.font = "italic 40px serif"
ctx.fillText("Juan Carlos Bodoque", 50, 100);

//círculo
//ctx.beginPath();
//ctx.arc(215, 290, 50, 0, Math.PI * 2, true);
//ctx.fillStyle = "red";
//ctx.stroke();

//Juan Carlos Bodoque
    //Cabeza
    ctx.fillStyle = "red";
    ctx.fillRect(215, 230, 100, 100);
    ctx.fillStyle = "red";
    ctx.fillRect(220, 150, 19, 100);
    ctx.fillStyle = "red";
    ctx.fillRect(290, 150, 19, 100);
    ctx.fillStyle = "white";
    ctx.fillRect(230, 250, 20, 30);
    ctx.fillStyle = "white";
    ctx.fillRect(280, 250, 20, 30);
    ctx.fillStyle = "black";
    ctx.fillRect(230, 260, 10, 20);
    ctx.fillStyle = "black";
    ctx.fillRect(280, 260, 10, 20);
    ctx.fillStyle = "orange";
    ctx.fillRect(260, 290, 10, 10);
    //Cuerpo
    ctx.fillStyle = "black";
    ctx.fillRect(230, 330, 70, 100);
    ctx.fillStyle = "white";
    ctx.fillRect(230, 330, 70, 80);
    ctx.fillStyle = "black";
    ctx.fillRect(230, 330, 70, 60);
    ctx.fillStyle = "white";
    ctx.fillRect(230, 330, 70, 40);
    ctx.fillStyle = "black";
    ctx.fillRect(230, 330, 70, 20);