

function twoSum(arr, target) {
   let resultArr = []
    let numbers = {}
for (let i = 0; i < arr.length; i++){
    numbers[arr[i]] = arr[i]
}
console.log(numbers);

for (const key in numbers) {
   let value = target - key
   if (numbers[value]) {
    console.log({a: numbers[key], b: numbers[value]});
    
   }

    console.log(resultArr);
}
}

twoSum([2,7,11,15], 9)