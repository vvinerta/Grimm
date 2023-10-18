class Grimm{
    nombre = String
    urlImagen = String
    tipo = String
    peligrosidad = String
    descripcion = String
    notas = String
}

var arrayTipos=["Seleccione","Lobo", "Canido", "Felino", "Reptil", "Insecto", "Anfibio", "Ave", "Monstruo"];

var arrayPeligrosidad=["Seleccione","Pacifico", "Neutral", "Peligroso", "Violento"];

var listado =[
    {
        nombre : "Alpe",
        urlImagen : "assets/alpe.jpg",
        tipo : "Monstruo",
        peligrosidad : "Peligroso",
        descripcion : "Feo como un dolor de muelas",
        notas : "",
    },
    {
        nombre : "Jesus",
        urlImagen : "assets/anubis.jpg",
        tipo : "Lobo",
        peligrosidad : "Neutral",
        descripcion : "Parece un perro",
        notas : "Le gusta ir oliendo a la gente precaucion",
    },
    {
        nombre : "Jose Luis",
        urlImagen : "assets/bltbad.jpg",
        tipo : "Insecto",
        peligrosidad : "Violento",
        descripcion : "",
        notas : "",
    },
    {
        nombre : "Roberto",
        urlImagen : "assets/balam.jpg",
        tipo : "Anfibio",
        peligrosidad : "Neutral",
        descripcion : "Siempre saluda",
        notas : "",
    },
    {
        nombre : "Francisco",
        urlImagen : "assets/aswang.jpg",
        tipo : "Ave",
        peligrosidad : "Violento",
        descripcion : "Es enano pero y chungo",
        notas : "Se esconde en los nidos de otras especies",
    },
    {
        nombre : "Godofredo",
        urlImagen : "assets/ataktosfuse.jpg",
        tipo : "Felino",
        peligrosidad : "Pacifico",
        descripcion : "Gato salvaje",
        notas : "Le gusta perseguir palomas y subirse a las mesas",
    },
    {
        nombre : "Pascual",
        urlImagen : "assets/coyotl.jpg",
        tipo : "Canido",
        peligrosidad : "Peligroso",
        descripcion : "Se parece a un perro pero no lo es",
        notas : "",
    },
    {
        nombre : "Jacinto",
        urlImagen : "assets/apgadnieks.jpg",
        tipo : "Reptil",
        peligrosidad : "Neutral",
        descripcion : "",
        notas : "",
    },
    {
        nombre : "",
        urlImagen : "assets/alpe.jpg",
        tipo : "",
        peligrosidad : "",
        descripcion : "",
        notas : "",
    },
    {
        nombre : "",
        urlImagen : "assets/alpe.jpg",
        tipo : "",
        peligrosidad : "",
        descripcion : "",
        notas : "",
    }
];

function cargarDatos(posicion){

    var txtNombre = document.getElementById("txtNombre");
    var txtUrlImagen = document.getElementById("txtUrlImagen");
    var comboTipo = document.getElementById("comboTipo");
    var comboPeligrosidad = document.getElementById("comboPeligrosidad");
    var txtDescripcion = document.getElementById("txtDescripcion");
    var txtNotas = document.getElementById("txtNotas");

    txtNombre.value = listado[posicion].nombre;
    txtUrlImagen.value = listado[posicion].urlImagen;
    comboTipo.value = listado[posicion].tipo;
    comboPeligrosidad.value = listado[posicion].peligrosidad;
    txtDescripcion.value = listado[posicion].descripcion;
    txtNotas.value = listado[posicion].descripcion;

}