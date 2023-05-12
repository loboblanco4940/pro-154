AFRAME.registerComponent("moneda",{
    init: function (){
      for(var i = 1; i <= 10; i++)  {
        const id = `moneda${i}`;

        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;

        const position = { x: posX, y: posY, z: posZ };
        this.generateMoneda (id, position)
      }
    },

    generateMoneda: function (id, position){
        const monedaModelEntity = document.querySelector("#monedaModels");
        var moneda1 = document.createElement("a-entity");

        moneda1.setAttribute("id", id);
        moneda1.setAttribute("position", position);
        moneda1.setAttribute("material", "color", "#ff9100")
        moneda1.setAttribute("geometry",{primitive:"circle", radius:1})

        moneda1.setAttribute("animation", {
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })
        robot1.setAttribute("animation-mixer", {});
        robotModelEntity.appendChild(moneda1);
    }
})