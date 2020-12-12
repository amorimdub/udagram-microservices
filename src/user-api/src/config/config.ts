export const config = {
  "postgress": {
    "username": process.env.POSTGRES_USERNAME || "",
    "password": process.env.POSTGRES_PASSWORD || "",
    "database": process.env.POSTGRES_DATABASE || "",
    "host": process.env.POSTGRES_HOST || "",
    "dialect": "postgres",
  },
  "jwt": {
    "secret": process.env.JWT_SECRET || ""
  }
}
