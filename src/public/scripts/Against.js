/**
 * 点赞类
 */
import Component from './Component.js';
import axios from 'axios';
import add from '../common/add';
/**
 * 继承父类
 */
class Against extends Component {
    constructor(element, event, num) {
            /**
             * 调用父类的构造函数
             */
            super(element, event);
            this.num = num;
        }
        /**
         * 重写事件执行方法
         */
    render() {
        this.num = add(this.num);
        axios.get('/add?num=' + this.num)
            .then(function(response) {
                console.log(response.data.msg);
                return true;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
export default Support;