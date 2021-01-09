

var mongoose = require('mongoose');
//Set up default mongoose connection
module.exports = (req,res,next) => {
    let {isadmin} = req.headers
    console.log("isAdmin",req.headers);
    let { appId } = req.body;
    if(isadmin){
        var mongoDB = `mongodb://127.0.0.1/admin_db`;
        mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true });
        //Get the default connection
        var db = mongoose.connection;
        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        
        return next();
    }

   
    var mongoDB = `mongodb://127.0.0.1/tenant_${appId}`;
    mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true });
    //Get the default connection
    var db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    return next();
}
