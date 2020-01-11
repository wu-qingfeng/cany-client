// 1. 连接数据库
const mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost:27017/test',
      { useNewUrlParser: true,useUnifiedTopology: true });
const conn = mongoose.connection
conn.on('connected', function () {
  console.log('数据库连接成功!')
})


// 创建mongose(模式) 对象
var Schema = mongoose.Schema
var stuSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    defaults: "female"
  },
  address: String,
})

var StuModel = mongoose.model("student" , stuSchema);

/*
 *  document   和 集合中的文档 一一对应  Document是Model的实例
 *       通过Model查询到结果都是Document
 */
// 创建一个Document

var stu = new StuModel({
  name: "蜘蛛精",
  age: 28,
  gender: "male",
  address: "盘丝洞"
});
//
//stu.save(function(err,pro){
//  if(!err){
//    console.log("保存成功", pro );
//  }
//});
StuModel.findOne({},function(err,doc){
  if(!err){
    doc.updateOne({$set:{age:25}},function(err){
      if(!err){
        console.log("更新成功！");
      }
    });
    // doc.deleteOne()  可以修改删除

  }
});

module.exports = {
  getModel(name) {
    return mongoose.model(name)
  }
}






