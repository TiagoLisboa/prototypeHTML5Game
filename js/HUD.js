function HUD () {
    voltar = [canvas.width-150, canvas.height-90,
             100, 40];
    placar = [
        canvas.width-150,
        canvas.height-300,
        120, 100, 
        0, 0, 0
    ];
    valoresBairros = [0, 0, 0,
                      0, 0, 0,
                      0, 0, 0]
    painel = [];
};

HUD.prototype = {
    desenharVoltar: function () {
        ctx.save();
        
        ctx.fillStyle = "green";
        ctx.fillRect(voltar[0], voltar[1], voltar[2], voltar[3]);
        
        ctx.fillStyle = "black";
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("voltar", voltar[0]+10,
                     voltar[1]+voltar[3]-10);
        
        ctx.restore();
    },
    
    desenharPlacar: function (v1, v2, v3) {
        ctx.save();
        
        ctx.fillStyle = "green";
        ctx.fillRect(placar[0], placar[1], placar[2], placar[3]);
        
        ctx.fillStyle="black";
        ctx.font = "20px Comic Sans MS";
        ctx.fillText("P.E.:", placar[0]+10, placar[1]+placar[3]-70);
        ctx.fillText(placar[4], placar[0]+70, placar[1]+placar[3]-70);
        
        ctx.fillText("E.A.:", placar[0]+6, placar[1]+placar[3]-40);
        ctx.fillText(placar[5], placar[0]+70, placar[1]+placar[3]-40);
        
        ctx.fillText("E.C.:", placar[0]+6, placar[1]+placar[3]-10);
        ctx.fillText(placar[6], placar[0]+70, placar[1]+placar[3]-10);
        
        ctx.restore();
    },
    
    desenharValorBairros: function () {
        for(var i = 0; i < bairros.length; i++){
            ctx.save();
            
            ctx.fillStyle = "white";
            ctx.font = "30px Comic Sans MS";
            ctx.fillText(bairros[i][5], 
                         bairros[i][0]+15, 
                         bairros[i][1]+35);
            
            ctx.restore();
        }
    },
    
    desenharPainel: function (bairro) {
        var painelX = bairro[0]-bairro[2]/2;
        var painelY = bairro[1]+bairro[3]+10;
        var painelW = 100;
        var painelH = 20;
        var painelN = bairro[4];
        painel = [painelX, painelY, painelW, painelH, painelN];
        ctx.save();
        
        ctx.fillStyle = "grey";
        ctx.fillRect(painelX, painelY, painelW, painelH);
      
        ctx.fillStyle = "yellow";
        ctx.font = "30px Comic Sans MS";
        ctx.fillText ("+  /  -", painelX+10, painelY+painelH);
        
        ctx.restore();
        
        painelCtr = true;
    },
    
    verificarHUD: function (x, y){
        if(x > voltar[0]+canvas.offsetLeft && 
            y > voltar[1]+canvas.offsetTop &&
            x < (voltar[0]+voltar[2]+canvas.offsetLeft) &&
            y < (voltar[3]+voltar[1]+canvas.offsetTop)){
            
            menuInicial("green");
            
            tela = 1;
        }else if(painelCtr == true &&
            x > painel[0]+canvas.offsetLeft && 
            y > painel[1]+canvas.offsetTop &&
            x < (painel[0]+painel[2]+canvas.offsetLeft) &&
            y < (painel[3]+painel[1]+canvas.offsetTop)){
            
            if(x < (painel[0]+painel[2]/2+canvas.offsetLeft)){
                
                if(bairros[painel[4]][5] < 5){
                    bairros[painel[4]][5] += 1;
                    console.log(bairros[painel[4]][5]);
                    atualizarValores();
                    atualizarPlacar();
                }
                
            }else if(x > (painel[0]+painel[2]/2+canvas.offsetLeft)){
                
                if(bairros[painel[4]][5] > 0){
                    bairros[painel[4]][5] -= 1;
                    console.log(bairros[painel[4]][5]);
                    atualizarValores();
                    atualizarPlacar();
                }
                
            }
            
        }else{
            painelCtr = false;
            mapa.desenharMapa();
        }
    }
}