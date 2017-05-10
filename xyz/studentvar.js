var mongoose=require('mongoose');
var studentSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phn:{
        type:String,
        required:true
    },
});
var Student=module.exports=mongoose.model('studentcollections',studentSchema);

module.exports.addStudent=function(student,callback){
    Student.create(student,callback);
}
//retrieving 
module.exports.getDetails=function(callback,limit){
    Student.find(callback).limit(limit);
}

module.exports.getStudentByField=function(name,callback){
    console.log(name)
    Student.find({name:name},callback);
}
module.exports.remStudentByField=function(name,callback){
    console.log(name)
    Student.remove({name:name},callback);
}


module.exports.update=function(conditions,update,options,callback){
    Student.findOneAndUpdate(conditions,update,options,callback);
}









