import mongoose from "mongoose"

const ConnectedDb= async(DATABASE_URL)=>{
    try {
        const DB_Option={
          dbName:"mxtertask",   
        }
        mongoose.connect(DATABASE_URL, DB_Option )
        console.log("Database Successfully Connented")
    } catch (error) {
       console.log(error)   
    }
}

export default ConnectedDb

