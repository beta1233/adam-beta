 
	
		 var snd = new Audio("hymn.mp4");
        snd.loop = true;
        snd.autoplay = false;

        document.getElementById("bstop").onclick = function () { snd.pause(); };

        document.getElementById("bplay").onclick = function () { snd.play(); };
		