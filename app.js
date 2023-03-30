const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const routes = require("./route")
const mongojs = require("mongojs")



const db = mongojs("bookstore",["books"])
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.get("/",(req,res)=>{

    res.sendFile(__dirname + "/index.html")
})
 app.get("/api/books",(req,res)=>{
   
     db.books.find(function(err,data){
         if(err){
             return res.sendStatus(500)
         }else{
             const neee = data[0].email
             const nam = data[0].author
             const title = data[0].title


             return res.status(200).json({
                 meta : {total : data.length - 1},
                 data
             })
                
         }
     })
 })

 app.post("/api/:id" ,(req,res)=>{
     var no1 = req.body.num1
     var no2 = req.body.num2
     var result = no1 + no2
     let para = req.params.id
    
     if(para ==="delete"){
        return  res.send(db.books.remove({email : `${no1}`}))
     }else{
         return res.send(db.books.insert({email : `${no1}` , price : `${no2}`} ))
     }
    
 })
app.get("/api/:id",(req,res)=>{
    
    return res.sendFile(__dirname + "/abc.html")
})



app.listen(8000,()=>{
    console.log("Server is running at port 8000");
})


// [
//     {
//         "title" : "Js Cheetsheet Book",
//         "author" : "Michale Stans",
//         "pages" :   342,
//         "genres" : ["Learning" , "Self-study"],
//         "rating" : 7
      
//     },
//     {
//         "title" : "Absalom, Absalom!",
//         "author" : "William Faulkner",
//         "pages" : 986,
//         "genres" : ["Bible"],
//         "rating" : 10
      
//     },
//     {
//         "title" : "Darkness Visible",
//         "author" : "Philip Reeve",
//         "pages" : 400,
//         "genres" : ["Thinking" , "Christian"],
//         "rating" : 7
      
//     },
//     {
//         "title" : "Js Cheetsheet Book",
//         "author" : "Michale Stans",
//         "pages" : 1000,
//         "genres" : ["Christianity" , "Freemasonry"],
//         "rating" : 5
      
//     },
//     {
//         "title" : "A Fanatic Heart",
//         "author" : "Edna O'Brien",
//         "pages" : 400,
//         "genres" : ["love"],
//         "rating" : 3
      
//     }
// ]


// {
//     "name" : "Bobo",
//     "nrc": "A0131",
//     "trip": {
//         "from": "Yangon",
//         "to": "Mandalay",
//         "vehicle": {
//             "type": "car",
//             "license": "5B9876"
//                   }
//           }
// }