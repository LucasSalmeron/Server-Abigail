


const sqlHelp = require('./sqlHelp.js');
const qs = require('querystring');
const sql = new sqlHelp();
const http = require("http");
const host = "localhost";
const port = 3000;
const server = http.createServer(async function (req, res) {
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    
        if(req.url == "/buscarPacientes"){

        const resultado =  await buscarPacientes();
        res.write(JSON.stringify(resultado));
        
    }
    
    if(req.url.startsWith("/sumarPaciente")){
        let d = null;
        let body = '';

        req.on('data', (data) => {
            body += data;
            if (body.length > 1e6) {
                req.destroy();
            }
        });

        req.on('end', () => {
            try {
                d = JSON.parse(body.toString());
          
            } catch (error) {
              
            }
            if(d!=null){ 
                const resultado =  buscarPaciente(d.Dni);
                res.write(JSON.stringify(resultado));
            }

            
        });
    }
   

    if(req.url.startsWith("/sumarPaciente")){
        let d = null;
        let body = '';

        req.on('data', (data) => {
            body += data;
            if (body.length > 1e6) {
                req.destroy();
            }
        });

        req.on('end', () => {
            try {
                d = JSON.parse(body.toString());
                //este try hace que las veces que pasa por aca de mas no tire error
            } catch (error) {
               //console.log(error.name);
               // res.statusCode = 400;
               // res.end('Malformed request body');
            }
            if(d!=null){ //evita que pase las veces que es nulo.
                const resultado =  sumarPaciente(d.Dni, d.Nombre, d.Telefono, d.Email, d.Direccion);
                res.write(JSON.stringify(resultado));
            }

            //no se porque este codigo se ejecuta varias veces
        });
    }

    if(req.url.startsWith("/editarPaciente")){
        let d = null;
        let body = '';

        req.on('data', (data) => {
            body += data;
            if (body.length > 1e6) {
                req.destroy();
            }
        });

        req.on('end', () => {
            try {
                d = JSON.parse(body.toString());
                //este try hace que las veces que pasa por aca de mas no tire error
            } catch (error) {
               //console.log(error.name);
               // res.statusCode = 400;
               // res.end('Malformed request body');
            }
            if(d!=null){ //evita que pase las veces que es nulo.
                const resultado =  editarPaciente(d.Dni, d.Nombre, d.Telefono, d.Email, d.Direccion);
                res.write(JSON.stringify(resultado));
            }

            //no se porque este codigo se ejecuta varias veces
        });
    }

    if(req.url.startsWith("/eliminarPaciente")){
        let d = null;
        let body = '';

        req.on('data', (data) => {
            body += data;
            if (body.length > 1e6) {
                req.destroy();
            }
        });

        req.on('end', () => {
            try {
                d = JSON.parse(body.toString());
            } catch (error) {
            }
            if(d!=null){ 
                const resultado =  eliminarPaciente(d.Dni, d.Nombre, d.Telefono, d.Email, d.Direccion);
                res.write(JSON.stringify(resultado));
            }
        });
    }


    res.end();
})


server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})

async function buscarPacientes(){
    const resultado = await sql.buscarPacientes();
    console.log("Pacientes Buscados");
    return resultado;
}

async function sumarPaciente(dni, nombre, telefono, email, direccion){
    const resultado = await sql.sumarPaciente(dni,nombre,telefono,email,direccion);
    return resultado;
}

async function editarPaciente(dni, nombre, telefono, email, direccion){
    const resultado = await sql.editarPaciente(dni,nombre,telefono,email,direccion);
    return resultado;
}

async function eliminarPaciente(dni){
    const resultado = await sql.eliminarPaciente(dni);
    return resultado;
}
async function buscarPaciente(dni){
    const resultado = await sql.buscarPaciente(dni);
    return resultado;
}


