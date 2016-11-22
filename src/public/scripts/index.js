import Support from './Support.js';
window.$={};
$.support = function  (className,event,num) {
	return new Support(className,event,num);
}

let support = $.support('addGoodEvent', 'click', 0);
let against = $.support('addBadEvent', 'click', 0);

let obj = {
	support:support,
	against:against
}
export default obj; 
