const mysql = require('mysql')

const connection = mysql.createConnection({
    host: `${process.env.HOST}`,
    user: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`
})



async function connectToDB() {
    try {
        await connection.connect(() => {
            console.log('Connect to DB successfully!')
        })
    } catch (error) {
        console.log('Connect to DB failure!')
    }
}


module.exports = {
    connectToDB: connectToDB,
    connection: connection,
}
