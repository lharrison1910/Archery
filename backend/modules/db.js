import { Client } from "pg";
// import dotenv from "dotenv";

// dotenv.config({ path: ".env" });

// const client = new Client({
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   host: process.env.POSTGRES_HOST,
//   port: process.env.POSTGRES_PORT,
//   database: process.env.POSTGRES_DB,
// });

const client = new Client({
  user: "developer",
  password: "password_123",
  host: "db",
  port: 5432,
  database: "Archery",
});

await client.connect();

export const getData = async (param = null) => {
  try {
    //if param has a value then it will search db based off params given
    let data = null;
    if (param) {
      data = await client.query(
        `SELECT * FROM ${param.table} WHERE ${param.column} = '${param.query}'`
      );
      return data.rows;
    }
    // if no params returns full db
    data = await client.query(`SELECT * FROM Scores`);
    return data;
  } catch (error) {
    return error;
  }
};

export const postData = async (param) => {
  try {
    if (param.table === "Users") {
      const response = await client.query(
        `INSERT INTO Users (username, password, name, contact, club, role)
    VALUES ('${param.userData.username}', '${param.userData.password}','${param.userData.name}','${param.userData.contact}','${param.userData.club}','user')
    `
      );
      return response;
    } else {
      const response = await client.query(
        `INSERT INTO Scores (userid, scores) VALUES ('${
          param.userId
        }', '${JSON.stringify(param.scores)}')`
      );
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const updateData = async (param) => {
  try {
    if (param.table === "Scores") {
      console.log(param.userId);
      const response = await client.query(
        `UPDATE Scores SET scores='${JSON.stringify(param.scores)}' WHERE id='${
          param.userId
        }'`
      );
      return response;
    } else {
      const response = await client.query(`
            UPDATE Users 
            SET username=${userData.username}, password=${userData.password}, name=${userData.name}, contact=${userData.contactNo}, club=${userData.club}, role=${userData.role}
            WHERE id='${userData.id}'
            `);
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const deleteData = async (id) => {
  const deleteUserData = async () => {
    try {
      client.query(`DELETE FROM Users WHERE id='${id}'`);
      client.query(`DELETE FROM Scores WHERE userid='${id}'`);
      return true;
    } catch (error) {
      return false;
    }
  };
  try {
    const response = await deleteUserData();
    return response;
  } catch (error) {
    return error;
  }
};
