(function() {
    var canvas = document.getElementById('SAMPLE');
    var container = document.getElementById('wrap');
    sizing();
  
    function sizing() {
      canvas.height = container.offsetHeight;
      canvas.width = container.offsetWidth;
    }
  
    window.addEventListener('resize', function() {
      (!window.requestAnimationFrame) ? setTimeout(sizing, 300): window.requestAnimationFrame(sizing);
    });
  })();