//関数宣言
function fn(number) {
	return number * 2;
}
//関数式
const fn = function (number) {
	return number * 2;
};
//関数式のアロー関数
const fn = (number) => {
	return number * 2;
};
//関数式のアロー関数の省略記法
const fn = (number) => number * 2;

const sum = (callback) => {
	return callback(4);
};

const result = sum((number) => {
	return number + 2;
});

console.log(result);

//関数の形
//関数の使い方
//関数の形を覚えよう
//コールバックの使い方
//addEventLinstenrは何してる？
