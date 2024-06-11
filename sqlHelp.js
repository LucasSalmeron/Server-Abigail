
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



module.exports = class sqlHelp {



async buscarPacientes(){
  
  try {
    const result = await querySelect("SELECT * FROM Pacientes");
    return result;
  } catch (error) {
    return error;
  }

}


sumarPaciente(dni, nombre, telefono, email, direccion){
  return query(`INSERT INTO Pacientes (Dni,Nombre,Telefono,Email, Direccion) VALUES ('${dni}', '${nombre}', '${telefono}', '${email}', '${direccion}')`);
}

}


//todo esto va en el server-side porque la funcion require no funca ni import tampoco

