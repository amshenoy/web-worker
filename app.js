// Worker initialisation
const myWorker = new Worker("worker.js");

// Process received data here
myWorker.onmessage = function(e) {
    var result = e.data;

    // Process/display data here
    const res = document.querySelector('#result');
    res.textContent = result;

    console.log('Message received from worker:', result);
}


const op1 = document.querySelector('#num1');
const op2 = document.querySelector('#num2');
    
op1.oninput = function() {
    myWorker.postMessage([op1.value, op2.value]);
    console.log('Message posted to worker');
}

op2.oninput = function() {
    myWorker.postMessage([op1.value, op2.value]);
    console.log('Message posted to worker');
}

