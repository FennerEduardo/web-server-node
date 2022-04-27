const http = require('http')

//create server on port 8080
http.createServer((req, res) => {



    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' })

    // const persona = {
    //     id: 1,
    //     name: 'Fenner'
    // }

    // writting an response
    // res.write(JSON.stringify(persona));
    res.write('Hola Mundo');

    res.end();
})
    .listen(8080)

console.log('Escuchando el puerto', 8080);