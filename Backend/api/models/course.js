var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    course_no:{type:String,required:true,unique:true},
    course_name:{type:String,required:true,unique:true},
    department_no:{type:String,required:true},
    faculty_id:{type:String,required:true}
});

module.exports = mongoose.model('Course',courseSchema);