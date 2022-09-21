let products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'img/1.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'img/2.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'img/3.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'img/4.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
let renderProduct = item => {
    return `<div class="product-item">
                <img class="img-product-item" src='${item.img}'>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
/**
 * по умолчанию элементы массива выводятся через запятую
 *  метод join позволяет изменить разделитель
 */
let renderPage = list => {
    let productsList = list.map(item => renderProduct(item));
    productsList = productsList.join('');
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);


