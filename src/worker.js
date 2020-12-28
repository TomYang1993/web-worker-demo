onmessage = e => {
    const data = e.data;
    console.log("from Main",data)

    const reply = setTimeout(() => postMessage("Polo!"), 3000);
}