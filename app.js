let numbers=[];

function getArray(){
    const input=document.getElementById("arrayInput").value;
    numbers=input.split(",")
    .map((num)=>parseFloat(num.trim()))
    .filter((num)=>!isNaN(num));
}

function displayResult(text){
    document.getElementById("result").innerText=text;
}

function sortArray(){
    getArray();
    displayResult("Ascending Sorted:"+numbers.sort((a,b)=>
    a-b))
}

function findEven(){
    getArray();
    displayResult("Evens:"+numbers.filter((num)=>num%2===0));
}

function findPrimes(){
    getArray();
    function isPrime(num){
        if(num<2 ) return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0) return false;
        }
        return true;
    }
    displayResult("Primes: "+numbers.filter(isPrime));
}

function findOdds(){
    getArray();
    displayResult("Odds: "+numbers.filter((num)=>num%2!==0));
}

function findMax(){
    getArray();
    displayResult("Max: "+Math.max(...numbers));
}

function findMin(){
    getArray();
    displayResult("Min: "+Math.min(...numbers));
}

function findSum(){
    getArray();
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    displayResult("Sum: " + sum);
}

function findAverage(){
    getArray();
    if (numbers.length === 0) {
        displayResult("Average: N/A");
        return;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;
    displayResult("Average: " + avg);
}

function findDuplicates() {
  getArray();
  const duplicates = numbers.filter(
    (num, index, arr) => arr.indexOf(num) !== index
  );
  displayResult("Duplicates: " + (duplicates.length ? duplicates : "None"));
}

function removeDuplicates(){
    getArray();
    const filteredArr = Array.from(new Set(numbers));
    displayResult("Remove Dulicates: "+filteredArr);
}

 function reverseArray(){
    getArray();
    displayResult("Reverse: "+numbers.reverse());
}


function findSquares(){
    getArray();
    const squared = numbers.map(num => num * num);
    displayResult("Squares: "+squared);
}

function findMedian(){
    getArray();
    if (numbers.length === 0) {
        displayResult("Median: N/A");
        return;
    }
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    let median;
    if (sorted.length % 2 === 0) {
        median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        median = sorted[mid];
    }
    displayResult("Median: " + median);
}

function findMode(){
    getArray();
    if (numbers.length === 0) {
        displayResult("Mode: N/A");
        return;
    }
    const freq = {};
    numbers.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(freq));
    const modes = Object.keys(freq)
        .filter(num => freq[num] === maxFreq)
        .map(Number);
    displayResult("Mode: " + (modes.length === numbers.length ? "No mode" :modes.join("," )));
}

function factorial(){
    getArray();
    function fact(n) {
        if (n < 0) return "NaN";
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) {
            res *= i;
        }
        return res;
    }
    const result = numbers.map(num => fact(Math.floor(num)));
    displayResult("Factorials: "+result);
}
function filter() {
  getArray();
  const value = parseFloat(document.getElementById("value").value);
  if (!isNaN(value)) {
    displayResult("Filtered: " + numbers.filter((num) => num > value));
  } else {
    displayResult("Enter a valid number for filtering");
  }
}

