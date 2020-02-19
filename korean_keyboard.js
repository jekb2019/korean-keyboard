$(function( ) {
  $("#font-size").on('input', function(){
    setFontSize($(this).val());
  });

  $("#copy").on('click', function(){
    copyText($("#text-screen"));

  });
  $("#copy, #clear").on('mouseout', function(){
    showStatus("");
  })

  $("#clear").on('click', function(){
    clearText($("#text-screen"));
  })
  function clearText(element){
    $("#text-screen").val("");
    showStatus("Cleared!");
  }
  function copyText(element){
    $("#text-screen").select();
    document.execCommand("copy");
    showStatus("Copied to clipboard");
  }
  function showStatus(text){
    $("#status-bar").text(text)
  }

  function setFontSize(fontVal){
    var fontSize = 0.3*fontVal+1;
    $("#text-screen").css({
      "font-size": fontSize+"rem"
    });
  }

});
