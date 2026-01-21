const products = {
    p1: { id: 1, name: "Amuleto Egipcio", price: 25 },
    p2: { id: 2, name: "Pergamino Antiguo", price: 40 },
    p3: { id: 3, name: "Estatua de Anubis", price: 100 }
};

const numbers = [1, 2, 2, 3, 4, 4, 5];
const setNumbers = new Set(numbers);

// Mostrar el Set (sin duplicados)
console.log("Set inicial:", setNumbers);

// Agregar un número
setNumbers.add(6);

// Verificar si existe un número
console.log("Exist the number 3?: ", setNumbers.has(3));

// Eliminar un número
setNumbers.delete(2);

// Recorrer el Set
console.log("Set values:");
for (const number of setNumbers) {
    console.log(number);
}

// Map
const category = new Map();

category.set("Reliquia", "Amuleto Egipcio");
category.set("Documento", "Pergamino Antiguo");
category.set("Escultura", "Estatua de Anubis");

// For in
console.log("Products:");
for (const key in products) {
    console.log(
        `ID: ${products[key].id}, Nombre: ${products[key].name}, Precio: ${products[key].price}`
    );
}

// For of
console.log("Numbers set:");
for (const numero of setNumbers) {
    console.log(numero);
}

// For each 
console.log("Category and products:");
category.forEach((product, categorys) => {
    console.log(`Categoría: ${categorys} → Producto: ${product}`);
});

function validateProducts(product)  {
    return (
        typeof product.id == "number" &&
        typeof product.name == "string" &&
        typeof product.price == "number" &&
        product.price > 0
    );
}

console.log("Products validations: ");
for (const key in products) {
  const esValido = validateProducts(products[key]);
  console.log(`${products[key].name}: ${esValido ? "Válido " : "Inválido "}`);
}

// lista completa de productos
console.log("Lista completa de productos:", productos);

// lista de números únicos
console.log("Set de números únicos:", setNumeros);

// categorías y nombres de productos
console.log("Map de categorías:", categorias);
