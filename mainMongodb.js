const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ankush210103:asdf@cluster0.5siti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DataBase connected")
   
})
.catch((err)=>{
    console.log(`There is error not connected${err}`)
})



const userSchema = new mongoose.Schema({
    
        name: {
            type: String,
            require:true,
            
        },
        username:{
            type:String,
            require:true,
        },
        email :{
            type :String,
            require:true
        },
        phoneNumber:{
            type :String,
            require: true
        },
        gender :{
            type : String,
            require: true
        },
        
            password :{
                type : String,
                require :true,
            }
        
    
})

const yourSchema = new mongoose.model('ProjectWebsiteByMe',userSchema);

module.exports = yourSchema;