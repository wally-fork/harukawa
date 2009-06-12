// functions para el JS
$(function (){

  // el slider de las imagenes
  $("div.scrollable").scrollable({
    size: 2,
    items: '#thumbs',
    interval:3500,
    loop:true,
    speed: 1000,
    onBeforeSeek: function(){
      this.getItems().fadeTo(300,0.2);
    },
    onSeek: function(){
      this.getItems().fadeTo(300,1);
    },
    hoverClass: 'hover'
  });

  // un tooltip que aparece, pero no sirvio
  $("#trigger").tooltip();

  // expose del menu
    var tabsWrapper = $('#tabsWrapper').expose({
      color:'#333',
      lazy: true
    });
    tabsWrapper.click(function(){
      $(this).expose().load();
    });

  // las tabs
  $("ul.tabs").tabs("div.panes > div", function (i){
    var pane = this.getPanes().eq(i);

    if(pane.is(":empty")){
      pane.load(this.getTabs().eq(i).attr("href"));
    }
    });			//fin del callback de tabs

});	//fin del ready para el DOM