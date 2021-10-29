let grad_calc = function(studentScore , totalScore){
    let percent = studentScore / totalScore * 100 ;
  
    if (percent < 60){
        console.log(`you got a F (${percent}%)! `);

    }else if (percent>= 60 && percent <70){
        console.log(`you got a D (${percent}%)! `);

    }else if (percent>= 70 && percent <80 ){
        console.log(`you got a C (${percent}%)! `);

    }else if (percent>= 80 && percent <90){
        console.log(`you got a B (${percent}%)! `);

    } else if (percent>= 90 && percent <=100){
        console.log(`you got a A (${percent}%)! `);

    }
}

grad_calc(14.555555,20);
