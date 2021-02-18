// Soal 1
console.log("=====no1=====");
{
    function teriak(){
        return "Halo Sanbers!";
    }
 
    console.log(teriak()) // "Halo Sanbers!" 
}

// Soal 2
console.log("=====no2=====");
{
    function kalikan( n1, n2){
        return n1*n2;
    }
 
    var num1 = 12
    var num2 = 4
 
    var hasilKali = kalikan(num1, num2)
    console.log(hasilKali) // 48
}

// Soal 3
console.log("=====no3=====");
{
    function introduce(name ,age ,address ,hobby){
        return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
    }

    var name = "Agus"
    var age = 30
    var address = "Jln. Malioboro, Yogyakarta"
    var hobby = "Gaming"
 
    var perkenalan = introduce(name, age, address, hobby)
    console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!"
}