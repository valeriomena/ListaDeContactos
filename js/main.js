
function capturar() { 
    //console.log("CAPTURADO");
    //Definicion del objeto contacto
    function Contacto(nombre,email,telefono,direccion) { 
        this.nombre=nombre; 
        this.email=email; 
        this.telefono=telefono;
        this.direccion=direccion;
    }
    //capturando la informacion del formulario
    let nombreCapturar = document.getElementById("nombre").value;
    let emailCapturar = document.getElementById("correo").value;
    let telefonoCapturar = document.getElementById("phone").value;
    let direccionCapturar = document.getElementById("direccion").value;
    // clase constructora del objeto contacto    
    nuevoContacto = new Contacto(nombreCapturar, emailCapturar, telefonoCapturar, direccionCapturar);
    //console.log(nuevoContacto);
    
    agregar();
}
//array de obejtos que simula la base de datos
baseDatos = [];

function agregar() { 
    console.log("Agregando a la tabla");
    baseDatos.push(nuevoContacto);//crea el nuevo objeto en el array
    console.log(baseDatos);
    //crea una nueva fila en la tabla con la informacion del objeto
    document.getElementById("tabla").innerHTML +=
        '<tbody><tr><td>'+ nuevoContacto.nombre +
        '</td ><td>' + nuevoContacto.email +
        '</td><td>' + nuevoContacto.telefono +
        '</td><td>' + nuevoContacto.direccion +
        //'</td><td><button id ="delete" class="eliminarrow" value="Eliminar" type="reset" onclick="eliminar();">-</button></td></ ></tbody > ';
        '</td><td><i class="fa-sharp fa-solid fa-eraser IconoPeque" onclick="eliminar();"></i></td></ ></tbody > ';
}

var tablaTitulos = document.getElementById("tabla");
// se agrega un eventlistener en la tabla para identificar en que boton se hace click
tablaTitulos.addEventListener("click", verificarClick);
function verificarClick(e) { 
    //console.log("este es el evento: "+e.target.parentNode.parentNode.rowIndex);
    var table = document.getElementById("tabla");
    var index = e.target.parentNode.parentNode.rowIndex;
    console.log("Este es el indice de la fila "+index)
    var row = table.rows[index]; // fila a eliminar
    var cell = row.cells[0]; // columna con el nombre
    var value = cell.innerHTML; // valor de la celda
    console.log("Contacto a eliminar: " + value);
    document.getElementById("buscar").value = value;
    //baseDatos.splice(index, 1);//Se elimina el objeto del array
    eliminar(); // se llama a eliminar para quitar el objeto
    tabla.deleteRow(index);//se elimina la fila a la que se le dio click
    
}
//funcion que elimina el objeto del array
function eliminar() { 
    var searchData = document.getElementById("buscar").value;//trae el contacto a eliminar
    //console.log("Valor a buscar: " + searchData);
    //busca el objeto con concidencia por nombre
    var item = baseDatos.findIndex(elemento => elemento.nombre === searchData);
    //console.log("registro encontrado " + item);
    if (item !== -1) {
        //console.log("Entro al si")
        baseDatos.splice(item, 1);
    }
    
    console.log(baseDatos);
}
