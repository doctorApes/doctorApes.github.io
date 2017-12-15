$(document).ready(function (){
    var currentImage = 0;
    console.log("ready");

    $("#contact").on("click", function(){
        console.log("clicked");
        if(currentImage === 0){
            currentImage = 3;            
        }else{
            currentImage -= 1;
        }
        changeImage(currentImage);
    });
    $("#right").on("click", function(){
        if(currentImage === 3){
            currentImage = 0;            
        }else{
            currentImage += 1;
        }
        changeImage(currentImage);
    });

    function changeImage(current){
        switch(current){
            case 0: turnOffAll();
            $("#calculator").css("display", "block"); 
            $("#folio").css("background-color", "rgb(20, 206, 209)");
            
            break;
            case 1: turnOffAll();
            $("#pomodoro").css("display", "block");
            $("#folio").css("background-color", "rgb(180, 57, 57)"); 
            break;
            case 2:turnOffAll();
            $("#simon").css("display", "block");
            $("#folio").css("background-color", "rgb(255, 199, 121)");
            break;
            case 3:turnOffAll();
            $("#tictactoe").css("display", "block");
            $("#t-overlay").css("display", "block");
            
            $("#folio").css("background-color", "rgb(133, 212, 133)");
            break;
            
            
        }
    }

    function turnOffAll(){
        $("#pomodoro").css("display", "none");
        $("#calculator").css("display", "none");
        $("#simon").css("display", "none");
        $("#tictactoe").css("display", "none");
        $("#t-overlay").css("display", "none");
        $("#t-overlay2").css("display", "none");
    }

    
        
    /*$(window).resize(function() {    
        var folioHeight = $('.folio').height();
        var calcHeight = $('.calculator').height();
        var pomHeight = $('.pomodoro').height();
        var ticHeight = $('.tictactoe').height();
        var simonHeight = $('.simon').height();        
        switch(currentImage){
            case 0: $("#folio").css({"padding-top":(folioHeight-calcHeight*0.7)/6+"px"});
            console.log((folioHeight-calcHeight*0.7)/4);
            break;
            case 1: $("#folio").css({"padding-top":(folioHeight-pomHeight)/2+"px"});
            break;
            case 2: $("#folio").css({"padding-top":(folioHeight-simonHeight)/2+"px"});
            break;
            case 3: $("#folio").css({"padding-top":(folioHeight-ticHeight)/2+"px"});
            break;
        }      
    });*/
    
});