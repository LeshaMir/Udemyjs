const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function (){
        // paste questions from cycle in air 
    },
    detectPersonalLevel: function (){

    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDb: function(){
        if (personalMovieDB.private){
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function(){
        for ( let i = 1; i < 2; i++){
            let genre = prompt(`Ваши любимые жанры через запятую`).toLowerCase();
        
            if (genre === '' || genre == null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }else{
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    },
    
};



const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data){
    //- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
    //- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
    //- определение того, хватает ли бюджета на оплату такого объема;
    let summ = 0;
    for ( item of data.shops){
        summ += parseInt(item.width * item.length * data.height * data.moneyPer1m3);
        }
    if ( summ >= data.budget) return 'Бюджета достаточно'
    else return 'Бюджета недостаточно'
}

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'DDSD', 'Sam'];

function sortStudentsByGroups(data, byEach){
    let students = data.sort();
    let result = [];
    let studentsWithoutGroup = false;
    for (i = 0 ; i < students.length; i+=byEach){
        const studentsGroup = students.slice(i, i + byEach);
        if ( studentsGroup.length !== byEach ){ 
           result.push(`Оставшиеся студенты: ${studentsGroup.join(", ")}`);
           studentsWithoutGroup = true;
        }
        else {
            result.push(studentsGroup);
        }   
    }

    if (!studentsWithoutGroup) {
        result.push(`Оставшиеся студенты: -`);
    }

    return result;
}
// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', ''); 

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
<<<<<<< HEAD
// reset soft edit
=======
// reset soft
>>>>>>> 7741420fd164cdfca4d049a134cf9ec3b42edefe
