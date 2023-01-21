//VARIABLES
//ELEMENTOS HTML
const main = document.getElementsByTagName('main')

//ARRAY DE MUEBLES
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


//CATEGORIA DE MUEBLES
const habitacion = [mesasDeLuz, espejosH, espinesH];
const cocina = [especieros];
const living = [bancos, mesasRatonas, mesasDeArrime, dressoire, espejosL]
const banio = [espinesB]

//CREAR MUEBLE
class Mueble {
    constructor(id,categoria, nombre, material, medida, terminacion, precio, url, numero, subcat){
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.material = material;
        this.medida = medida;
        this.terminacion = terminacion;
        this.precio = precio;
        this.url = url;
        this.numero = numero;
        this.subcat = subcat
    }
}  


//FUNCIONES

function crearProducto(arr, producto){
    arr.push(producto);
}

function sumarID(arr){
    let num = arr.length
    return arr[num-1].id + 1
}

function crearMuebleHTML(arr){
    for (const mueble of arr) {
        let seccion = document.createElement('section')
        if (mueble.id == 1){
            seccion.innerHTML = `<section class="fondo" id="${mueble.categoria.split(" ").join("")}">
            <div class="fondo__titulo" data-aos="flip-left" data-aos-duration="1000">
                <h2>${mueble.categoria}</h2>
                <P>MUEBLES NATURALES</P>
            </div>
        </section>
        <section class="productos">
            <div class="productos__titulo">
                <h2>${mueble.subcat}</h2>
                <hr>
            </div>
            <div class="productos__todo">
                <div class="productos__img">
                    <img src="${mueble.url}" alt="${mueble.nombre}" data-aos="zoom-out-up" data-aos-duration="1000">
                </div>
                <div class="productos__info" data-aos="fade-left" data-aos-duration="1000">
                    <div class="productos__nombre">
                        <h3>${mueble.nombre}</h3>
                    </div>
                    <div class="productos__p">
                        <p><b>Material:</b> ${mueble.material}</p>
                        <p><b>Medidas:</b> ${mueble.medida}</p>
                        <p><b>Terminación:</b> ${mueble.terminacion}</p>
                    </div>
                    <div class="productos__precio">
                        <h3>$${mueble.precio},00</h3>
                    </div>
                </div>
            </div>
        </section>`
        } else if (mueble.id%2 == 1 && mueble.numero == 1){
            seccion.innerHTML = `<section class="productos" id=${mueble.subcat.split(" ").join("")}>
            <div class="productos__titulo">
                <h2>${mueble.subcat}</h2>
                <hr>
            </div>
            <div class="productos__todo">
                <div class="productos__img">
                    <img src="${mueble.url}" alt="${mueble.nombre}" data-aos="zoom-out-up" data-aos-duration="1000">
                </div>
                <div class="productos__info" data-aos="fade-left" data-aos-duration="1000">
                    <div class="productos__nombre">
                        <h3>${mueble.nombre}</h3>
                    </div>
                    <div class="productos__p">
                        <p><b>Material:</b> ${mueble.material}</p>
                        <p><b>Medidas:</b> ${mueble.medida}</p>
                        <p><b>Terminación:</b> ${mueble.terminacion}</p>
                    </div>
                    <div class="productos__precio">
                        <h3>$${mueble.precio},00</h3>
                    </div>
                </div>
            </div>
        </section>`

        } else if(mueble.id%2 == 1){
            seccion.innerHTML = `<section class="productos" >
            
            <div class="productos__todo pt-5">
                <div class="productos__img " >
                    <img src="${mueble.url}" alt="${mueble.nombre}" data-aos="zoom-out-up" data-aos-duration="1000">
                </div>
                <div class="productos__info" data-aos="fade-left" data-aos-duration="1000">
                    <div class="productos__nombre">
                        <h3>${mueble.nombre}</h3>
                    </div>
                    <div class="productos__p">
                        <p><b>Material:</b> ${mueble.material}</p>
                        <p><b>Medidas:</b> ${mueble.medida}</p>
                        <p><b>Terminación:</b> ${mueble.terminacion}</p>
                    </div>
                    <div class="productos__precio">
                        <h3>$${mueble.precio},00</h3>
                    </div>
                </div>
            </div>
        </section>`
        } 
        else if (mueble.id%2 == 0 && mueble.numero == 1){
            seccion.innerHTML = `<div class="productos__titulo-2" id=${mueble.subcat.split(" ").join("")}>
            <h2>${mueble.subcat}</h2> 
            <hr>                       
        </div>
        <section class="productos-2 color pt-0">            
            <div class="productos__todo-2">
                <div class="productos__img">
                    <img src="${mueble.url}" alt="${mueble.nombre}" data-aos="zoom-out-up" data-aos-duration="1000" >
                </div>
                <div class="productos__info" data-aos="fade-left" data-aos-duration="1000">
                    <div class="productos__nombre-2">
                        <h3>${mueble.nombre}</h3>
                    </div>
                    <div class="productos__p-2">
                        <p><b>Material:</b> ${mueble.material}</p>
                        <p><b>Medidas:</b> ${mueble.medidas}</p>
                        <p><b>Terminación:</b> ${mueble.terminacion}</p>
                    </div>
                    <div class="productos__precio-2">
                        <h3>$${mueble.precio},00</h3>
                    </div>
                </div>
        </section>`
        } else {
            seccion.innerHTML = `<section class="productos-2 color pt-5">            
            <div class="productos__todo-2">
                <div class="productos__img">
                    <img src="${mueble.url}" alt="${mueble.nombre}" data-aos="zoom-out-up" data-aos-duration="1000" >
                </div>
                <div class="productos__info" data-aos="fade-left" data-aos-duration="1000">
                    <div class="productos__nombre-2">
                        <h3>${mueble.nombre}</h3>
                    </div>
                    <div class="productos__p-2">
                        <p><b>Material:</b> ${mueble.material}</p>
                        <p><b>Medidas:</b> ${mueble.medidas}</p>
                        <p><b>Terminación:</b> ${mueble.terminacion}</p>
                    </div>
                    <div class="productos__precio-2">
                        <h3>$${mueble.precio},00</h3>
                    </div>
                </div>
        </section>`
        }
        
        
        main[0].appendChild(seccion)
    }
}


//AGREGAR LOS PRODUCTOS

//HABITACION
crearProducto(mesasDeLuz, new Mueble(
    //ID
    1, 
    //CATEGORIA
    "HABITACION",
    //NOMBRE
    "MESA CON ESTANTE", 
    //MATERIALES
    "Álamo.",
    //MEDIDA
    "65 cm. x 40 cm. x 35 cm.",
    //TERMINACION
    "Teñido en color petiribí más lustre semimate.", 
    //PRECIO
    32430, 
    //IMAGEN
    "./img/producto-01/mesa-de-luz-con-estante.png",
    //NUMERO
    1 , 
    //SUB CATEGORIA
    "MESAS DE LUZ"));

crearProducto(mesasDeLuz, new Mueble(
    //ID
    sumarID(mesasDeLuz), 
    //CATEGORIA
    "HABITACION",
    //NOMBRE
    "MESA CON REJILLAS", 
    //MATERIAL
    "Álamo.",
    //MEDIDA
    "65 cm. x 44 cm. x 33 cm.",
    //TERMINACION
    "Teñido en color petiribí más lustre semimate.", 
    //PRECIO
    29823, 
    //IMAGEN
    "./img/producto-01/mesa-de-luz-rejilla.jpg",
    //NUMERO
     2,
     //SUB CATEGORIA
     "MESAS DE LUZ" ));


crearProducto(espejosH, new Mueble(
    //ID
    sumarID(mesasDeLuz),
    //CATEGORIA
    "HABITACION", 
    //NOMBRE
    "ESPEJO BOLD", 
    //MATERIAL
    "Hierro y Espejo 4 mm de espesor.",
    //MEDIDA
    "170 cm. x 60 cm.", 
    //TERMINACION
    "Pintura electroestatica color negro.", 
    //PRECIO
    29823, 
    //IMAGEN
    "./img/producto-02/espejo-bold.jpg", 
    //NUMERO
    1,
    //SUB CATEGORIA
    "ESPEJOS"))

crearProducto(espinesH, new Mueble(
    //ID
    sumarID(espejosH),
    //CATEGORIA
    "HABITACION", 
    //NOMBRE
    "ESPIN TRIPLE CON ESTANTE",
    //MATERIAL
    "Álamo.",
    //MEDIDAS
    "200 cm. x 60 cm. x 30 cm.",
    //TERMINACION
    "Teñido en color petiribí más lustre semimate", 
    //PRECIO
    23805 , 
    //IMAGEN
    "./img/producto-03/espin-triple.jpg", 
    //NUMERO
    1,
    //SUB CATEGORIA
    "ESPINES"))



//COCINA
crearProducto(especieros, new Mueble(
    //ID
    1, 
    //CATEGORIA
    "COCINA", 
    //NOMBRE
    "ESPECIERO NATURAL", 
    //MATERIAL
    "Álamo.", 
    //MEDIDA
    "120 cm. x 26 cm. x 100 cm.", 
    //TERMINACION
    "Madera de álamo natural con la terminación de laca semimate.", 
    //PRECIO
    28673, 
    //IMAGEN
    "./img/producto-04/especiero-natural.jpg", 
    //NUMERO
    1, 
    //SUB CATEGORIA
    "ESPECIERO" ))
    
crearProducto(especieros, new Mueble(
    //ID
    sumarID(especieros), 
    //CATEGORIA
    "COCINA", 
    //NOMBRE
    "ESTANTE DE COCINAL", 
    //MATERIAL
    "Álamo.", 
    //MEDIDA
    "80 cm. x 12 cm. x 60 cm.", 
    //TERMINACION
    "Teñido en color petiribí más lustre semimate.", 
    //PRECIO
    27063, 
    //IMAGEN
    "./img/producto-05/estante-de-cocina.jpg", 
    //NUMERO
    2, 
    //SUB CATEGORIA
    "ESPECIERO" ))



//LIVING
crearProducto(bancos, new Mueble(
    //ID
    1, 
    //CATEGORIA
    "LIVING", 
    //NOMBRE
    "BANCO ENCORDADO", 
    //MATERIAL
    "Álamo e hilo de yute.", 
    //MEDIDA
    "50 cm. x 455 cm. x 35 cm.", 
    //TERMINACION
    "Teñido en color petiribí más lustre semimate.",  
    //PRECIO
    19013, 
    //IMAGEN
    "./img/producto-06/banco-encordado.jpg", 
    //NUMERO
    1, 
    //SUB CATEGORIA
    "BANCOS" ))

    crearProducto(mesasRatonas, new Mueble(
        //ID
        sumarID(bancos), 
        //CATEGORIA
        "LIVING", 
        //NOMBRE
        "MESA RATONA REJILLA", 
        //MATERIAL
        "Álamo.", 
        //MEDIDA
        "120 cm. x 35 cm. x 50 cm.", 
        //TERMINACION
        "Teñido en color petiribí más lustre semimate.",  
        //PRECIO
        31280, 
        //IMAGEN
        "./img/producto-07/mesa-ratona-rejilla.jpg", 
        //NUMERO
        1, 
        //SUB CATEGORIA
        "MESAS RATONAS" ))
    crearProducto(mesasRatonas, new Mueble(
            //ID
            sumarID(mesasRatonas), 
            //CATEGORIA
            "LIVING", 
            //NOMBRE
            "MESA RATONA", 
            //MATERIAL
            "Álamo.", 
            //MEDIDA
            "", 
            //TERMINACION
            "Teñido en color petiribí más lustre semimate.",  
            //PRECIO
            25300, 
            //IMAGEN
            "./img/producto-13/mesa_ratona.jpeg", 
            //NUMERO
            2, 
            //SUB CATEGORIA
            "MESAS RATONAS" ))
    crearProducto(mesasDeArrime, new Mueble(
            //ID
            sumarID(mesasRatonas), 
            //CATEGORIA
            "LIVING", 
            //NOMBRE
            "MESA DE ARRIME", 
            //MATERIAL
            "Hierro.", 
            //MEDIDA
            "40 cm. x 40 cm. x 65 cm.", 
            //TERMINACION
            "Pintura electroestatica color negro.",  
            //PRECIO
            15870, 
            //IMAGEN
            "./img/producto-10/mesa-de-arrime.jpg", 
            //NUMERO
            1, 
            //SUB CATEGORIA
            "MESAS DE ARRIME" ))
            crearProducto(dressoire, new Mueble(
                //ID
                sumarID(mesasDeArrime), 
                //CATEGORIA
                "LIVING", 
                //NOMBRE
                "DRESSOIRE NEGRO", 
                //MATERIAL
                "Álamo.", 
                //MEDIDA
                "80 cm. x 120 cm. x 35 cm.", 
                //TERMINACION
                "Teñido en color negro con laca semimate.",  
                //PRECIO
                24533, 
                //IMAGEN
                "./img/producto-09/dressoire-negro.jpg", 
                //NUMERO
                1, 
                //SUB CATEGORIA
                "DRESSOIRE" ))
                crearProducto(dressoire, new Mueble(
                    //ID
                    sumarID(dressoire), 
                    //CATEGORIA
                    "LIVING", 
                    //NOMBRE
                    "CONSOLA CON REJILLA", 
                    //MATERIAL
                    "Hierro.", 
                    //MEDIDA
                    "90 cm. x 80 cm. x 25 cm.", 
                    //TERMINACION
                    "Pintura electroestatica color negro.",  
                    //PRECIO
                    22923, 
                    //IMAGEN
                    "./img/producto-08/consola-con-rejilla.jpg", 
                    //NUMERO
                    2, 
                    //SUB CATEGORIA
                    "DRESSOIRE" ))
                    crearProducto(espejosL, new Mueble(
                        //ID
                        sumarID(dressoire), 
                        //CATEGORIA
                        "LIVING", 
                        //NOMBRE
                        "ESPEJO DAMERO", 
                        //MATERIAL
                        "Hierro.", 
                        //MEDIDA
                        "100 cm. x 100 cm.", 
                        //TERMINACION
                        "Pintura electroestatica en color negro.",  
                        //PRECIO
                        21160, 
                        //IMAGEN
                        "./img/producto-11/espejo-damero.jpg", 
                        //NUMERO
                        1, 
                        //SUB CATEGORIA
                        "ESPEJOS" ))
        
//BAÑO

crearProducto(espinesB, new Mueble(
    //ID
   1, 
    //CATEGORIA
    "BAÑO", 
    //NOMBRE
    "ESPIN DE BAÑO", 
    //MATERIAL
    "Álamo.", 
    //MEDIDA
    "200 cm. x 50 cm. x 24 cm.", 
    //TERMINACION
    "Teñido en color petiribí más lustre semimate.",  
    //PRECIO
    17403, 
    //IMAGEN
    "./img/producto-12/espin-baño.jpg", 
    //NUMERO
    1, 
    //SUB CATEGORIA
    "ESPIN" ))



//crear HTML

crearMuebleHTML(mesasDeLuz)
crearMuebleHTML(espejosH)
crearMuebleHTML(espinesH)
crearMuebleHTML(especieros)
crearMuebleHTML(bancos)
crearMuebleHTML(mesasRatonas)
crearMuebleHTML(mesasDeArrime)
crearMuebleHTML(dressoire)
crearMuebleHTML(espejosL)
crearMuebleHTML(espinesB)