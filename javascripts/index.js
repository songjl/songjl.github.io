/**
 * Created by windknow on 16/4/17.
 */
var maxnumofpost = 10;
var blogitem=[
    {title:"基于jquery和bootstrap的下拉树组件",date:"2016-04-16",tag:"jquery,bootstrap"},
    {title:"基于jquery的批量树表编辑插件",date:"2016-04-22",tag:"jquery,bootstrap"},
    {title:"css3实现一个超炫的开关效果",date:"2016-04-27",tag:"css3"},
    {title:"基于jquery的地区选择组件",date:"2016-06-01",tag:"jquery areaselect"}
]
function init(){
    var bloglist = [];
    var bloglistEl = document.getElementById("bloglist");
    for(var i=blogitem.length;i>0;i--){
        var _href = "post/post_"+i+".html";
        var _li = document.createElement("li");
        var _a = document.createElement("a");
        _a.setAttribute("href",_href);
        _a.innerText=blogitem[i-1].title;
        var _date = document.createElement("span");
        _date.classList.add("blog-date");
        _date.innerText=blogitem[i-1].date;
        _li.appendChild(_a);
        _li.appendChild(_date);
        bloglistEl.appendChild(_li);
    }
}

init();
