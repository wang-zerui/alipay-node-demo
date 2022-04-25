/*
 这个自定义模块用来进行 mysql 数据库订单的增加和查询功能
*/

// 引入 mysql 模块
const mysql = require('mysql');

// 配置 mysql
const mysqlConfig = {
    host: 'rm-bp1ktvu431e349e777o.mysql.rds.aliyuncs.com', // 数据库主机名
    port: '2333', // 端口号
    user: 'xinwuyun', // 用户名
    password: 'wangzerui@142536', // 密码
    database: 'alipay', // 数据库名
}

// 封装查询函数
function selectSql(sqlstr,callback) {
    // 建立数据库连接
    let sql = mysql.createConnection(mysqlConfig);
    let result = null;
    if (sql) {
        sql.query(sqlstr, callback);
        // 关闭数据库连接
        sql.end();
    }
}

// 封装添加函数
function addSql(sqlstr,callback) {
    var con = mysql.createConnection(mysqlConfig);
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sqlstr, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

// 将两个数据库操作方法暴露
module.exports = {
    selectSql: selectSql,
    addSql: addSql
}