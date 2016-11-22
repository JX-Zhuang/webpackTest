'use strict';
import indexModel from '../models/index';
const indexController = {
    index() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('index', {
                title: '点赞'
            });
        };
    },
    getData() {
        return async(ctx, next) => {
            ctx.body = await indexModel.add(ctx.query.num);
        }
    }
};
export default indexController;