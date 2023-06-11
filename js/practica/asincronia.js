/* setTimeout(() => {
    console.log("Uso de setTimeout luego de 3 segundos, setTimeout se ejecuta una sola vez en X tiempo.")
}, 3000);

let sTo = setTimeout(() => {
    console.log("Uso de clearTimeout hace que el setTimeout indicado no se ejecute nunca, el setTimeout debe estar asignado en una variable.")
}, 3000);

clearTimeout(sTo)

setInterval(() => {
    console.log("Uso de setInterval luego de 5 segundos, setInterval se ejecuta siempre cada X tiempo.")
}, 5000);

let sI = setInterval(() => {
    console.log("Uso de clearInterval hace que el setInterval indicado no se ejecute nunca, el setInterval debe estar asignado en una variable.")
}, 5000);

clearInterval(sI)

for (let i = 0; i < 10;i++) {
    setInterval(() => {
        console.log(i)
    }, 3000);
}

console.clear() */