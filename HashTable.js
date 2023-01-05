

class HashTable {
    constructor(size){
        this.arr = new Array(size)
         this.size = size
        console.log(this.arr);
    }

    hashFunction(str){
        str = str + ''
        let sum = 0
        for(let i = 0; i < str.length; i++){
            sum = sum + str.charCodeAt(i)
        }
        let index = sum % this.size
        console.log({str, index});
        return index
    }

    set(value){
        let index = this.hashFunction(value)

        let resultArr = this.arr[index]
        if (resultArr === undefined) {
            resultArr = [value]
        }
        else {
            resultArr.push(value)
        }
        console.log(resultArr);
        this.arr[index] = resultArr
    }

    get(value){
        let index = this.hashFunction(value)
        let resultArr = this.arr[index]
        console.log(resultArr);

        // linear Search
        for(let i = 0; i < resultArr.length; i++){
            if (resultArr[i] === value) {
                return true
            }
        }
        return false
    }
}

let hash = new HashTable(5)

hash.set('apple')
hash.set('banana')
hash.set('mango')
hash.set('jack-fruit')
hash.set('Lichi')
hash.set('e')
hash.set('guava')
hash.set('Leemon')
hash.set('era')
hash.set('3')




console.log(hash.arr);

console.log(hash.get('banana'));
console.log(hash.get('apple'));
console.log(hash.get('era'));
console.log(hash.get('Leemon'));
console.log(hash.get('leemon'));
console.log(hash.get('jack-fruit'));


