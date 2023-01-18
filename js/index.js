//VARIABLES

const habitacion = [mesasDeLuz, espejosH, espinesH];
const cocina = [especieros];
const living = [bancos, mesasRatonas, mesasDeArrime, dressoire, espejosL]
const banio = [espinesB]

const mesasDeLuz = [];
const espejosH = [];
const espinesH = [];
const especieros = [];
const bancos = [];
const mesasRatonas = [];
const mesasDeArrime = [];
const dressoire = [];
const espejosL = [];
const espinesB = [];

class Mueble {
    constructor(id, nombre, material, medida, terminacion, precio, url, numero){
        this.id = id;
        this.nombre = nombre;
        this.material = material;
        this.medida = medida;
        this.terminacion = terminacion;
        this.precio = precio;
        this.url = url;
    }
}  

//FUNCIONES

function crearProducto(arr, producto){
    arr.push(producto);
}


//AGREGAR LOS PRODUCTOS

//HABITACION


crearProducto(mesasDeLuz, new Mueble(1, "MESA CON ESTANTE", "Álamo.","65 cm. x 40 cm. x 35 cm.","Teñido en color petiribí más lustre semimate.", 32430, "", 1 ));
crearProducto(mesasDeLuz, new Mueble(2, "MESA CON REJILLAS", "Álamo.","65 cm. x 44 cm. x 33 cm.","Teñido en color petiribí más lustre semimate.", 29823, "", 2 ));


crearProducto(espejosH, new Mueble(3, "ESPEJO BOLD", "Hierro y Espejo 4 mm de espesor.","170 cm. x 60 cm.", "Pintura electroestatica color negro.", 29823, "", 1))


//COCINA



//LIVING



//BAÑO
