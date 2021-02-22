// Soal 1
console.log("No 1");
{
    function arrayToObject(arr) {
        // Code di sini
        var now = new Date();
        var year = now.getFullYear();
        for(var idx=0; idx<arr.length; idx++){
            var data = {
                firstName: arr[idx][0],
                lastName: arr[idx][1],
                gender: arr[idx][2],
                age: year - arr[idx][3]
            }
            var data1 = {
                firstName: arr[idx][0],
                lastName: arr[idx][1],
                gender: arr[idx][2],
                age: "Invalid Birth Year"
            }

            if(arr[idx][3]>2021 || arr[idx][3]==null){
                console.log(data1.firstName + " " + data1.lastName + ": ")
                console.log(data1)
            }

            else if(arr[idx][3]>0){
                console.log(data.firstName + " " + data.lastName + ": ")
                console.log(data)
            }

        }
    }
     
    // Driver Code
    var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
    arrayToObject(people) 
    /*
        1. Bruce Banner: { 
            firstName: "Bruce",
            lastName: "Banner",
            gender: "male",
            age: 45
        }
        2. Natasha Romanoff: { 
            firstName: "Natasha",
            lastName: "Romanoff",
            gender: "female".
            age: "Invalid Birth Year"
        }
    */
     
    var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
    arrayToObject(people2) 
    /*
        1. Tony Stark: { 
            firstName: "Tony",
            lastName: "Stark",
            gender: "male",
            age: 40
        }
        2. Pepper Pots: { 
            firstName: "Pepper",
            lastName: "Pots",
            gender: "female".
            age: "Invalid Birth Year"
        }
    */
     
    // Error case 
    arrayToObject([]) // ""
}

// Soal 2
console.log("\nNo 2");
{
    function shoppingTime(memberId, money) {
        // you can only write your code here!
        var harga = [
            ['Sepatu Stacattu', 1500000],
            ['Baju Zoro', 500000],
            ['Baju H&N', 250000],
            ['Sweater Uniklooh', 175000],
            ['Casing Handphone', 50000]
        ]

        var tampil = {
            memberId : memberId,
            money : money,
            listPurchased : [],
            changeMoney : 0
        }

        if(memberId==null && money==null){
            return "Mohon maaf, toko Hijau hanya berlaku untuk member saja";
        }
        else if(memberId==''){
            return "Mohon maaf, toko Hijau hanya berlaku untuk member saja";
        }
        else if(money < 50000){
            return "Mohon maaf, uang tidak cukup";
        }
        else{
            for(var i = 0; i < harga.length; i++){
                if(money >= harga[i][1]){
                    tampil.listPurchased.push(harga[i][0])
                    money -= harga[i][1]
                    tampil.changeMoney = money
                }
            }
            return tampil;
        }
      }
       
      // TEST CASES
      console.log(shoppingTime('1820RzKrnWn08', 2475000));
        //{ memberId: '1820RzKrnWn08',
        // money: 2475000,
        // listPurchased:
        //  [ 'Sepatu Stacattu',
        //    'Baju Zoro',
        //    'Baju H&N',
        //    'Sweater Uniklooh',
        //    'Casing Handphone' ],
        // changeMoney: 0 }
      console.log(shoppingTime('82Ku8Ma742', 170000));
      //{ memberId: '82Ku8Ma742',
      // money: 170000,
      // listPurchased:
      //  [ 'Casing Handphone' ],
      // changeMoney: 120000 }
      console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
      console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
      console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
      console.log(shoppingTime('324193hDew2', 60000));
}

// Soal 3
console.log("\nNo 3");
{
    function naikAngkot(arrPenumpang) {
        rute = ['A', 'B', 'C', 'D', 'E', 'F'];
        //your code here
        // var byrangkot = 0;
        var temp = [];
        for(var idx=0; idx < arrPenumpang.length; idx++){
            var harga = {
                penumpang: arrPenumpang[idx][0],
                naikDari: arrPenumpang[idx][1],
                tujuan: arrPenumpang[idx][2],
                bayar: (rute.indexOf(arrPenumpang[idx][2]) - rute.indexOf(arrPenumpang[idx][1])) * 2000
            }
            temp.push(harga)
        }
        return temp;
      }
       
      //TEST CASE
      console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
      // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
      //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

      console.log(naikAngkot([])); //[]
}