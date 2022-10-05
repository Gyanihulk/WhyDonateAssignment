require("dotenv").config()


const config = {
    PORT:process.env.PORT,
    MONGO:process.env.MONGO,
    JWTSECRET:`${process.env.JWTSECRET}`,
    OMDB_SECRET:process.env.OMDB_SECRET
  }
  
  export default config
  