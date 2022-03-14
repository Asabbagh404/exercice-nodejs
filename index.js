const fs = require('fs');

// Create file with content
fs.appendFile('nouveauFichier.txt', 'Mon contenu', function (err) {
    if (err) throw err;
    console.log('Fichier créé !');
});

// Create file without content
fs.open('nouveauFichier.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Fichier créé !');
});

// Create or override existing file
fs.writeFile('nouveauFichier.txt', 'Mon contenu', function (err) {
    if (err) throw err;
    console.log('Fichier créé !');
});

// Read a file
fs.readFile('nouveauFichier.txt', 'utf8', function(err, data) {
    const content = data;
    console.log(content);
});

// Write stream
let writeStream = fs.createWriteStream('nouveauFichier.txt');
writeStream.write('Mon contenu de flux', 'utf-8');
writeStream.on('finish', () => {
    console.log('Fichier mis à jour !');
});

writeStream.end();

// Copy a file
fs.copyFile('nouveauFichier.txt', 'nouveauFichier_copie.txt', (err) => {
    if (err) throw err;
    console.log('Fichier copié !');
});

// Delete a file
fs.unlink('fichier.txt',(err) => {
    if (err) throw err;
    console.log('Fichier supprimé !');
});

// Read big json
const stream = fs.createReadStream('./large-json.json', {flags: 'r', encoding: 'utf-8'});
let buffer = '';
stream.on('data', function(d) {
    buffer += d.toString(); // when data is read, stash it in a string buffer
})
stream.on('close', () => {
    console.log(buffer)
})

// Get data from -- decompress and copy into a directory (use decompressjs with npm)
