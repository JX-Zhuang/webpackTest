'use strict';
import index from './indexControllers';
const controllerInit = {
	getAllrouters(app,router){
		app.use(router(_=>{
			_.get('/',index.index());
			_.get('/add',index.getData());
		}));
	}
};
export default controllerInit;