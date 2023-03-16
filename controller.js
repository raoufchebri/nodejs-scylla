const cassandra = require('cassandra-driver');
require('dotenv').config();

const { NODE1, NODE2, NODE3, LOCAL_DATA_CENTER, USERNAME, PASSWORD } =
    process.env;

const cluster = new cassandra.Client({
    contactPoints: [NODE1, NODE2, NODE3],
    localDataCenter: LOCAL_DATA_CENTER,
    credentials: { username: USERNAME, password: PASSWORD },
    keyspace: 'avengers',
});

const getHeroes = async (req, res) => {
    const heroes = await cluster.execute('SELECT * FROM heroes');
    res.json(heroes.rows);
};

module.exports = getHeroes;
