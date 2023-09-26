const http = require('node:http');

http.createServer((req, res) => {


    res.writeHead(200, {
        'Content-Type': 'application/csv',
        "Content-Disposition": "attachment; filename=lista.csv" });

    res.write('id; nombre\n');
    res.write('1; ivan\n');
    res.write('2; andres\n');
    res.write('3; sofia\n');
    res.write('4; pedro\n');


    res.end()
}).listen(8080)

console.log("Escuchando el puerto", 8080)
