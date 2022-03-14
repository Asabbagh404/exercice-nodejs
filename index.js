const { Worker } = require('worker_threads')

/**
 * Crée un worker
 * @param file On donne à l'objet Worker le chemin d'accès au fichier contenant la tâche à exécuter en parallèle.
 */
function executeWorker (file) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(file);

        // At worker starting
        worker.on('online', () => {
            console.log('DEBUT : Execution de la tâche intensive en parallèle');
        })

        // If the worker send a message
        worker.on('message', workerMessage => {
            console.log(workerMessage);
            return resolve;
        })

        worker.on('error', reject)
        worker.on('exit', code => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        })
    })
}

/**
 * Le main écrit dans la console
 */
(async function prog () {

    // Main task
    setInterval( () => { console.log('Tâche principale: la tâche en parallèle peut s\'exécuter') }, 1000)

    // Side task
    await executeWorker('./worker.js')
})();

// Create a worker that build a file with every number from 0 to 1e8 and every line is a number, when the worker finished
// it, he must send a message to the main process so the main process can open it and logged it in the console
