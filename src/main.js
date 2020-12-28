const worker = new Worker("../src/worker.js");

worker.onmessage = e => {
    const data = e.data;
    console.log("from worker", data)

    const reply = setTimeout(() => worker.postMessage("Marco!"), 3000);
}

// passed a copy
worker.postMessage("Marco");
