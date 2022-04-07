




/**
 * get currency convert
 */
function currencyConvert (amount, type){

    let rate = 0;

    switch (type){
        case 'USD' :
            rate = 86;
            break;

        case 'CAD' :
            rate = 67;
            break;

        case 'Pound' :
            rate = 114;
            break;
          
        case 'Euro' :
            rate = 93;
            break;    
    }

    console.log(`
         ${amount} ${type} = ${amount * rate} BDT
    `);
}

/**
 * get BMIcal
 */

function BMICal (name, weight, height){

    let bmi = weight / ( height * height );

    if(bmi < 18.5){
        console.log(`Hi ${name}, your bmi is ${bmi}, therefore you are underweight`)
    }else if(bmi >= 18.5 && bmi < 24.9){
        console.log(`Hi ${name}, your bmi is ${bmi}, therefore you are normal`)
    }else if(bmi >= 25 && bmi < 29.9){
        console.log(`Hi ${name}, your bmi is ${bmi}, therefore you are overweight`)
    }else if(bmi >= 30){
        console.log(`Hi ${name}, your bmi is ${bmi}, therefore you are very overweight`)
    }

    
}

/**
 * get AgePeoplecal
 */
function AgePeople (name, year){

    let age = 2022 - year
    
    if(age > 0 && age <= 10){
        console.log(`
            Hi ${name}, you are ${age} years old, therefore you are children.
        `);
    }else if(age > 10 && age <= 18){
        console.log(`
            Hi ${name}, you are ${age} years old, therefore you are teenager.
        `);
    }else if(age > 18 && age <= 32){
        console.log(`
            Hi ${name}, you are ${age} years old, therefore you are youngman.
        `);
    }else if(age > 32){
        console.log(`
            Hi ${name}, you are ${age} years old, therefore you are oldman.
        `);
    }
}

/**
 * get Resultcal
 */

function getGpa(marks){

    let gpa;

    if(marks >= 0 && marks < 33){
        gpa = 0;
    }else if(marks >= 33 && marks < 40){
        gpa = 1;
    }else if(marks >= 40 && marks < 50){
        gpa = 2;
    }else if(marks >= 50 && marks < 60){
        gpa = 3;
    }else if(marks >= 60 && marks < 70){
        gpa = 3.5;
    }else if(marks >= 70 && marks < 80){
        gpa = 4;
    }else if(marks >= 80 && marks <= 100){
        gpa = 5;
    }

    return gpa;
}

/**
 * get Resultcal
 */

function getGrade(marks){

    let grade;

    if(marks >= 0 && marks < 33){
        grade = 'F';
    }else if(marks >= 33 && marks < 40){
        grade = 'D';
    }else if(marks >= 40 && marks < 50){
        grade = 'C';
    }else if(marks >= 50 && marks < 60){
        grade = 'B';
    }else if(marks >= 60 && marks < 70){
        grade = 'A-';
    }else if(marks >= 70 && marks < 80){
        grade = 'A';
    }else if(marks >= 80 && marks <= 100){
        grade = 'A+';
    }

    return grade;
}

/**
 * get AreaCal
 */

function AreaCal (type, length, width){

    let shape = '';
    let area  = '';

    switch(type){
        case 'r' :
            shape = 'Rectangle';
            area  = (length * width);
            break;

        case 's' :
            shape = 'Square';
            area  = (length * length);
            break;

        case 't' :
            shape = 'Triangle';
            area  = ( .5 * length * width);
            break;

        case 'r' :
            shape = 'Circle';
            area  =  3.1416 * (length * length);
            break;
    }

    console.log(`
        The area of ${shape} is ${area}
    `);
}


/**
 * get AgeCal
 */
function AgeCal (name, year){

    let age = 2022 - year

    if(age >= 18){

        console.log(`
            Hi ${name}, apnar bier boise apni biea korte paren.
        `);
    }else {
        console.log(`
            Hi ${name}, apnar bier boise hoini apni pore....., aiseen.
        `);
    }
}