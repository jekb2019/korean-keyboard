$(function( ) {
  $("#font-size").on('input', function(){
    setFontSize($(this).val());
  });

  $("#copy").on('click', function(){
    copyText($("#text-screen"));

  });
  $("#copy, #clear").on('mouseout', function(){
    showStatus("");
  });
  $("#clear").on('click', function(){
    clearText($("#text-screen"));
  });
  $("#search-google").on('click', function(){
    searchGoogle($("#text-screen").val());
  });
  $("#search-trans").on('click', function(){
    googleTranslateKoEn($("#text-screen").val());
  });
  function searchGoogle(text){
      openInNewTab("https://www.google.com/search?q=" + text);
  }
  function googleTranslateKoEn(text){
      openInNewTab("https://translate.google.com/#view=home&op=translate&sl=ko&tl=en&text=" + text);
  }
  function openInNewTab(url){
    var win = window.open(url, '_blank');
    win.focus();
  }
  function clearText(element){
    $("#text-screen").val("");
    showStatus("Cleared!");
  }
  function copyText(element){
    $("#text-screen").select();
    document.execCommand("copy");
    showStatus("Copied to clipboard!");
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
