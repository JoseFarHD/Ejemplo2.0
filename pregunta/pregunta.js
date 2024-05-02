const pregunta ={
    template : ` <div class="row">
    <div class="col-6">
        <div class="card margenes">
            <div class="card-header">
                Pregunta : Colores de la badera de Colombia ?
                
            </div>
            <div class="card-body">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Amariillo, Azul.
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Rosadito, Verde, Turqueza.
                    </label>
                  </div>
                </div>
          
          </div>

    </div>
</div>`,
}

var app = new Vue({
  el : 'main',
  data :{
    preguntas : [
        {
          pregunta : "De que color es la casa de pepe?",
          opciones : [
               {opcion : 'blanca'},
               {opcion : 'azul'},
               {opcion : 'verde'},
               {opcion : 'cafe'},
          ]  
          
        }
    ]

  
    
  },
  components :{
    pregunta : pregunta
  }

})