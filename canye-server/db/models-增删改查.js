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

var stuModel = mongoose.model("student" , stuSchema);

// 有了Model,我们就可以来对数据库进行增删改查操作
//  stuModel.create([
//    {
//      name: "白骨精",
//      age: 28,
//      gender: "male",
//      address: "白骨洞"
//    }
//  ],function(err){
//    if(!err){
//      console.log("插入成功··");
//      console.log(arguments);
//    }
//  })    // 插入数据一个或多个

  /*
  *    Model.find(conditions,[projection],[options],[callback])
  *       - 查询所有复合条件的文档
   *   Model.findById(id,[projection],[options],[callback])
   *      - 根据文档的id属性查询文档
   *   Model.findOne([conditions],[projection],[options],[callback])
   *      - 查询符合条件的第一个文档
   *    conditions  查询条件
   *    projection  投影
   *    options     查询选项（skip,limit）
   *    callback    回调函数，查询结果会通过回调函数返回
   *            回调函数必须传，如果不传回调函数，压根不会查询
  * */

  //stuModel.find({name:"唐僧"},{name:1,age:1,gender:1,address:1,_id:0},function (err , docs) {
  //  if(!err) {
  //    console.log('查询返回的值： ', docs);
  //  }
  //});
  //  stuModel.find({},"-_id name age gender address",{skip:2,limit:2},function (err , docs) {
  //      if(!err) {
  //        console.log('查询返回的值： ', docs);
  //      }
  //  });
  //stuModel.findOne({},function (err , docs) {
  //    if(!err) {
  //      console.log('查询返回的值： ', docs);
  //    }
  //});

  //stuModel.findById("5e09db11079c147e54d6b506" , function(err,doc){
  //  if (!err) {
  //    // console.log(doc);
  //    // 通过find() 查询的结果，返回的对象， 就是Document，文档对象
  //    // Document对象是Model的实例
  //    console.log(doc instanceof stuModel);
  //  }
  //});

  /*
  *   修改
  *     Model.update (conditions, doc, [options], [callback]);
  *     Model.updateMany (conditions, doc, [options], [callback]);
  *     Model.updateOne (conditions, doc, [options], [callback]);
  *           - 用来修改一个或多个文档
  *           - 参数：
  *             conditions    查询条件
  *             doc           修改后的对象
  *             options       配置参数
  *             callback      回调函数
  * */

// 修改唐僧的年龄为20
//stuModel.updateOne({name:"沙和尚"},{$set:{age:25}},function(err){
//  if(!err){
//    console.log("修改成功~~~");
//  }
//})

/*
*   删除
*       Model.remove (conditions, [callback])
*       Model.deleteOne (conditions, [callback])
*       Model.deleteMany (conditions, [callback])
* */
//stuModel.deleteOne({name:"白骨精"},function(err){
//  if(!err){
//    console.log("删除成功！");
//  }
//})

//    stuModel.count(conditions,[callback])    //  统计文档数量   将在未来废弃
//    stuModel.countDocuments(conditions,[callback])    // 代替

stuModel.countDocuments({},function(err,count){
  if(!err){
    console.log("总计： ",count);
  }
});

module.exports = {
  getModel(name) {
    return mongoose.model(name)
  }
}






