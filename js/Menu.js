function Menu(){
//    e = canvas.offsetLeft; //ajuste esquerda
//    c = canvas.offsetTop; //ajuste cima
    x = canvas.width*0.41 + canvas.offsetLeft;
    y = canvas.height*0.3 + canvas.offsetTop;
    
    botoes = [[x, y, 100, 50], [x, y+70,100, 50]];
}

Menu.prototype = {
    
    desenharFundo: function (ctx) {
        ctx.save();
        
        ctx.fillStyle = "rgb(10,100,255)";
        ctx.fillRect(0,0,canvas.width, canvas.height);
        
        ctx.restore();
    },
    
    desenharContraste: function (ctx){
        ctx.save();
        
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        var x = canvas.width*0.315;
        var y = canvas.height*0.17;
        ctx.fillRect(x, y, 230, 230);
        
        ctx.restore();
    },
    
    desenharItensMenu: function (ctx, cor){
        var w = canvas.width*0.43;
        var h = canvas.height*0.39;
        
        ctx.save();
        
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = cor;
        ctx.fillText("Jogar", w, h);
        ctx.fillText("Sair", w, h+70);
        
        ctx.restore();
    },
    
    desenharB1: function (ctx, cor){
        var w = canvas.width*0.43;
        var h = canvas.height*0.39;
        
        ctx.save();
        
        ctx.fillStyle = "white";
        
        ctx.fillRect(botoes[0][0]-canvas.offsetLeft, 
                    botoes[0][1]-canvas.offsetTop,
                    botoes[0][2],
                    botoes[0][3]);
        
        ctx.fillStyle = "rgb(10,100,255)";
        
        ctx.fillRect(botoes[0][0]-canvas.offsetLeft, 
                    botoes[0][1]-canvas.offsetTop,
                    botoes[0][2],
                    botoes[0][3]);
        
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        
        ctx.fillRect(botoes[0][0]-canvas.offsetLeft+0.1, 
                    botoes[0][1]-canvas.offsetTop,
                    botoes[0][2]-0.1,
                    botoes[0][3]);
        
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = cor;
        ctx.fillText("Jogar", w, h);
        
        ctx.restore();
        
    },
    
    desenharB2: function (ctx, cor){
        var w = canvas.width*0.43;
        var h = canvas.height*0.39;
        
        ctx.save();
        
        ctx.fillStyle = "white";
        
        ctx.fillRect(botoes[1][0]-canvas.offsetLeft, 
                    botoes[1][1]-canvas.offsetTop,
                    botoes[1][2],
                    botoes[1][3]);
        
        ctx.fillStyle = "rgb(10,100,255)";
        
        ctx.fillRect(botoes[1][0]-canvas.offsetLeft, 
                    botoes[1][1]-canvas.offsetTop,
                    botoes[1][2],
                    botoes[1][3]);
        
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        
        ctx.fillRect(botoes[1][0]-canvas.offsetLeft+0.1, 
                    botoes[1][1]-canvas.offsetTop,
                    botoes[1][2]-0.1,
                    botoes[1][3]);
        
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = cor;
        ctx.fillText("Sair", w, h+70);
        
        ctx.restore();
        
    },
    
    verificarBotao: function (x, y) {
        if (x > botoes[0][0] && y > botoes[0][1] &&
            x < (botoes[0][0] + botoes[0][2]) &&
            y < (botoes[0][3]+botoes[0][1])){
            return 0;
        }else if(x > botoes[1][0] && y > botoes[1][1] &&
                x < (botoes[1][0]+botoes[1][2]) &&
                y < (botoes[1][3]+botoes[1][1])){
            return 1;
        }else{
            return -1;
        };
            
        
    },
}