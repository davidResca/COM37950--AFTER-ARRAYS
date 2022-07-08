/* 
const array = ["dinosaurio", 20, "pera"];
        //index    0          1     2
        //length   1          2     3
// index - length
for(i=0; i < array.length; i++){
    console.log(array[i]);
};
*/

class Producto {
    constructor(id, nombre, precio, categoria){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.categoria = categoria
    }
}

function agregarProductos(){
    const vino = new Producto(6, "vinasi", 50, "alcohol");
    productos.push(vino)//AGREGA 

    const quesoVegano = new Producto(7, "queso de almendras", 50, "producto vegano");
    productos.push(quesoVegano);

    const aguaMineral = new Producto(8, "agua", 50, "bebidas sin alcohol");
    productos.unshift(aguaMineral); //AGREGA AL PRINCIPIO
}

agregarProductos();
console.log(productos);

function pedirDatosAlUsuario(){
    const nombreIngresado = prompt("ingrese producto que quiera buscar"); 
    const nombreDeProductoAFiltrar = prompt("ingrese el producto para filtrar");
    const productoVerificarExistencia = prompt("ingrese el producto para verificar existencia");
    buscarProducto(nombreIngresado);
    filtrarProducto(nombreDeProductoAFiltrar);
    verificarExistenciaConSome(productoVerificarExistencia);
}

function buscarProducto(producto){
    const find = productos.find( elemento => elemento.nombre === producto);
    console.log('ENCONTRADO CON FIND: ', find);
}

pedirDatosAlUsuario();

function filtrarProducto(productoFilter){
    const filter = productos.filter(producto => producto.nombre.indexOf(productoFilter) !== -1 )
    //const filter = productos.filter(producto => producto.nombre === productoFilter);
    console.log('PRODUCTO FILTRADO', filter);
}

function quitarProducto(){
    let nombreExcluido = prompt("Ingrese el producto que quiere quitar");
    const filterExcluyente = productos.filter(element => element.nombre !== nombreExcluido);
    console.log('PRODUCTO EXCLUIDO CON FILTER', filterExcluyente);
}
quitarProducto();

console.log('------------------ SOME -------------------');

function verificarExistenciaConSome(productoUsuario){
    let existe = productos.some((prod)=>prod.nombre.indexOf(productoUsuario)!==-1);
    console.log('EXISTE PRODUCTO CON SOME? ¿TRUE O FALSE?', existe);
}

console.log('------------------ FOR EACH -------------------');

productos.forEach((producto)=>{
    console.log(producto);
})

console.log('------------------ MAP -------------------');

function mapearProductos(){
    const productosMapeados = productos.map((producto) => producto.nombre);
    console.log('MAPEADOS POR NOMBRE',productosMapeados);
}

mapearProductos();

console.log('------------------ REDUCE -------------------');

function calcularTotalCarrito(){
    const totalCarrito = productos.reduce((acc, producto) => acc+=parseFloat(producto.precio),0);
    console.log(totalCarrito);
}

calcularTotalCarrito();
