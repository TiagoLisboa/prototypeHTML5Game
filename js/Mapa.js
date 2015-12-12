function Mapa(){
    //[x, y, largura, altura, numero, qtd energia]
    bairros = [
        [100, 100, 50, 50, 0, 1],
        [100, 200, 50, 50, 1, 1],
        [100, 300, 50, 50, 2, 1],
        [200, 100, 50, 50, 3, 1],
        [200, 200, 50, 50, 4, 1],
        [200, 300, 50, 50, 5, 1],
        [300, 100, 50, 50, 6, 1],
        [300, 200, 50, 50, 7, 1],
        [300, 300, 50, 50, 8, 1]
    ];
}

Mapa.prototype = {
    
    desenharMapa: function () {
        ctx.save();
        
        ctx.fillStyle = 'rgb(10,100,255)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "black";
        
        for(var i = 0; i < bairros.length; i++){
            ctx.fillRect(bairros[i][0], bairros[i][1],
                        bairros[i][2], bairros[i][3]);
        };
        
        desenharHud(10, 10, 10);
        
        ctx.restore();
        
//        ctx.save();
//        
//        ctx.fillStyle = 'rgb(10,100,255)';
//        ctx.fillRect(0, 0, canvas.width, canvas.height);
//        
//        ctx.fillStyle = 'black';
//        ctx.fillRect(100, 100, 50, 50);
//        
//        ctx.fillStyle = 'red';
//        ctx.fillRect(100, 200, 50, 50);
//        
//        ctx.fillStyle = 'purple';
//        ctx.fillRect(100, 300, 50, 50);
//        
//        ctx.fillStyle = 'yellow';
//        ctx.fillRect(200, 100, 50, 50);
//        
//        ctx.fillStyle = 'blue';
//        ctx.fillRect(200, 200, 50, 50);
//        
//        ctx.fillStyle = 'orange';
//        ctx.fillRect(200, 300, 50, 50);
//        
//        ctx.fillStyle = 'pink';
//        ctx.fillRect(300, 100, 50, 50);
//        
//        ctx.fillStyle = 'green';
//        ctx.fillRect(300, 200, 50, 50);
//        
//        ctx.fillStyle = 'brown';
//        ctx.fillRect(300, 300, 50, 50);
//        
//        ctx.restore();
    },
    
    verificarMapa: function (x, y) {
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
        var bairro;
        for(var i = 0; i < bairros.length; i++){
            if(x > bairros[i][0] &&
               y > bairros[i][1] &&
               x < bairros[i][2] + bairros[i][0] &&
               y < bairros[i][3] + bairros[i][1]){
                bairro = bairros[i];
                console.log(bairro);
                return bairro;
            };
        };
    }
}