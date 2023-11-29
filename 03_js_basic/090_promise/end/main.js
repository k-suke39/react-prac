//Promoiseは非同期オブジェクト
//非同期の時点でresolveもしくはrejectプロパティを持った
//resolveを使うと、thenが実行される
//rejectが実行されると、
//メソッドチェーン見づらいよね
//async/await使おうぜ

//非同期におけるcallback問題
//①callback地獄
//try/catchの中に書いてもエラーになる、catchするには
//非同期の中でtrycatchする必要がある

//第一引数にcallbackを指定する必要がある
//PromiseStateがpending
//PromiseResultがundefined
//let promise = new Promise(() => {});
//console.log(promise);

//PromiseStateがfullfileed
//PromiseResultがhello
//then、finallyが呼ばれる

//PromiseStateがrejected
//PromiseResultがhello
const promise = new Promise((resolve, reject) => {
	reject('reject');
});

promise.then((value) => {
	console.log(value);
	console.log('then呼ばれたー');
});

promise.catch((value) => {
	console.log(value);
	console.log('catch呼ばれたー');
});

promise.finally((value) => {
	console.log(value);
	console.log('finally呼ばれたー');
});
