//jshint esversion:6
var express=require("express");
var key="sk_test_51N0dGoSErXF10xxX0ASRSjRRzRn2DLIng1b03Pr2iCak7EKrHRU2v6MyxJFr4wJWjqn0EOmmfWRFTGGujNxPsh9400q28B7xN6";
var stripe=require("stripe")(key);
var stripe=require("stripe")(key);
const storeItems=new Map([
    [1,{price:10000,name:"item1"}],
    [2,{price:20000,name:"item2"}],
    [3,{price:20000,name:"Subscription"}]

]);
var bodyParser=require("body-parser");
// var ejs=require("ejs");
// const exp = require("constants");
// const e = require("express");
// const { userInfo } = require("os");
var app=express();
// app.set("view engine","ejs");
app.use(express.static(__dirname+"/build"));
// require("dotenv").config();
app.listen(8000,(req,res)=>{
    console.log("started11....!");
});
app.use(bodyParser.json());

// const md5=require("md5");
var bcrypt=require("bcrypt");
const saltRounds=10;
const mongoose=require("mongoose");

const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const e = require("express");

app.use(session({
    secret:"hii",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
// const encrypt=require("mongoose-encryption");

mongoose.connect("mongodb://127.0.0.1:27017/Authenticate",{useNewUrlParser:true});

const Schema1=new mongoose.Schema({
    username:String,
    password:String,
    
});
const Schema2 = new mongoose.Schema({
    title:String,
    content: String,
    Date:String,
    name:String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  
  const Text = mongoose.model('Text', Schema2);
// Schema1.plugin(encrypt,{secret:process.env.SECRET,encryptedFields:["password"]}); 
Schema1.plugin(passportLocalMongoose); 

const User=mongoose.model("User",Schema1);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// app.post("/",function(req,res){
//     // let content = req.body.content.replace(<br/>, "\n");///no ned of this in bottom2.js <p> tag will adjust the spacing but for line breaks instad of <p> use <textarea> in bottom2.js
//     console.log(req.body);
//     const date=new Date();
//     arr.push({"title":req.body.title,"content":req.body.content,"id":date});
//     res.send(arr);
//     // console.log(content);
//     // res.send("don");
//     // res.sendFile(__dirname+"/public/index2.html");
// });
app.post("/add",(req,res)=>{
    console.log(req.body);
    if(req.isAuthenticated())
    {
        const today = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const finalDate = today.toLocaleDateString('en-US', options);
        var name="";
        const ObjectId = mongoose.Types.ObjectId;

        User.findById(new ObjectId(req.user._id))
        .exec()
        .then(res2=>{
            console.log(res2);
            name=res2.username;
            console.log(res2+"check name using id");
            const text = new Text({
                title:req.body.title,
              content: req.body.content,
              Date:finalDate,
              user: req.user._id,
              name:name
            });
            text
            .save()
              .catch(err=> {
                console.log(err);
                // res.redirect('/secrets');
                res.send("error to add article");
              })
              .then(res1=> {
                console.log("saved");
                // res.redirect('/secrets');
                res.send("done")
              })
        })
        .catch(err=>{
            console.log(err);
        })
            
            
          
          
    }
    else{
        console.log("not authenticated");
    }
})
app.get("/about",(req,res)=>{
    console.log("about");
  res.send(arr);
})

app.get("/posts",(req,res)=>{
    console.log("get /posts");
    if(req.isAuthenticated())
    {
        Text.find({user:req.user._id})
        .exec()
        .then(res1=>{
            console.log(res1);
            var obj={
                name:"",
                arr:res1
            }
            const ObjectId = mongoose.Types.ObjectId;
            User.findById(new ObjectId(req.user._id))
            .exec()
            .then(res2=>{
                console.log(res2);
                obj.name=res2.username;
                res.send(obj);
            console.log(obj);
            })
            .catch(err=>{
                console.log(err);
            })
            
        })
        .catch(err=>{
            console.log(err);
            res.send("error");
        })
    }
    else{
        console.log("not authenticated");
    }
})
app.get("/articles",(req,res)=>{

    console.log("get /articles");
    if(req.isAuthenticated())
    {
        Text.find({user:{$ne:req.user._id}})
        .exec()
        .then(res1=>{
            console.log(res1);
            res.send(res1);
        })
        .catch(err=>{
            console.log(err);
            res.send("error");
        })
    }
    else{
        console.log("not authenticated");
    }
})

// app.get("/",(req,res)=>{
//   res.send(arr);
// })


app.get("/secrets",(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user._id+"hllo");
        // res.render("secrets");
        res.send(req.user._id);
    }
        else
        {
            console.log("not authenticated");
            res.send("not authenticatd");
        // res.redirect("/login");
        }
})

// app.post("/delete/:id",(req,res)=>{
//     var newarr=arr.filter(item=>item.id!=req.params.id);
//     arr=newarr;
//     res.send("deleted",arr);
// })
app.post("/delposts",(req,res)=>{
    console.log("post /delposts");
    console.log(req.body);
    Text.deleteOne({_id:req.body.id})
    .then(res1=>{
        console.log("succesfullt deleted");
    })
    .catch(err=>{
        console.log(err);
    })
})
app.post("/register",(req,res)=>{
    console.log("post register");
    User.register({username:req.body.username},req.body.password,(err,user)=>{
        if(err)
        {
            console.log(err);
            res.redirect("/register");
        }
        else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secrets");
            });
        }
    });
});

app.post("/login",(req,res)=>{
    console.log(req.body);
    const user=new User({
        username:req.body.username,
        password:req.body.password
    });
    req.login(user,(err)=>{
        if(err)
        {
            console.log("hey");
            res.redirect("/login");
        }
        
        else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secrets");
            })
        }
    })

})
// Schema1.methods.authenticate = function (password, callback) {
//     bcrypt.compare(password, this.password, function (err, result) {
//       if (err) {
//         return callback(err);
//       }
//       callback(null, result);
//     });
//   };
  

// app.post("/login",(req,res)=>{
//     console.log(req.body);
//     User.find({username:req.body.username})
//         .catch(err=>{
        
//             console.log("Error finding user:", err);
//             res.send("Error finding user");
//         })
//     .then(user=>{
        
//         // console.log(user);
//        if(!user)
//         {
//             console.log("User not found");
//             res.send("User not found");
//         }
//         else{
//             user.authenticate(req.body.password, (err, result) => {
//                 if (err) {
//                     console.log("Error authenticating user:", err);
//                     res.send("Error authenticating user");
//                 } else if (result) {
//                     req.session.userId = user._id;
//                     res.redirect("/secrets");
//                 } else {
//                     console.log("Invalid password");
//                     res.send("Invalid password");
//                 }
//             });
//         }
//         });
    
// });

app.post("/search",(req,res)=>{
    console.log("post /search");
    if(req.isAuthenticated())
    {
    const regex = new RegExp(req.body.search, "i"); // "i" for case-insensitive match
    Text.find({ title: { $regex: regex },user:{$ne:req.user._id} })
    .then(res1=>{
        console.log(res1);
        res.send(res1);
    }) 
    .catch(err=>{
        console.log(err);
    })
   }
   else{
    console.log("not authenticated");
   }
  // handle results or error
});

app.get("/subscribe_check",(req,res)=>{
    console.log("subsc_chck");
    if(req.isAuthenticated())
    {
        const ObjectId = mongoose.Types.ObjectId;
        User.findById(new ObjectId(req.user._id))
        .then(res1=>{
            console.log(res1);
            if(res1.subscribe=="true")
            res.send("yes")
            else
            res.send("No");
        })
        .catch(err=>{
            console.log(err);
        })
    }
    else{
        console.log("not authenticated");
    }
})

app.post("/subscribe",async(req,res)=>{
    console.log("post");
    console.log(req.body);
    try{
        const session=await stripe.checkout.sessions.create({
            payment_method_types:['card'],//payment methods
            mode:'payment',//for 1 tym payment like amazon shopping
            // mode:"subscription",//forsubscription
            line_items:req.body.items.map(item=>{//it is an aray of items that we're sending down that we want to purchase

                const storeItem=storeItems.get(item.id);//for each id in the req.body we're extracting the js object from the storeIems(se abv); if item.id=1 then we're exctracting {price:10000,name:"item1"} see line 8..
                return{//returning an object that is going to be in correct format  for stripe
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name:storeItem.name,
                        },
                        unit_amount:storeItem.price,
                    },
                    quantity:item.quantity,
                }//here u r sending data{js obj} to the stripe, it doesn't mean stripe is returning the data...
            }) ,
            success_url:`http://localhost:8000/success`,//where do u  want the user to be redirected after a succesful payment
            cancel_url:`http://localhost:8000/failure`,//where do u  want the user to be redirected after a failur payment

        })
        res.json({url:session.url})
    }
    catch(e){
        console.log(e);
        console.log('error');
        res.status(500).json({error:e.message})
    }
})
app.get("/success",(req,res)=>{
    if(req.isAuthenticated())
    {
        User.updateOne({ _id: req.user._id }, { $set: { subscribed: true } })
        .then(res1=>{
            console.log(res1);
            res.send(200);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        })
        

    }
    else{
        console.log("not authenticated");
    }
        
   
})

