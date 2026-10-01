document.getElementById ("resultado")!.innerHTML = "I have changed!";

function greet (name: string): string{
    return `Hello, ${name}`
}

const message  = greet("World");
console.log(message);