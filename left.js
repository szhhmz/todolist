const STORAGE_KEY = 'sun';
var store={
	fetch: function () {
        return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save: function (items) {
        window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(items))
    }
};

var vm = new Vue({
	el:'#list',
	data:{
		newList:{
			id:0,
			listname:'',
			listhref:'todolist.html',
			// taskname:'待办事项'
		},
		 lists:store.fetch()
	},
	methods:{
		createList: function () {
			this.lists.push(this.newList);
			// 添加完newList后，重置newList
			this.newList={listname:'',listhref:'todolist.html'};
		},
		deleteList: function (index) {
			this.lists.splice(index,1);
		},
		logout:function(){
			alert("注销成功");
			window.parent.location.href='login.html';
		}
	},
	watch:{           //监控功能
		lists:{
	  	 	handler:function(lists){
		        store.save(lists);
		        console.log(store.fetch());
	   		},
  	    	deep:true          //深监控
		}
	}
});