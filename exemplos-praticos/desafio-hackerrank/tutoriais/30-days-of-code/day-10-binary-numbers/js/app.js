

function principal() {

    var n = 5;
    var arr = [2, 1, 0];

    while(n != 0) {

        if(n % 2 == 0) 

            arr.push(0);

        if(n % 2 == 1)


            arr.push(1);
 
        // console.log(n); // 5 2 1
        n = Math.floor(n / 2);
        // console.log(n); // 2 1 0

    }

    // console.log(n); // 0
    var atual = 0 
    var max = 0;

    for(let i = 0; i < arr.length; i++) {


        if(arr[i] == 1)

            atual++;

        else if(arr[i] == 0) {

            if(atual > max)

                max = atual;

            atual = 0;
        }
    }

    console.log(atual);
    console.log(max);

    if(atual > max) 

         max = atual;


    console.log(max);
}

principal();