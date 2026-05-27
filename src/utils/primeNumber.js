function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const findPrime = (n)=>{
    let count = 0;
    let num = 2;
    
    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        num++;
    }
    return num - 1;
}

export default findPrime;
