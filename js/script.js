var jogador ='x';
var jogada = 0;
function chekjogo(id){
	var src = checksrc(id);
	var cpu = document.getElementById('cpu').checked;
	
	if(src == "branco.png"){
		document.getElementById(id).src = "img/" + jogador + ".png";
		jogada++;
			if(checkvitoria()){
				alert("Fim do jogo!!! Vitória do " + jogador);
				location.reload();
				return;
			}
			if(jogada >= 9){
				alert("Fim do jogo!!! Deu empate!! ");
				location.reload();
			}
		
			if(jogador == 'x'){
				jogador= 'o';
			} else {
				jogador = 'x';
				
			}
	}
	if(cpu && jogador == 'o'){
		chekjogo(jogadadocomputador());
	}
	

}

function jogadadocomputador(){
	if(checksrc('cel5') == 'branco.png'){
		return 'cel5';
	}
	return 'cel' + Math.floor((Math.random() * 9) + 1)
}



function checksrc(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length - 10, src.length);

}

function checkvitoria(){
	if((checksrc('cel1') == checksrc('cel2')) && (checksrc('cel1') == checksrc('cel3')) && checksrc('cel1') != 'branco.png'){
		return true;
	}
	if((checksrc('cel4') == checksrc('cel5')) && (checksrc('cel4') == checksrc('cel6')) && checksrc('cel4') != 'branco.png'){
		return true;
	}
	if((checksrc('cel7') == checksrc('cel8')) && (checksrc('cel7') == checksrc('cel9')) && checksrc('cel7') != 'branco.png'){
		return true;
	}
	if((checksrc('cel1') == checksrc('cel4')) && (checksrc('cel1') == checksrc('cel7')) && checksrc('cel1') != 'branco.png'){
		return true;
	}
	if((checksrc('cel2') == checksrc('cel5')) && (checksrc('cel2') == checksrc('cel8')) && checksrc('cel2') != 'branco.png'){
		return true;
	}
	if((checksrc('cel3') == checksrc('cel6')) && (checksrc('cel3') == checksrc('cel9')) && checksrc('cel3') != 'branco.png'){
		return true;
	}
	if((checksrc('cel1') == checksrc('cel5')) && (checksrc('cel1') == checksrc('cel9')) && checksrc('cel1') != 'branco.png'){
		return true;
	}
	if((checksrc('cel3') == checksrc('cel5')) && (checksrc('cel3') == checksrc('cel7')) && checksrc('cel3') != 'branco.png'){
		return true;
	}
	
	
	return false;
}