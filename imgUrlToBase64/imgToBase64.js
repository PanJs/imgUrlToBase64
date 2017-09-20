var getBase64 = function () {
	var canvas = null
	function imgToBase64 (src, callback) {
		var img = new Image()
		img.src = src
		img.onload = function () {
			if (!canvas) {
				canvas = createCanvas()
			}
			setCanvasWh(canvas, this.width, this.height)
			var ctx =  canvas.getContext('2d')
			drawImg(ctx, img, this.width, this.height)
			callback && callback(toDataURL(canvas))
		}
		function createCanvas (w, h) {
			var canvas = document.createElement('canvas')
			document.body.appendChild(canvas)
			return canvas
		}
		function setCanvasWh (canvas, w, h) {
			canvas.width = w
			canvas.height = h
			canvas.style.background = '#000'
			canvas.style.display = 'none'
		}
		function drawImg (ctx, img, w, h) {
			ctx.fillRect(0, 0, w, h)
			ctx.drawImage(img, 0, 0)
		}

		function toDataURL (canvas) {
			return canvas.toDataURL()
		}
	}
	return imgToBase64
}