// Import external scripts here
// importScripts("script1.js", "script2.js");

self.onmessage = function(e) {
    var t0 = performance.now();

    var data = e.data;

    // PROCESS DATA HERE
    var result = data[0]*data[1];

    var t1 = performance.now();
    console.log("Processing took " + (t1 - t0) + " milliseconds.");
    self.postMessage(result);
}
