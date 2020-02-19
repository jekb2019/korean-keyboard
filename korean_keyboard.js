$(function( ) {
  $("#font-size").on('input', function(){
    setFontSize($(this).val());
  });

  $("#copy").on('click', function(){
    copyText($("#text-screen"));
  })

  function copyText(element){
    $("#text-screen")
  }

  function setFontSize(fontVal){
    var fontSize = 0.5*fontVal+0.1;
    $("#text-screen").css({
      "font-size": fontSize+"rem"
    });
  }

});
