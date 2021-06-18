import knex from "knex";

const database = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'zap'
    }
})

export { database }