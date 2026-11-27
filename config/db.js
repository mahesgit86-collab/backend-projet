const mongoose = require("mongoose");

const dbOptions ={
    maxPoolSize:4,
};

const mainDb =mongoose.createConnection(process.env.MONGO_MAIN_URI, dbOptions) ;
const msgDb =mongoose.createConnection(process.env.MONGO_MSG_URI, dbOptions); 

async function connectDB(){
    try{
        await Promise.all([mainDb.asPromise(),msgDb.asPromise()]);
        console.log("Mongodb connected:mainDb & msg are aready");
    }catch(error) {
        console.log("Mongodb connection error",error.message);
        process.exit(1);
    }
    
}

module.exports= { connectDB, mainDb, msgDb};