const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    const message = []
    for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    
    }
    return message
}

function countDown(num) {
    let count = 0
    while (count <= num) {
        console.log(num--);
    }
}
