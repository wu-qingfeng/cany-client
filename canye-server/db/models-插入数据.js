
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
// 通过Schema来创建Model
// Model代表的是数据库中的集合，通过Model才能数据库进行操作
// mongoose.model(modelName,schema);
// modelName 就是要映射的集合
var StuModel = mongoose.model("student" , stuSchema);

// 向数据库中插入一个文档
//StuModel.create({},function(err){});
StuModel.create({
  name:"孙悟空",
  age:23,
  gender:"男",
  address:"花果山"
},function(err){
  if(!err){
    console.log("数据添加成功···");
  }
});



// 3. 向外暴露
module.exports = {
  getModel(name) {
    return mongoose.model(name)
  }
}

