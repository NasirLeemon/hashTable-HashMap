

function janina(str){
    let result = ''
    let numbers = {
        0 : 'Zero',
        1 : 'One',
        2: 'Two' ,
        3 : 'Three',
        4 : 'Four',
        5 : 'Five',
        6 : 'six',
        7 : 'Seven',
        8 : 'Eight',
        9 : 'Nine'

    }
    for(let i = 0; i < str.length; i++){
        console.log(numbers[str[i]]);
        result = result + " " + numbers[str[i]]
        
       
    }
    return result

}
console.log(janina('912237595079'));
