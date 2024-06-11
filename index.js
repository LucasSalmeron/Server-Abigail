


const sqlHelp = require('./sqlHelp.js');
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

        const resultado =  await sumarPaciente(req.url.split("/")[2],req.url.split("/")[3],req.url.split("/")[4],req.url.split("/")[5],req.url.split("/")[6]);
        console.log("hecho");
        res.write(JSON.stringify(resultado));
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


