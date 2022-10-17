const  slowPromise = new Promise((resolve, reject ) => {
    setTimeout(() => resolve("Slow Promise"), 2000);
});

const  mediumPromise = new Promise((resolve, reject ) => {
    setTimeout(() => resolve("Medium Promise"), 1500);
});

const  fastPromise = new Promise((resolve, reject ) => {
    setTimeout(() => reject("Fast Promise"), 1000);
});


Promise.race([slowPromise, mediumPromise, fastPromise])
    .then(console.log)
    .catch(console.warn);