(function() {
    "use strict";
    console.log('reading JS');

     AFRAME.registerComponent('gradient-sky', {
      init: function () {
        const canvas = document.getElementById('gradient-canvas');

        // Start Granim
        new Granim({
          element: '#gradient-canvas',
          direction: 'top-bottom',
          isPausedWhenNotInView: false,
          states: {
            'default-state': {
              gradients: [
                ['#0f0c29', '#302b63'],
                ['#1a1a2e', '#16213e'],
                ['#ff6b35', '#1a1a2e'],
                ['#2d1b69', '#11998e'],
              ],
              transitionSpeed: 4000
            }
          }
        });

        // Create texture from Granim canvas
        this.texture = new THREE.CanvasTexture(canvas);
        const mesh = this.el.getObject3D('mesh');
        mesh.material.map = this.texture;
        mesh.material.needsUpdate = true;
      },

      // tick() runs every frame — just flag the texture as dirty
      tick: function () {
        if (this.texture) {
          this.texture.needsUpdate = true;
        }
      }
    });
    



})();