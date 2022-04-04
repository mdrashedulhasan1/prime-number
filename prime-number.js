function primeNumber(n){
    for(var i=2; i<n; i++){
        if(n%i==0){
            return 'Not a prime number';
        }
    }
    return 'Prime Number';
}
var primeNumber = primeNumber(9);
console.log(primeNumber);