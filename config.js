import dotenv from 'dotenv';

// .env 파일에서 정보 받아오기
dotenv.config();


export const config = {
    host: {
        port: parseInt(process.env.SERVER_PORT) || 8080,
    },
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
    },
}

