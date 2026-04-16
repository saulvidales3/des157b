(function(){
    'use strict';

    const video = document.querySelector('video');

    const lines = document.querySelectorAll('.poem p');
    // timing arrays: make sure there is one entry per poem line (<p>),
    // so add a fifth timing for the `.line5` element.
    const poemm = {
        start: [1, 4, 9, 12, 15],
        end:   [3, 6, 11, 14, 20]
    };

    // Single checkTime implementation that uses the defined `video` and `poemm` variables.
    function checkTime(){
        for(let i = 0; i < lines.length; i++){
            if(poemm.start[i] < video.currentTime && video.currentTime < poemm.end[i]){
                lines[i].style.display = 'block';
            }
            else{
                lines[i].style.display = 'none';
            }
        }
    }

  
    const intervalID = setInterval(checkTime, 1000);

       const fs= document.querySelector(".fa-expand");

          fs.addEventListener("click", function() {
            const video = document.getElementById("blockbuster");
            if (!document.fullscreenElement){
                document.documentElement.requestFullscreen();
            } else {
                
                    document.exitFullscreen();
                
            }
          });

})();