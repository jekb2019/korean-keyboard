$(function( ) {

  var shifted = false;

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

  $("button").on('click', function(){
    if(!shifted){
      var id = $(this).attr('id');
      switch(id){
        case "r1k0":
          addText("`");
          break;
        case "r1k1":
          addText("1");
          break;
        case "r1k2":
          addText("2");
          break;
        case "r1k3":
          addText("3");
          break;
        case "r1k4":
          addText("4");
          break;
        case "r1k5":
          addText("5");
          break;
        case "r1k6":
          addText("6");
          break;
        case "r1k7":
          addText("7");
          break;
        case "r1k8":
          addText("8");
          break;
        case "r1k9":
          addText("9");
          break;
        case "r1k10":
          addText("0");
          break;
        case "r1k11":
          addText("-");
          break;
        case "r1k12":
          addText("=");
          break;
        case "r1k5":
          //backspace imination needs to be implemented
          pressBackspace(); //to be implemented function
          break;
        }
      }else{
        console.log("shifted!");

    }
  })

  function pressBackspace(){
    //to be implemented function
  }

  function addText(text){
    $("#text-screen").append(text);
  }

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
