AFRAME.registerComponent("pez",{
    init: function (){
      for(var i = 1; i <= 10; i++)  {
        const id = `pez${i}`;

        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;

        const position = { x: posX, y: posY, z: posZ };
        this.generatePez (id, position)
      }
    },

    generateRobot: function (id, position){
        const pezModelEntity = document.querySelector("#pezModels");
        pez1 = document.createElement("a-entity");

        pez1.setAttribute("id", id);
        pez1.setAttribute("position", position);
        pez1.setAttribute("rotation", {x:0,y:180, z:0});
        pez1.setAttribute("scale", {x:0.5 ,y:0.5 , z:0.5});
        pez1.setAttribute("gltf-model", "./models/pez/scene.gltf");
        pez1.setAttribute("animation", {
            property: "position",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })
        robot1.setAttribute("animation-mixer", {});
        robotModelEntity.appendChild(pez1);
    }
})