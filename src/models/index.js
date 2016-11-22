'use strict';
import mysql from 'mysql-promise';
let db = mysql();
db.configure({
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "express"
});
const indexModel = {
    add(num) {
        // return (async() => {
        //     const promise = await new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve(++num);
        //             console.log(1,num);
        //         }, 1000);
        //     });
        //     console.log(2,promise);
        //     const result = await new Promise((resolve, reject)=>{
        //     	setTimeout(() => {
        //     		resolve(num*5);
        //            	console.log(3,num);
        //         }, 1000);
        //     });
        //     console.log('r',result)
        //     return result;
        // })();
        return (async() => {
            const promise = await new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(++num);
                }, 1000);
            });
            const result = await new Promise((resolve, reject) => {
                // setTimeout(() => {
                // 	resolve(num*5);
                //       	console.log(3,num);
                //   }, 1000);
                db.query('UPDATE num SET num = ? where id = 1', [promise]).then((result) => {
                	console.log(result[0].changedRows);
                	resolve({
                		msg:'ok'
                	});
                	return db.query('SELECT * FROM num');
                }).spread(function (rows) {
                	console.log(99)
    				console.log('Loook at all the foo', rows);
				});
            });
            return result;
        })();
    }
}
export default indexModel;