/* eslint-disable prettier/prettier */
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host:     '84.201.184.150',
            database: '090303-19_DanSHa',
            user:     '090303-19_DanSHa',
            password: 'DanSHa'
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        },
        useNullAsDefault: true
    },

    test: {
        client: 'mysql',
        connection: {
            host:     '84.201.184.150',
            database: '090303-19_DanSHa',
            user:     '090303-19_DanSHa',
            password: 'DanSHa'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        },
        useNullAsDefault: true
    },

    production: {
        client: 'mysql',
        connection: {
            host:     '84.201.184.150',
            database: '090303-19_DanSHa',
            user:     '090303-19_DanSHa',
            password: 'DanSHa'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        },
        useNullAsDefault: true
    }

};