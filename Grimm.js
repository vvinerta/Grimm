class Wessen {

  id = Number;
  nombre = String;
  urlImagen = String;
  tipo = String;
  peligrosidad = String;
  descripcion = String;
  notas = String;

    constructor(nombre, urlImagen, tipo, peligrosidad, descripcion, notas) {
      this.id = Date.now() * Math.random();
      this.nombre = nombre;
      this.urlImagen = urlImagen;
      this.tipo = tipo;
      this.peligrosidad = peligrosidad;
      this.descripcion = descripcion;
      this.notas = notas;
    }

    get id(){
      return this.id;
    }
  
    get nombre() {
      return this.nombre;
    }
  
    set nombre(value) {
      this.nombre = value;
    }
  
    get urlImagen() {
      return this.urlImagen;
    }
  
    set urlImagen(value) {
      this.urlImagen = value;
    }
  
    get tipo() {
      return this.tipo;
    }
  
    set tipo(value) {
      this.tipo = value;
    }
  
    get peligrosidad() {
      return this.peligrosidad;
    }
  
    set peligrosidad(value) {
      this.peligrosidad = value;
    }
  
    get descripcion() {
      return this.descripcion;
    }
  
    set descripcion(value) {
      this.descripcion = value;
    }
  
    get notas() {
      return this.notas;
    }
  
    set notas(value) {
      this.notas = value;
    }
  }




var arrayTipos = [
  "Seleccione",
  "Lobo",
  "Canido",
  "Felino",
  "Reptil",
  "Insecto",
  "Anfibio",
  "Ave",
  "Monstruo",
];

var arrayPeligrosidad = [
  "Seleccione",
  "Pacifico",
  "Neutral",
  "Peligroso",
  "Violento",
];

let listado = [
  new Wessen( "Alpe","assets/alpe.jpg","Monstruo", "Peligroso", "Feo como un dolor de muelas", ""),
  new Wessen( "Jesus", "assets/anubis.jpg","Lobo","Neutral","Parece un perro","Le gusta ir oliendo a la gente precaucion"),
  new Wessen( "Jose Luis", "assets/bltbad.jpg", "Insecto", "Violento", "", ""),
  new Wessen( "Roberto", "assets/balam.jpg", "Anfibio", "Neutral", "Siempre saluda", ""),
  new Wessen( "Francisco", "assets/aswang.jpg", "Ave", "Violento", "Es enano pero y chungo", "Se esconde en los nidos de otras especies"),
  new Wessen( "Godofredo", "assets/ataktosfuse.jpg", "Felino", "Pacifico", "Gato salvaje", "Le gusta perseguir palomas y subirse a las mesas"),
  new Wessen( "Pascual", "assets/coyotl.jpg", "Canido", "Peligroso", "Se parece a un perro pero no lo es", ""),
  new Wessen( "Jacinto", "assets/apgadnieks.jpg", "Reptil", "Neutral", "", ""),
  new Wessen( "Rigoberto", "assets/barbatusossifrage.jpg", "Monstruo", "Peligroso", "Es alto y tiene garras largas", "Suele esconderse entre arbustos a ras de suelo"),
  new Wessen( "Fermin", "assets/bauerschwein.jpg", "Reptil", "Neutral", "Es escamoso y suele caminar encogido","Es tranquilo pero tiene poca paciencia con los comentarios sobre su aspecto")
];
  
var miWessen;

function cargarDatos(posicion) {
  var txtNombre = document.getElementById("txtNombre");
  var txtUrlImagen = document.getElementById("txtUrlImagen");
  var comboTipo = document.getElementById("comboTipo");
  var comboPeligrosidad = document.getElementById("comboPeligrosidad");
  var txtDescripcion = document.getElementById("txtDescripcion");
  var txtNotas = document.getElementById("txtNotas");

  miWessen = listado[posicion];

  txtNombre.value = listado[posicion].nombre;
  txtUrlImagen.value = listado[posicion].urlImagen;
  comboTipo.value = listado[posicion].tipo;
  comboPeligrosidad.value = listado[posicion].peligrosidad;
  txtDescripcion.value = listado[posicion].descripcion;
  txtNotas.value = listado[posicion].notas;
}


function añadirElemento() {

  if(!document.getElementById("formWessen").checkValidity()){
    return;
  }

  let nombre = document.getElementById("txtNombre").value;
  let urlImagen = document.getElementById("txtUrlImagen").value;
  let tipo = document.getElementById("comboTipo").value;
  let peligrosidad = document.getElementById("comboPeligrosidad").value;
  let descripcion = document.getElementById("txtDescripcion").value;
  let notas = document.getElementById("txtNotas").value;

  let miWessen = new Wessen(nombre,urlImagen,tipo,peligrosidad,descripcion,notas);

  listado.push(miWessen);

  console.log(miWessen);

  const tabla = document.getElementById('tabla');
  const fila = document.createElement('tr');
  fila.id = miWessen.id;
  fila.addEventListener('click', function() {
    cargarDatos(listado.length-1); 
  });
  const nombreCelda = document.createElement('td');
  nombreCelda.textContent = miWessen.nombre;
  const fotoCelda = document.createElement('td');
  const imagen = document.createElement('img');
  imagen.src = miWessen.urlImagen;
  imagen.alt = 'foto de un wesen';
  fotoCelda.appendChild(imagen);
  fila.appendChild(nombreCelda);
  fila.appendChild(fotoCelda);

  tabla.appendChild(fila);

  alert("Wessen añadido al registro");
  

}

function modificarElemento(objeto) {

  if(!document.getElementById("formWessen").checkValidity()){
    return;
  }
  console.log(objeto);

  objeto.nombre = document.getElementById("txtNombre").value;
  objeto.urlImagen = document.getElementById("txtUrlImagen").value;
  objeto.tipo = document.getElementById("comboTipo").value;
  objeto.peligrosidad = document.getElementById("comboPeligrosidad").value;
  objeto.descripcion = document.getElementById("txtDescripcion").value;
  objeto.notas = document.getElementById("txtNotas").value;

  
  let fila = document.getElementById(objeto.id);
  const nombreCelda = fila.cells[0];
  const fotoCelda = fila.cells[1];

  nombreCelda.textContent = objeto.nombre;
  fotoCelda.src = objeto.urlImagen;

  listado.splice(listado.indexOf(objeto), 1,objeto);

  console.log(objeto);

  alert("Wessen modificado");
}

function borrarElemento(objeto) {
  console.log(objeto);
  let fila = document.getElementById(objeto.id);
  fila.remove();
  listado.splice(listado.indexOf(objeto), 1);
  console.log(listado);
  alert("Wessen eliminado del registro");
}
