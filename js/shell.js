window.addEventListener('online', function () {
    console.log('online');
    document.head.querySelector('meta[name=theme-color]').setAttribute('content', '#F44336')
    document.body.classList.remove('offline');
});

window.addEventListener('offline', offlineMode);

function offlineMode() {
    console.log('offline');
    document.head.querySelector('meta[name=theme-color]').setAttribute('content', '#5c606d')
    document.body.classList.add('offline');
}

if (!navigator.onLine) {
    offlineMode();
}


/*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
(function( w ){
  if( !w.loadCSS ){
    return;
  }
  var rp = loadCSS.relpreload = {};
  rp.support = function(){
    try {
      return w.document.createElement( "link" ).relList.supports( "preload" );
    } catch (e) {
      return false;
    }
  };
  rp.poly = function(){
    var links = w.document.getElementsByTagName( "link" );
    for( var i = 0; i < links.length; i++ ){
      var link = links[ i ];
      if( link.rel === "preload" && link.getAttribute( "as" ) === "style" ){
        w.loadCSS( link.href, link, link.getAttribute( "media" ) );
        link.rel = null;
      }
    }
  };
  if( !rp.support() ){
    rp.poly();
    var run = w.setInterval( rp.poly, 300 );
    if( w.addEventListener ){
      w.addEventListener( "load", function(){
        rp.poly();
        w.clearInterval( run );
      } );
    }
    if( w.attachEvent ){
      w.attachEvent( "onload", function(){
        w.clearInterval( run );
      } )
    }
  }
}( this ));
