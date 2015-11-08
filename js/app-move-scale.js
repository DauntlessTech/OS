var appBar = $('.app-title-bar');
var apps = $('.app-move-scale');
var start = $('.icon-display');
var startMenu = $('.start-menu');
var video = $('.icon-feed');
var minus = $('.icon-cross');
var desk = $('.desktop');

function init(){
  start.click(function(){
    startMenu.fadeToggle(200);
  });
  minus.click(function(){
    var papi = minus.parents()[2];
    $(papi).toggle(500);
  });
  video.click(function(){
    apps.toggle(500);
  });
  $(document).tooltip();
  apps.draggable({
    containment: 'parent',
    cursor: 'grabbing',
    handle: appBar
  });
  apps.resizable({
    alsoResize: 'children',
    handles: 'ne, nw',
    containment: 'parent',
    minHeight: 300,
    minWidth: 400
  });

}
function ctrl(key, callback, args) {
  $(document).keydown(function(e) {
      if(!args) args=[]; // IE barks when args is null
      if(e.keyCode == key.charCodeAt(0) && e.ctrlKey) {
          callback.apply(this, args);
          return false;
      }
  });
};

function doNav(obj) {
  var url = obj.value;

  var text = $('.url').val();
  // document.domain = text;
  $('#browserTable').attr('src', 'http://' + text);
}


$(function(){

  init();
  $('.os-frame').css({
    'height': apps.height()
  });
  apps.resize(function(){
    $('.os-frame').css({
      'height': apps.height()
    });
  });
  $(document).keydown(function(e) {
    e.keyCode;
    var key = e.which;
    if(key == 32 && e.ctrlKey){
      startMenu.fadeToggle(200);
      $(".search-bar").focus();
    }
  });
});
