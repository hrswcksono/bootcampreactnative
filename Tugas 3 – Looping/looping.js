// Soal 1
{
    var next = 2;
    var prev = 20;

    console.log("LOOPING PERTAMA");
    while(next <= 20){
        if(next % 2 == 0){
            console.log( next + " - I love coding");
        }
        next++;
    }

    console.log("LOOPING KEDUA");
    while(prev >= 2){
        if(prev % 2 == 0){
            console.log( prev + " - I will become a mobile developer");
        }
        prev--;
    }
}

// Soal 2
{
    for(var idx=1; idx <= 20; idx++){
        if( idx%3==0 && idx%2!=0){
            console.log(idx + " - I Love Coding ");
        }
        else if( idx%2==0 ){
            console.log(idx + " - Berkualitas");
        }
        else{
            console.log(idx + " - Santai");
        }
    }
}

// Soal 3
{
    for(var x=0; x < 4; x++){
        for(var y=0; y < 8; y++){
            process.stdout.write("#");
        }
        console.log("");
    }
}

// Soal 4
{
    for(var x=0; x < 7; x++){
        for(var y=0; y < (x+1); y++){
            process.stdout.write("#");
        }
        console.log("");
    }
}

// Soal 5
{
    for(var x=1; x <= 8; x++){
        for(var y=1; y <= 8; y++){
            if(x%2!=0){
                if(y%2==0){
                    process.stdout.write("#");
                }
                else{
                    process.stdout.write(" ");
                }
            }
            else{
                if(y%2!=0){
                    process.stdout.write("#");
                }
                else{
                    process.stdout.write(" ");
                }
            }
        }
        console.log("");
    }
}