const exp =require("express");
const cors=require("cors");
const bodyparser = require("body-parser");
const mongodb =require("mongodb").MongoClient;
const { decodedTextSpanIntersectsWith } = require("typescript");

const app=exp();
app.use(cors());
app.use(bodyparser.json());

var db;
mongodb.connect("mongodb+srv://hari:8144659365@cluster0.azr0g.mongodb.net/covid?retryWrites=true&w=majority",(error,result)=>{
if(error){
    console.log("DB not connected!!!");
}
else{
    db=result.db("covid")
    console.log("db created!!");
}
});
app.use((req,res,next)=>{

console.log("MID1")

    next();
});


// app.use((req,res,next)=>{

//     console.log("MId2")
    
//         next();
//     });
    

//     function veri(req,res,next)
//     {
//         console.log("user verified");
//         next();
//     }
// app.get("/",(req,res)=>{

// console.log("home");

// res.send("<h1>Express</h1>");

// });


// app.get("/contact",veri,(req,res)=>{
//     console.log("contact");
//     res.json("welcome to com=ntact");
// });


app.post("/contact",(req,res)=>{

    req.body._id=new Date().getTime();
    console.log(req.body);

    db.collection("patient").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("ERROR!!!");
        }else{
            res.json("User Resgitered successfully");
        }
    });

    
});

app.post("/patient",(req,res)=>{

    req.body._id=new Date().getTime();
    console.log(req.body);

    db.collection("patient detail").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("ERROR!!!");
        }else{
            res.json("User Resgitered successfully");
        }
    });

    
});
app.post("/login", (req, res)=>{

    console.log(req.body);
   
    db.collection("login").find(req.body,{projection:{_id:1,useremail:1}}).toArray((error, data)=>{

        if(error)
        {
            res.status(403).json("Error in Finding the login doc");
        }
        else {
            res.json(data);
        }
    });
   
});

app.post("/register",(req,res)=>{

    req.body._id=new Date().getTime();
    console.log(req.body);

    db.collection("login").insertOne(req.body,(error,data)=>{
        if(error){
            res.status(403).json("ERROR!!!");
        }else{
            res.json("User Resgitered successfully");
        }
    });

    
});

app.get("/adduser",(req,res)=>{

    db.collection("patient detail").find().toArray((error, data)=>{

        if(error)
        {
            res.status(403).json("Error in Finding the login doc");
        }
        else {
            res.json(data);
        }
    });
   
});

app.get("/unamecheck/:Name",(req,res)=>{

    console.log(req.params.Name);
   db.collection("patient detail").find({Name:req.params.Name},{projection:{_id:1}}).toArray((error,data)=>{

    if(error)
        {
            res.status(403).json("Error in Finding the Patient Name Availablity");
        }
        else {
            res.json(data);
        }
   });
});

app.get("/getuser/:userid",(req,res)=>{
    console.log(req.params);
    db.collection("patient detail").find({_id:Number(req.params.userid)}).toArray((error,data)=>{

        if(error)
            {
                res.status(403).json("Error in Finding the Patient Name Availablity");
            }
            else {
                res.json(data);
            }
       });
    });
    
app.put("/updateuser",(req,res)=>{
    console.log(req.body);

    var con ={_id:req.body._id};
    var newvalue={$set:{Name:req.body.Name,email:req.body.email,date:req.body.date,Dose:req.body.Dose,Address:req.body.Address}};
    // res.json("successfully updated");
    db.collection("patient detail").update(con,newvalue,(error,data)=>{
        if(error){
            res.status(403).json("Error in Finding the Patient Name Availablity");
        }else{
            res.json("updated successfully");
        }
    })

});
app.delete("/deleteuser/:userid",(req,res)=>{

    console.log(req.params);
    db.collection("patient detail").deleteOne({_id:Number(req.params.userid)},(error,data)=>{
        res.json("patient detail deleted successfully!!");
    });
    
});

app.get("/search/:searchtxt?",(req,res)=>{
    console.log(req.params);
    if(req.params.searchtxt != undefined){

    
    var search=new RegExp(req.params.searchtxt,'i');
    var scond={Name:search};
    }
    else{
        var scond = null;
    }
    db.collection("patient detail").find(scond).toArray((error,data)=>{
        res.json(data);
    });
});

app.get("/adduseradmin",(req,res)=>{

    db.collection("patient detail").find().toArray((error, data)=>{

        if(error)
        {
            res.status(403).json("Error in Finding the login doc");
        }
        else {
            res.json(data);
        }
    });
   
});
app.get("/searc/:searchtx?",(req,res)=>{
    console.log(req.params);
    if(req.params.searchtx != undefined){

    
    var searc=new RegExp(req.params.searchtx,'i');
    var scond={Name:searc};
    }
    else{
        var scond = null;
    }
    db.collection("patient detail").find(scond).toArray((error,data)=>{
        res.json(data);
    });
});

app.post("/loginadmin", (req, res)=>{

    console.log(req.body);
   
    db.collection("loginadmin").find(req.body,{projection:{_id:1,useremail:1}}).toArray((error, data)=>{

        if(error)
        {
            res.status(403).json("Error in Finding the login doc");
        }
        else {
            res.json(data);
        }
    });
   
});


module.exports=app;
