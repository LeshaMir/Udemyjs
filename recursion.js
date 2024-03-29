let students = {
    js : [{
            name: 'John',
            progress: 100
        },
        {
            name: 'Ivan',
            progress: 60
        }
    ],

    html : {
        basic: [{
                name: 'Peter',
                progress: 20
            },{
                name: 'Ann',
                progress: 18
            }],

        semi: {
            students:[{
                name: 'Test',
                progress: 100
            }]
        },

        pro: [{
            name: 'Sam',
            progress: 10
        }]

    }
}


function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;

    for ( let course of Object.values(data) ){
        if ( Array.isArray(course) ){
            students += course.length;
            for ( let i = 0; i < course.length; i++){
                total += course[i].progress;
            }
        }else{
            for ( let subCourse of Object.values(course)){
                students += subCourse.length;

                for ( i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress;
                }
            }

        }

    }

    return total/students;
}

function getTotalProgressByRecursion(data){

    if ( Array.isArray(data) ){
        let total = 0;
        for ( let i = 0; i < data.length; i++){
            total += data[i].progress;
        }

        return [total, data.length];
    }else {
        let total = [0, 0];
        for ( let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }

}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);


// 5! = 1*2*3*4*5
function factorial(number){
    if ( !Number.isInteger(number) || typeof(number) != 'number' ) return 'Введите целое число';
    if ( number <= 0 ) return 1;
    return number * factorial(number - 1);
}