// Define variables
let user = prompt("Enter valid name: ");
let age = prompt("Enter your age: ");
let data = Number(age);

// Validate errors
if (!isNaN(data )){
    alert('valido');
} 
else {
    console.error('Error:Invalid date');
};

// Validate age conditions 
if (data <= 18) {
    console.log(`Hola ${user}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
}
else if(data >= 18) {
    console.log(`Hola ${user}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
};