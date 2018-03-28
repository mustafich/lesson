var yourBudget = prompt("Ваш бюджет");
var nameShop = prompt("Название вашего магазна")

var mainList = {
	yourBudget: yourBudget,
	nameShop: nameShop,
	shopGoods: [],
	employers: {},
	open: false 
}

mainList.shopGoods[0] = prompt("Какой тип товаров будет продоваться?");
mainList.shopGoods[1] = prompt("Какой тип товаров будет продоваться?");
mainList.shopGoods[2] = prompt("Какой тип товаров будет продоваться?");

alert(mainList.yourBudget / 30);
 

console.log(mainList);