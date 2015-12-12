function Controller () {
    
}

Controller.prototype = {
    valoresPlacar: function (){
        placar[4] = 12;
        placar[5] = placar[5] + placar[4] - placar[6];
        var cont = 0;
        
        for(var i = 0; i < bairros.length; i++){
            cont += bairros[i][5];
        }
        
        placar[6] = cont;
        
        hud.desenharPlacar(placar[4], placar[5], placar[6]);
    }
}