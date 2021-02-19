// Soal 1
console.log("===No 1===");
{   
    function range(startNum, finishNum) {
        var nilai = [];
        var idx = 0;
        if(startNum == null || finishNum == null){
            return -1;
        }
        else if(finishNum>startNum){
            while(startNum<=finishNum){
                nilai[idx] = startNum;
                startNum++;
                idx++;
            }
            return nilai;
        }
        else if(finishNum<startNum){
            while(startNum>=finishNum){
                nilai[idx] = startNum;
                startNum--;
                idx++;
            }
            return nilai;
        }
    }

    console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(1)) // -1
    console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
    console.log(range(54, 50)) // [54, 53, 52, 51, 50]
    console.log(range()) // -1
}

// Soal 2
console.log("\n===No 2===");
{
    function rangeWithStep(startNum, finishNum, step){
        var nilai = [];
        var idx = 0;
        if(finishNum>startNum){
            while(startNum<=finishNum){
                nilai[idx] = startNum;
                startNum+=step;
                idx++;
            }
            return nilai;
        }
        else if(finishNum<startNum){
            while(startNum>=finishNum){
                nilai[idx] = startNum;
                startNum-=step;
                idx++;
            }
            return nilai;
        }
    }

    console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
    console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
    console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
    console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 
}

// Soal 3
console.log("\n===No 3===");
{
    function sum(startNum, finishNum, step){
        var nilai = [];
        var idx = 0;
        var cpstep = 1;
        var hasil = 0;
        if(step != null){
            cpstep = step;
        }
        if(startNum == null){
            return 0;
        }
        else if(startNum != null && finishNum == null && step == null){
            return startNum;
        }
        else if(finishNum>startNum){
            while(startNum<=finishNum){
                nilai[idx] = startNum;
                startNum+=cpstep;
                idx++;
            }
        }
        else if(finishNum<startNum){
            while(startNum>=finishNum){
                nilai[idx] = startNum;
                startNum-=cpstep;
                idx++;
            }
        }
        for(var idxn = 0; idxn<nilai.length; idxn++){
            hasil+=nilai[idxn];
        }
        return hasil;
    }

    console.log(sum(1,10)) // 55
    console.log(sum(5, 50, 2)) // 621
    console.log(sum(15,10)) // 75
    console.log(sum(20, 10, 2)) // 90
    console.log(sum(1)) // 1
    console.log(sum()) // 0 
}


// Soal 4
console.log("\n===No 4===");
{
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]

    function dataHandling(input) {
        for (var idx = 0; idx < input.length; idx++) {
          var data = input[idx];
          console.log(
            `Nomor ID: ${data[0]} \nNama Lengkap: ${data[1]} \nTTL: ${data[2]} ${data[3]} \nHobi: ${data[4]} \n`
          );
        }
      }

    dataHandling(input);
}

// Soal 5
console.log("\n===No 5===");
{
    function balikKata(arr){
        var balik = [];
        
        var temp = arr.length-1;
        for(var idx = 0; idx < arr.length; idx++){
            balik[idx] = arr[temp];
            temp--;
        }
        balik.toString();
        return balik.join('');
    }

    console.log(balikKata("Kasur Rusak")) // kasuR rusaK
    console.log(balikKata("SanberCode")) // edoCrebnaS
    console.log(balikKata("Haji Ijah")) // hajI ijaH
    console.log(balikKata("racecar")) // racecar
    console.log(balikKata("I am Sanbers")) // srebnaS ma I 
}

// Soal 6
console.log("\n===No 6===");
{
    
}