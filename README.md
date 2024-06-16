// delete the following line if no text is used
// edit the line if you wanna use other fonts
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);

*{
	box-sizing: border-box;
	margin:0;
	padding:0;
}
// use only the available space inside the 400x400 frame
.frame {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 2px;
	box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.1);
	overflow: hidden;
	background: #222;
	color: #333;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	&:hover {
		.square {
			animation-play-state: paused;	
		}
	}
}

.square{
	position:absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	border:1px solid #888;
	background: #222;
	@for $i from 0 through 20 {
		&.square-#{$i} {
			animation: rotate 2s ease-in-out ($i / 30) + s alternate infinite;
		}
	}
}


@keyframes rotate {
	from {
		transform:translate(-50%,-50%) rotate(0deg);
	}
	to {
		transform:translate(-50%,-50%) rotate(360deg);
	}
}