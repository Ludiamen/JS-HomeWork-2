// Каталог товаров в виде массива объектов, содержащих поля:

//  id            Код товара
//  name          Наименование
//  description   Описание
//  sizes         массив возможных размеров
//  price         цена товара
//  available     Признак доступности для продажи

// Создайте в коде несколько (не менее 5) товаров в каталоге

let catalog = {
    1 : {
        id: 1,
        name: "Рубашка белая мужская",
        description: "хлопок 100%",
        sizes: ["48", "50", "52", "54"],
        price: 1500,
        available: true,
    },
    2 : {
        id: 2,
        name: "Рубашка черная женская",
        description: "хлопок 100 %",
        sizes: ["36", "38", "40", "42", "44"],
        price: 2100,
        available: true
    },
    3 : {
        id: 3,
        name: "Рубашка розовая детская",
        description: "хлопок 100 %",
        sizes: ["28", "30", "32", "34", "36"],
        price: 1700,
        available: true
    },
    4 : {
        id: 4,
        name: "Джинсы мужские синие",
        description: "хлопок 100 %",
        sizes: ["48", "50", "52", "54"],
        price: 3500,
        available: false
    },
    5 : {
        id: 5,
        name: "Брюки женские черные",
        description: "хлопок 100 %",
        sizes: ["36", "38", "40", "42", "44"],
        price: 4000,
        available: false
    },
};


// Корзина в виде массива объектов, содержащих поля:

// good           ссылка на товар в каталоге
// amount         количество товара в корзине

// и несколько (не менее 2) товаров в корзине.
let basket = [
    {
        good: 1,
        amount: 3,
    },
    {
        good: 2,
        amount: 2,
    },
    {
        good: 3,
        amount: 1,
    },
];



// Реализуйте функции добавления товара в корзину и удаления одного товара из нее, а также функцию полной очистки корзины.

// Реализуйте функции добавления товара в корзину
function addOneGood(good, amount) {
    if (catalog[good].available === true) {
        basket.push({"good": good, "amount": +amount});
    }
    else {
        console.log("the product is not available for order")
    };
};
// Тест функции
// console.log(addOneGood(process.argv[2], process.argv[3]));

// и удаления одного товара из нее
function delOneGood(good) {
    basket.splice(good, 1); // так можно удалить элемент
    return basket;
};
// Тест функции
// console.log(delOneGood(process.argv[2]));

// а также функцию полной очистки корзины.
function clearBasket() {
    basket.splice(0, basket.length); 
    return basket;
};
// Тест функции
// console.log(clearBasket());


// Реализуйте функцию вычисления общего количества и стоимости товаров в корзине. Функция должна возвращать объект, содержащий поля:

// totalAmount    Общее количество товаров в корзине
// totalSumm      Общая стоимость товаров в корзине

function total() {

    let totalSumm = 0;
    let totalAmount = 0;

    for (let basketPosition = 0; basketPosition < basket.length; basketPosition++) {
        totalSumm = totalSumm + basket[basketPosition].amount * catalog[basket[basketPosition].good].price;
        totalAmount = totalAmount + basket[basketPosition].amount;
    };

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        };
    return totals;
};

// Тест функции
// console.log(total());