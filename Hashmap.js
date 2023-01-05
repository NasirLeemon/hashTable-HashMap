

class Hashmap{
    constructor(){
        this.map = {}
    }

    put(key, value){
        this.map[key] = value
    }

    get(key){
        return this.map[key] 
    }

    remove(key){
        delete this.map[key]
    }

}

let map = new Hashmap()

map.put('name','Leemon')
map.put('age', 27)
map.put('email', 'leemon174@gmail.com')
map.put('gender', 'male')


console.log(map.get('name'));
console.log(map.get('age'));

console.log(map.map);

map.remove('age')
// map.remove('email')
// map.remove('gender')
// map.remove('name')


console.log(map.map);
