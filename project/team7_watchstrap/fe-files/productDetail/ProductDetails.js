import { getProduct } from '../modules/product.mjs';

let productUrl = "http://34.64.218.104:5002/products";
let prod_num = 1;

// 상품 product로 받아오기
let product = await getProduct(productUrl, prod_num);
console.log(product);


//상품 분류
let category = document.getElementById('category');

// 상품 분류(kind)가 애플(0)인 경우 애플로 표시 + 애플 카테고리 링크 걸기
if (product['kind'] === 1) category.innerHTML="갤럭시";
// 상품 분류(kind)가 갤럭시(1)인 경우 갤럭시로 표시 + 갤럭시 카테고리 링크 걸기
else category.innerHTML="애플";

//상품 이름
let name = document.getElementById('productName');
name.innerText = product['name'];

//상품 설명
let complain = document.getElementById('productExplain');
complain.innerText = product['content'];

//상품 가격
let price = document.getElementById('productPrice');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

price.innerText = '₩ ' + numberWithCommas(product['price']);

//상품 할인 가격
let salePrice = document.getElementById('productSalePrice');
let calPrice = parseInt(product['price'] * 0.9);
salePrice.innerText = '₩ ' + numberWithCommas(calPrice);