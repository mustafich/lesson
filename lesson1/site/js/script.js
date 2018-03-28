var yourBudget = prompt("Ваш бюджет");
var nameShop = prompt("Название вашего магазна");
var shopGoods ;
var mainList ;
var employers ;

mainList = {
	yourBudget: 0,// числовое знеачени
	nameShop: "",// строчное значение
	shopGoods: [], //масив
	employers: {}, //обьект
	open: false // буливое
}

mainList.shopGoods[0] = prompt("Какой тип товаров будет продоваться?");
mainList.shopGoods[1] = prompt("Какой тип товаров будет продоваться?");
mainList.shopGoods[2] = prompt("Какой тип товаров будет продоваться?");

alert(mainList.yourBudget / 30);
 

console.log(mainList);