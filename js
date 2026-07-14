const data={
"客厅空间":["沙发","电视柜","茶几","边几","玄关柜","装饰柜","博古架","隔断柜","斗柜","鞋柜","换鞋凳","落地衣帽架"],
"餐厅空间":["长方形餐桌","圆形餐桌","餐椅","餐边柜","酒柜"],
"卧室空间":["实木床","软包床","床垫","床头柜","梳妆台","衣柜","折叠沙发床","上下铺","单人床"],
"书房 / 办公空间":["书桌","电脑桌","书柜","书架","办公椅","文件柜","阅读躺椅"],
"阳台空间":["阳台茶桌椅","休闲吊椅","藤椅","单人沙发"]
};

const app=document.getElementById("app");

function showHome(){
let html='<div class="container"><h2>家具空间分类</h2><div class="grid">';
Object.keys(data).forEach(x=>{
html+=`<div class="card" onclick="showCategory('${x}')">${x}</div>`;
});
html+='</div></div>';
app.innerHTML=html;
}

function showCategory(name){
let html=`<div class="container"><button onclick="showHome()">返回首页</button><h2>${name}</h2><div class="grid">`;
data[name].forEach(x=>{
html+=`<div class="card" onclick="showProducts('${name}','${x}')">${x}</div>`;
});
html+='</div></div>';
app.innerHTML=html;
}

function showProducts(space,type){
let folder=`images/${space}/${type}/`;
let html=`<div class="container"><button onclick="showCategory('${space}')">返回分类</button><h2>${type}</h2><div class="gallery">`;
for(let i=1;i<=20;i++){
html+=`<img src="${folder}${i}.jpg" onerror="this.style.display='none'">`;
}
html+='</div></div>';
app.innerHTML=html;
}

showHome();
