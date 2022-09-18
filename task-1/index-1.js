let arrPrimeNum = [2];
let nextPrimeNum = 1;

function primeNumber(numOfNumbers) {   
    while (arrPrimeNum.length<numOfNumbers) {
        nextPrimeNum = nextPrimeNum + 2;
        let primeFlag = true;
        let limitNum = Math.floor(Math.sqrt(nextPrimeNum));
        for (let i = 0; (i<=arrPrimeNum.length-1 && arrPrimeNum[i]<=limitNum); i++) {
            if (nextPrimeNum % arrPrimeNum[i] === 0) {
                primeFlag = false;
                break;            
            };
        };
        if (primeFlag === true) {
            arrPrimeNum.push(nextPrimeNum);
            };
    };

    return arrPrimeNum;
};

console.time();
console.log(primeNumber(process.argv[2]));
console.timeEnd();
