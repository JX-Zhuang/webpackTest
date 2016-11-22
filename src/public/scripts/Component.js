/**
 * 组件类
 */
class Component{
	/**
	 * 构造函数
	 */
	constructor(element,event){
		/**
		 * 页面元素
		 */
		this.element = element ;
		/**
		 * 事件
		 */
		this.event = event;
		/**
		 * 事件稀释
		 */
		this.f;
	}
	/**
	 * 事件绑定
	 */
	bind(){
		document.addEventListener('click',(e)=>{
			if(e.target&&(e.target.className.match(this.element))!=null){
				this.render();
			}
		});
	}
	/**
	 * 事件执行方法
	 */
	render(){

	}
}
export default Component;

