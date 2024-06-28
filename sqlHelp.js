
//NECESITE INSTALAR ODBC DRIVER 18 para sql server

const sql = require('msnodesqlv8');
const { rows } = require('mssql');
const connectionString = "Driver={ODBC Driver 18 for SQL Server};Server=DESKTOP-PK86BAT\\SQLEXPRESS;Database=Abigail;Trusted_Connection=yes;TrustServerCertificate=yes";
async function querySelect(query) {


    return new Promise((resolve, reject) => {
      sql.query(connectionString, query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
  
          resolve(rows);
        }
      });
    });
}
async function querySelect(query, values) {


  return new Promise((resolve, reject) => {
    sql.query(connectionString, query,values, (err, rows) => {
      if (err) {
        reject(err);
      } else {

        resolve(rows);
      }
    });
  });
}

function query(query){


    return new Promise((resolve, reject) => {
      sql.query(connectionString, query, (err) => {
        if (err) {
          reject(err);
        } else {
  
          resolve(true);
        }
      });
    });
}

function query(query, values){


  return new Promise((resolve, reject) => {
    sql.query(connectionString, query, values,(err) => {
      if (err) {
        reject(err);
      } else {

        resolve(true);
      }
    });
  });
}



module.exports = class sqlHelp {



async buscarPacientes(){
  
  try {
    const result = await querySelect("SELECT * FROM Pacientes");
    return result;
  } catch (error) {
    return error;
  }

}

async buscarPaciente(dni){

  const values = [dni];

  try {
    const result = await querySelect(`SELECT * FROM Pacientes WHERE Dni = ?`, values);
    return result;
   }
  catch (error) { return error; }
}


sumarPaciente(dni, nombre, telefono, email, direccion){
  return query(`INSERT INTO Pacientes (Dni,Nombre,Telefono,Email, Direccion) VALUES ('${dni}', '${nombre}', '${telefono}', '${email}', '${direccion}')`);
}

editarPaciente(dni, nombre, telefono, email, direccion){
  const values = [nombre, telefono, email, direccion, dni];

  return query(`UPDATE Pacientes SET Nombre = ?,Telefono = ? ,Email = ?, Direccion = ? WHERE Dni = ?`, values);
}


eliminarPaciente(dni){
  const values = [dni];
  return query(`DELETE FROM Pacientes WHERE Dni = ?`,values);
}

// Tratamiento
async buscarTratamientos(){
  
  try {
    const result = await querySelect("SELECT * FROM Tratamientos");
    return result;
  } catch (error) {
    return error;
  }

}

async buscarTratamiento(id){

  const values = [id];

  try {
    const result = await querySelect(`SELECT * FROM Tratamientos WHERE Id= ?`, values);
    return result;
   }
  catch (error) { return error; }
}
async buscarTratamientosPorDni(dni){

  const values = [dni];

  try {
    const result = await querySelect(`SELECT * FROM Tratamientos WHERE Paciente= ?`, values);
    return result;
   }
  catch (error) { return error; }
}


sumarTratamiento(Id, fecha,presupuesto, nombre, descripcion, paciente){
  return query(`INSERT INTO Tratamientos (Id, Fecha, Presupuesto, Nombre, Descripcion, Paciente) VALUES ('${Id}', '${fecha}', '${presupuesto}', '${nombre}', '${descripcion}', '${paciente}')`);
}

editarTratamiento(Id, fecha,presupuesto, nombre, descripcion, paciente){
  const values = [fecha,presupuesto, nombre, descripcion, Id];

  return query(`UPDATE Tratamientos SET Fecha = ?,Presupuesto = ? ,Nombre = ?, Descripcion = ? WHERE Id = ?`, values);
}


eliminarTratamiento(Id){
  const values = [Id];
  return query(`DELETE FROM Tratamientos WHERE Id = ?`,values);
}

//PAGOS

async buscarPagos(){
  
  try {
    const result = await querySelect("SELECT * FROM Pagos");
    return result;
  } catch (error) {
    return error;
  }

}

async buscarPago(id){

  const values = [id];

  try {
    const result = await querySelect(`SELECT * FROM Pagos WHERE Id= ?`, values);
    return result;
   }
  catch (error) { return error; }
}
async buscarPagosPorTratamiento(Id){

  const values = [Id];

  try {
    const result = await querySelect(`SELECT * FROM Pagos WHERE Tratamiento= ?`, values);
    return result;
   }
  catch (error) { return error; }
}


sumarPago(Id, fecha,monto, formaPago, detalle, tratamiento){
  return query(`INSERT INTO Pagos (Id, Fecha,Monto, FormaPago, Detalle, Tratamiento) VALUES ('${Id}', '${fecha}', '${monto}', '${formaPago}', '${detalle}', '${tratamiento}')`);
}

editarPago(Id, fecha,monto, formaPago, detalle, tratamiento){
  const values = [fecha,monto, formaPago, detalle, Id];

  return query(`UPDATE Pagos SET Fecha = ?,Monto = ? ,FormaPago = ?, Detalle = ? WHERE Id = ?`, values);
}


eliminarPago(Id){
  const values = [Id];
  return query(`DELETE FROM Pagos WHERE Id = ?`,values);
}

}


//todo esto va en el server-side porque la funcion require no funca ni import tampoco

