import { Sequelize } from "sequelize";

const db = new Sequelize("toko_happy","root","", {
    host: "localhost",
    dialect: "mysql"
})

export default db;