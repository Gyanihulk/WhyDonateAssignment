require("dotenv").config()


const config = {
    PORT:process.env.PORT,
    MONGO:process.env.MONGO,
    JWTSECRET:`${process.env.JWTSECRET}`,
  }
  
  export default config
  