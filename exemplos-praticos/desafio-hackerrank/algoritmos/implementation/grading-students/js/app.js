
function gradingStudents(grades) {

    var multiploParaArredondarPara = 5;
    var numeroParaArredondarEm = 2;

    for(var i = 0; i < grades.length; i++) {

        if (grades[i] >= 38 &&
            grades[i] % multiploParaArredondarPara > 
            numeroParaArredondarEm) {
            
                grades[i] = grades[i] +
                (multiploParaArredondarPara - (grades[i] %
                    multiploParaArredondarPara));

                    
        }
    }

    return grades;
}

console.log(gradingStudents([4, 73, 67, 38, 33]));
