export const getUsers = (req,res)=>{
    res.send('users')
}

//MONGODB 

//DATABASE => query => users fetch =>  users/10

//js=> /java , c++ 

//database => concept =>  //mysql => sql language //postgres => sql
//angular =< js react => js , vue => js


database => sql => mysql , postgres , nosql => mongodb

tables => row , column 
user => id , name , email , age

//mongodb =>  community server 27017 

//project develop => movies 

//LEVEL 1 DATABASE CREATE => MOVIES 
//LEVEL 2  MOVIES  , USERS => subfolder => collections
//LEVEL 3 document => 50 movies 

// client setup , server setup => conntect mongdb server
//db //collection => crud => create docuemtn , read docuemtn , update docuemnt , delete docuemnt

// 100 => 10 , 20 50 => ordres => concat => 500

//level 1 => movies-db 
//level 2 => ON THE BASIS OF RESOURCE YOU ARE GOING TO CREATE COLLECTION IN THE DB =>  movies collection / users => collection
//level 3 db.users.insertOne() , db.movies.insertOne //create //retrieve //udpate //delete

//NOTE users => tables => name , email , password  //nosql => no structure document

//NOTE create operation in the db => ui form => post  
//NOTE read => read all data , speific single data, filter k accroding data read karna hain
//NOTE how find query works => if data avaible array of object 
//NOTE if data is not avaible => empty []


// // if(!user){
// console.log('please register and try again')}

//filter  //query params => ui => server
// age,email , name  

// http://localhost:3000/user?age=23&email=test@gmail.com

// age > 34 , age < 30 , age = 34  , age !=40 
db.users.find({age : {$gt : 34}})
db.users.find({field : {$operatorName : value}})

//NOTE comparison operators in find method
//   greater than => $gt 
//   less than => $lt 
//   eqaul => $eq 
//   not equal => $ne 
//   greater than equal => $gte 
//   less than equal => $lte
// $in  => in  ['delhi; , "NEW YORK"]
// $nin => not

//NOTE LOGICAL OPERATORS IN FIND METHOD

// $or & $and $nor $not

db.users.find({$or : [{age : {$gt : 35}},{name : "ritesh"}]})

//NOTE PROJECTION => db.users.find({}, {name : 1 , email : 1 , _id : 0})

//document fetch => name ,email , age => db.users.find({},{email : 1 })
// 1 => include , 0 => exclude 

//NOTE PAGINATION USING BACKEND 
//http://localhost:3000/users?limit=10&page=3
// limit = 10 
// page = 3
// db.users.find().skip((page-1) * limit).limit(limit).sort({age : 1})