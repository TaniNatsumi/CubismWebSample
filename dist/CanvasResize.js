  // リサイズ処理
function glResize(){
    var glCanvas1 = document.getElementById('SAMPLE');
    var container = document.getElementById('wrap');

    container.style.width = "60%";
    container.style.margin = "0 auto 0 auto";

    // 元の画像サイズを保持
    var orgWidth  = glCanvas1.canvas.width;
    var orgHeight = glCanvas1.canvas.height;
    // 変更する画像サイズを指定
    glCanvas1.canvas.width = container.clientWidth;
    glCanvas1.canvas.height = orgHeight * (glCanvas1.canvas.width / orgWidth);
    // glでの表示サイズもCanvasに合わせる
    gl.viewport(0,0,glCanvas1.canvas.width, glCanvas1.canvas.height);
}
glResize();
