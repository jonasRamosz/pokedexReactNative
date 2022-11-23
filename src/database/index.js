import * as SQLite from 'expo-sqlite'

function useDatabase() {
  const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase("database.db"),
  }

  function initDb() {
    const sql = [
      `DROP TABLE IF EXISTS pokemons;`,
      `CREATE TABLE IF NOT EXISTS pokemons (
        id integer primary key autoincrement,
        nome varchar(10)
        );`,

    ]

    const db = DatabaseConnection.getConnection()

    db.transaction(
      tx => {
        for (var i = 0; i < sql.length; i++) {
          console.log("execute sql : " + sql[i])
          tx.executeSql(sql[i])
        }
      }, (error) => {
        console.log(error)
      }, () => {
        console.log("transaction complete call back ")
      }
    )
  }
  function insert(indentificador) {
    // const db = SQLite.openDatabase("database.db")
    const db = DatabaseConnection.getConnection()
    db.exec(
      [
        { sql: 'insert into pokemons (nome) values (?);', args: [indentificador] },
      ],
      false,
      () => console.log('Linhas inseridas')
    )
  }

  function delet(indentificador) {
    // const db = SQLite.openDatabase("database.db")
    const db = DatabaseConnection.getConnection()
    db.exec(
      [
        { sql: 'delete from pokemons where (nome) =  (?);', args: [indentificador] },
      ],
      false,
      () => console.log('Linha deletada ')
    )
  }

  function up(indentificador) {
    // const db = SQLite.openDatabase("database.db")
    const db = DatabaseConnection.getConnection()
    db.exec(
      [
        { sql: 'delete from pokemons where (nome) =  (?);', args: [indentificador] },
      ],
      false,
      () => console.log('Linha deletada ')
    )
  }


  function findById(id) {
    return new Promise(function (resolve, reject) {
      const db = DatabaseConnection.getConnection()
      db.transaction(tx => {
        tx.executeSql(`select * from pokemons where id=?`, [id], (_, { rows }) => {
          resolve(rows)
        }), (sqlError) => {
          reject(sqlError)
        }
      }, (txError) => {
        reject(txError)
      })
    })
  }
  function findAll() {
    return new Promise(function (resolve, reject) {
      const db = DatabaseConnection.getConnection()
      db.transaction(tx => {
        tx.executeSql(`select * from pokemons;`, [], (_, { rows }) => {
          resolve(rows)
        }), (sqlError) => {
          reject(sqlError)
        }
      }, (txError) => {
        reject(txError)
      })
    })
  }

  return {
    initDb,
    insert,
    findById,
    findAll,
    delet
  }
}

export default useDatabase