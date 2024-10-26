function tocaSom(selectorAudio){

    const  elemento = document.querySelector(selectorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play()
    }else{
        console.error("No elemento or invalid selector");
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const  memes = tecla.classList[1];
    const idAudio = `#som_${memes}`; //Template String

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event){
        //console.log(event.code == 'Space');
        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}



