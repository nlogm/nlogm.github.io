<script type="text/javascript">

<script id="2d-vertex-shader" type="x-shader/x-vertex">
	attribute vec2 a_position;
	 void main() {
	    gl_Position = vec4(a_position, 0, 1);
	 }
	  
	  

<script id="2d-fragment-shader" type="x-shader/x-fragment">
	 void main() {
		gl_FragColor = vec4(gl_FragCoord.x / 640.0, gl_FragCoord.y / 480.0, 0, 1);
	 }
	  
	  
  var gl;
  var canvas;
  var buffer;
  
  

  var shaderScript;
  var shaderSource;
  var vertexShader;
  var fragmentShader;

  
  window.onload = init;
 
  function init() {
 
	canvas = document.getElementById('glscreen');
	gl = canvas.getContext('experimental-webgl');
	canvas.width = 640;
	canvas.height = 480;
	
	buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1.0, -1.0, 
       1.0, -1.0, 
      -1.0,  1.0, 
      -1.0,  1.0, 
       1.0, -1.0, 
       1.0,  1.0]), 
    gl.STATIC_DRAW
  );
 
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
 
 
	
	
	

	  shaderScript = document.getElementById("2d-vertex-shader");
	  shaderSource = shaderScript.text;
	  vertexShader = gl.createShader(gl.VERTEX_SHADER);
	  gl.shaderSource(vertexShader, shaderSource);
	  gl.compileShader(vertexShader);

	  shaderScript   = document.getElementById("2d-fragment-shader");
	  shaderSource   = shaderScript.text;
	  fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	  gl.shaderSource(fragmentShader, shaderSource);
	  gl.compileShader(fragmentShader);

	  program = gl.createProgram();
	  gl.attachShader(program, vertexShader);
	  gl.attachShader(program, fragmentShader);
	  gl.linkProgram(program);	
	  gl.useProgram(program);
 
 
	render();
 
  }
 
  function render() {
 
    window.requestAnimationFrame(render, canvas);
 
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
	
	
	
	

	  positionLocation = gl.getAttribLocation(program, "a_position");
	  gl.enableVertexAttribArray(positionLocation);
	  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

	
	
	gl.drawArrays(gl.TRIANGLES, 0, 6);
 
  }<script type="text/javascript">// <![CDATA[
var gl;
  var canvas;
 
  window.onload = init;
 
  function init() {
 
	canvas        = document.getElementById('glscreen');
	gl            = canvas.getContext('experimental-webgl');
	canvas.width  = 640;
	canvas.height = 480;
 
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
 
	render();
 
  }
 
  function render() {
 
    window.requestAnimationFrame(render, canvas);
 
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
 
  }
