import pg from 'pg'

const pool = new pg.pool({
    host: process.env.BD_HOST,
    database: process.env.BD_BD,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    port: process.env.BD_PORT
})

export default pool