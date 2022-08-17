// Code your solutions in this file
function writeCards(names, eventName){
    let result = [];
    for (let i = 0; i < names.length; i++){
        result.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }

    return result;
}

function countDown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
}
