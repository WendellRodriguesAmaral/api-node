import { sql } from './db.js';


// sql`DROP TABLE IF EXISTS videos;`.then(() => {console.log("deletada");})

sql`
    CREATE TABLE IF NOT EXISTS videos (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        duration INTEGER NOT NULL
    )
`.then(() => {
    console.log("Tabela criada");
})
