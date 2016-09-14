function startTest() {
	window.startTime = new Date().getTime();
}

function finishTest() {
	var totalTime = new Date().getTime() - window.startTime;
	parent.postMessage(totalTime, '*');
	var div = document.createElement("div");
	div.style='border:solid 1px blue;background-color:yellow;position:absolute;left:0px;top:0px';
	div.innerHTML = totalTime + 'ms';
	document.body.appendChild(div);
}

function screenQuad(num) {
	var vertexPosBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
	var vertices = [-1, -1, 1, -1, -1, 1, 1, 1];
	for (var i = 1; i < num; ++i) {
		vertices = vertices.concat([-1, -1, 1, -1, -1, 1, 1, 1]);
	}
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	vertexPosBuffer.itemSize = 2;
	vertexPosBuffer.numItems = vertices.length / vertexPosBuffer.itemSize;
	return vertexPosBuffer;
}

function createShader(str, type) {
	var shader = gl.createShader(type);
	gl.shaderSource(shader, str);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		throw gl.getShaderInfoLog(shader);
	}
	return shader;
}

function createProgram(vstr, fstr) {
	var program = gl.createProgram();
	var vshader = createShader(vstr, gl.VERTEX_SHADER);
	var fshader = createShader(fstr, gl.FRAGMENT_SHADER);
	gl.attachShader(program, vshader);
	gl.attachShader(program, fshader);
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		throw gl.getProgramInfoLog(program);
	}
	return program;
}
