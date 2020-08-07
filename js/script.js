window.onload = function() {
    // códigos JavaScript a serem executados quando a página carregar
    var topValor,topValor2;
    var left,left2;
    var right,right2;
    var bottom,bottom2;
    var i=0;
    if(i==0){
        topValor=50;
        topValor2=50;
        left=50;
        left2=50;
        right=50;
        right2=50;
        bottom=50;
        bottom2=50;
        i++;
    }
    $("#slider_top").on("input", function() {
        topValor = this.value;
        topValor2 = 100-topValor;
        $('#copiar').val(topValor+'% '+topValor2+'% '+bottom+'% '+bottom2+'% / '+left+'% '+right+'% '+right2+'% '+left2+'%');
        $(".gerado").css("border-radius", $('#copiar').val());
    });
    $("#slider_left").on("input", function() {
        left = this.value;
        left2 = 100-left;
        $('#copiar').val(topValor+'% '+topValor2+'% '+bottom+'% '+bottom2+'% / '+left+'% '+right+'% '+right2+'% '+left2+'%');
        $(".gerado").css("border-radius", $('#copiar').val());
    });
    $("#slider_right").on("input", function() {
        right = this.value;
        right2 = 100-right;
        $('#copiar').val(topValor+'% '+topValor2+'% '+bottom+'% '+bottom2+'% / '+left+'% '+right+'% '+right2+'% '+left2+'%');
        $(".gerado").css("border-radius", $('#copiar').val());

    });
    $("#slider_bottom").on("input", function() {
        bottom = this.value;
        bottom2 = 100-bottom;
        $('#copiar').val(topValor+'% '+topValor2+'% '+bottom+'% '+bottom2+'% / '+left+'% '+right+'% '+right2+'% '+left2+'%');
        $(".gerado").css("border-radius", $('#copiar').val());
    });
}

function copiar() {
    /* Get the text field */
    var copyText = document.getElementById("copiar");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  }