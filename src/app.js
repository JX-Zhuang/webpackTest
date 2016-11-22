/**
 * 项目测试
 */
'use strict';
/**
 * 引入模块
 */
/**
 * koa2
 */
import Koa from 'koa';
/**
 * 静态资源库
 */
import serve from 'koa-static'; 
/**
 * 路由
 */
import router from 'koa-simple-router';
import controllers from './controllers/controllersInit';

/**
 * 模版
 */
import render from 'koa-swig';
import co from 'co';
/**
 * 配置文件
 */
import config from './conf/config';
/**
 * 引入babel 兼容
 */
import 'babel-polyfill';
const app = new Koa();
/**
 * 静态文件
 */
app.use(serve(__dirname+''));
/**
 * controller
 */
controllers.getAllrouters(app,router);
/**
 * 渲染
 */
app.context.render = co.wrap(render({
	writeBady:false
}));
app.listen(config.get('port'));
console.log('服务成功开启：','http://127.0.0.1:5560/');

export default app;




