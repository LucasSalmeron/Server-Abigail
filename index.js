const sqlHelp = require('./sqlHelp.js');
const qs = require('querystring');
const sql = new sqlHelp();
const http = require("http");
const { watch } = require('fs');
const host = "localhost";
const port = 3000;
const server = http.createServer(async function (req, res) {

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

   
    

    //pacientes;
    if(req.url == "/buscarPacientes"){

        const resultado =  await sql.buscarPacientes();
        res.write(JSON.stringify(resultado));
        
    }
    
    if(req.url.startsWith("/buscarPacientexID")){
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
                const resultado =  sql.buscarPaciente(d.Dni);
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
                const resultado =  sql.sumarPaciente(d.Dni, d.Nombre, d.Telefono, d.Email, d.Direccion);
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
                const resultado =  sql.editarPaciente(d.Dni, d.Nombre, d.Telefono, d.Email, d.Direccion);
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
                const resultado =  sql.eliminarPaciente(d.Dni);
                res.write(JSON.stringify(resultado));
            }
        });
    }


    //tratamientos

    if(req.url == "/buscarTratamientos"){

        const resultado =  await sql.buscarTratamientos();
        res.write(JSON.stringify(resultado));
        
    }
    
    if(req.url.startsWith("/buscarTratamientoxID")){
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
                const resultado =  sql.buscarTratamiento(d.Id);
                res.write(JSON.stringify(resultado));
            }

            
        });
    }

    if(req.url.startsWith("/buscarTratamientosPorDni")){
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
                const resultado =  sql.buscarTratamientoPorDni(d.Dni);
                res.write(JSON.stringify(resultado));
            }

            
        });
    }
   

    if(req.url.startsWith("/sumarTratamiento")){
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
                const resultado =  sql.sumarTratamiento(d.Id, d.Fecha, d.Presupuesto, d.Nombre, d.Descripcion, d.Paciente);
                res.write(JSON.stringify(resultado));
            }

            //no se porque este codigo se ejecuta varias veces
        });
    }

    if(req.url.startsWith("/editarTratamiento")){
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
                const resultado =  sql.editarTratamiento(d.Id, d.Fecha, d.Presupuesto, d.Nombre, d.Descripcion, d.Paciente);
                res.write(JSON.stringify(resultado));
            }

            //no se porque este codigo se ejecuta varias veces
        });
    }

    if(req.url.startsWith("/eliminarTratamiento")){
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
                const resultado =  sql.eliminarTratamiento(d.Id);
                res.write(JSON.stringify(resultado));
            }
        });
    }

    //Pagos

    if(req.url == "/buscarPagos"){

        const resultado =  await sql.buscarPagos();
        res.write(JSON.stringify(resultado));
        
    }
    
    if(req.url.startsWith("/buscarPagoxID")){
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
                const resultado =  sql.buscarPago(d.Id);
                res.write(JSON.stringify(resultado));
            }

            
        });
    }

    if(req.url.startsWith("/buscarPagosPorTratamiento")){
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
                const resultado =  sql.buscarPagosPorTratamiento(d.Id);
                res.write(JSON.stringify(resultado));
            }

            
        });
    }
   

    if(req.url.startsWith("/sumarPago")){
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
                const resultado =  sql.sumarPago(d.Id, d.Fecha, d.Monto, d.FormaPago, d.Detalle, d.Tratamiento);
                res.write(JSON.stringify(resultado));
            }

            //no se porque este codigo se ejecuta varias veces
        });
    }

    if(req.url.startsWith("/editarTratamiento")){
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
                const resultado =  sql.editarPago(d.Id, d.Fecha, d.Monto, d.FormaPago, d.Detalle, d.Tratamiento);
                res.write(JSON.stringify(resultado));
            }

            //no se porque este codigo se ejecuta varias veces
        });
    }

    if(req.url.startsWith("/eliminarPago")){
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
                const resultado =  sql.eliminarPago(d.Id);
                res.write(JSON.stringify(resultado));
            }
        });
    }



    


    res.end();
})



server.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`)
        
    })







