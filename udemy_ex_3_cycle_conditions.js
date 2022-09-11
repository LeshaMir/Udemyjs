/*
При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
*/

function firstTask(from,to) {
    do{
        console.log(from)
        from++;
    }
    while(from <= to);
} 

firstTask(5, 10);


function secondTask(from, to){
    for( i = from; i >= to; i-- ){
        console.log(i);
        if ( i === 13) break;
    }
}

secondTask(20, 10);


function thirdTask(from, to){
    for (i = from; i <= to;  i++){
        if( i % 2 == 0 ) console.log(i);
    }
}

/* Need to rewrite cycle */
function fourTask(num){
    while( num < 16){
        if( num%2 !== 0){
          console.log(num);
        }
        num++;
    }
}

function fiveTask(){
    let arr = [];
    let num = 5;
    while( num <= 10 ){
        arr.push(num);
        console.log(num);
        num++;
    }
    console.log(arr)
}


/* 
    Cycle additional tasks
*/

function firstTaskAdditional(){
 let arr = [5,6,7,8,9,10];
 let result = [];

  for ( i=0; i < arr.length; i++){
    result.push(arr[i]);
  }
  return result;
}


function secondTaskAdditional(){
  let arr = [ 5, 10, 'Shopping', 20, 'Homework' ];
  
  for (i=0; i < arr.length; i++){
      if ( typeof(arr[i]) == 'string' ){
        arr[i] += ' - done';
      }else if( typeof(arr[i]) == 'number' ){
        arr[i] *= 2;
      }
  } 
  console.log(arr);
}


function thidrTaskAdditional(){
    let data = [ 5, 10, 'Shopping', 20, 'Homework'];
    let result = [];

    
    for (i = data.length - 1; i>=0; i--){
        console.log(i)
        result.push(data[i]);
    }
    /*
    for (i = 0; i<data.length; i++){
        result.unshift(data[i]);
    }
    */
    return result;
}


function TreeTask(){
    let lines = 6;
    let star = '*';
    let space = ' ';
    let tree = '';
    let last_item = 1;

    for ( i = lines -1 ; i >= 0; i-- ){
        for ( j = 0; j < i; j++){
            tree += space;
        }

        for (k = 1; k<=last_item; k++){
            tree += star;
            if( k%2 !== 0 && k == last_item ){
                last_item  = last_item + 2;
                break;
            }
        }
        
        tree += '\n';
    }

    return tree;

}

console.log(TreeTask())