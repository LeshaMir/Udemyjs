function sayHello(name){
    return `Привет ${name}!`
}


function returnNeighboringNumbers(number){
    return [number-1 , number, number+1];
}


function getMathResult(number, many_numbers){
    if (typeof(many_numbers) === 'number' && many_numbers > 1){
        let result = `${number}---`; 
        for(i = 2; i <= many_numbers; i++){
            result += number * i;
            if(i < many_numbers) result += '---';
        }
        return result;
    }else return number;
}


function calculateVolumeAndArea(sideLength){
    if(typeof(sideLength) !== 'number' || sideLength <= 0 ) return "При вычислении произошла ошибка";
    else return `Объем куба: ${Math.pow(sideLength, 2)}, площадь всей поверхности: ${Math.pow(sideLength, 3)}`
}

function getCoupeNumber(place){
    if (typeof(place) !== 'number') return 'Ошибка. Проверьте правильность введенного номера места';
    if (0 < place && place < 37 && place%1 === 0){
       return  `${Math.ceil(place/4)}`;}
    else {return 'Таких мест в вагоне не существует';}
}

function getTimeFromMinutes(minutes){
    if( typeof(minutes) === 'number' && minutes % 1 === 0 && minutes >=0 && minutes <=600 ){
        let hour = parseInt(minutes/60);
        let mins =  minutes % 60;
        let result = {
            'hour': hour,
            'hour_word': 'час',
            'minutes': mins,
            'minutes_word': 'мин'
            
        };
        
        if ( hour >= 2 && hour <=4 ) { result.hour_word += 'а'; }
        else if ( hour >= 5 && hour <=10 || hour % 10 === 0 ) { result.hour_word += 'ов'; }

        if ( mins >= 10 && mins < 19 ) { result.minutes_word += 'ут'}
        else if ( mins % 10 == 1 ){ result.minutes_word += 'ута' }
        else if ( mins % 10 >= 2 &&  mins % 10 <= 4 ){ result.minutes_word += 'уты' }
        else if ( mins % 10 >= 5 &&  mins % 10 <= 9 || mins % 10 == 0 ){ result.minutes_word += 'ут' }

        return `Это ${result.hour} ${result.hour_word} и ${result.minutes} ${result.minutes_word}`
    
    }else return 'Ошибка, проверьте данные (укажите время в минутах от 0 до 600)';
}


function findMaxNumber(a=0, b=0, c=0, d=0){
    if( typeof(a) === 'number' && a>0 && typeof(b) === 'number' && b>0 && typeof(c) === 'number' && c>0 && typeof(d) === 'number' && d>0) return Math.max(a, b, c, d);
    else return 0;
}


function fib(count){
    if (typeof(count) !== 'number' ) return '';
    let nums = 0;
    let result = '';
    let prev_num = 0;
    let prev2_num = 0;
    for( i = 0; i < count; i++ ){
        if ( i === 0){
            result += '0';
            prev_num = 1;
            continue;
        }
        nums = prev_num + prev2_num;
        prev2_num = prev_num;
        prev_num = nums;
        result += ' ' + nums.toString();       
    }
    return result;
}