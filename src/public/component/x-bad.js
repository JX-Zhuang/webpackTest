import xtag from 'x-tag';
import obj from '../scripts/index';
xtag.register('x-bad', {
	lifecycle:{
		created:function(){
			this.f = '';
		}
	},
    content: `<div class="box">
    <div class="out bad-out addBadEvent">
    </div>
    <div class="mask bad">
        <div class="arm">
        </div>
        <div class="finger big-finger"></div>
        <div class="hand">
            <div class="finger"></div>
            <div class="finger"></div>
            <div class="finger"></div>
            <div class="finger"></div>
        </div>
        <span class="show-num">+ 1</span>
    	</div>
	</div>`,
	methods:{
		show:function(e){
			if(e.target&&(e.target.className.match('addBadEvent')!=null)){
				var oSpan = e.target.nextElementSibling.querySelector('span');
				if(this.f)
					clearTimeout(this.f);
				this.f = setTimeout(()=>{
					obj.support.render();
					oSpan.style.opacity = '1';
        			oSpan.style.top = '-26px';
        			setTimeout(() => {
            			oSpan.style.opacity = '0';
            			oSpan.style.top = '-10px';
        			}, 500);
				},500);
			}
		}
	},
	events:{
		click:function(e){
			this.show(e);
		}
	}
});