
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

}


//todo esto va en el server-side porque la funcion require no funca ni import tampoco

