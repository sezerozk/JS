console.log("Burasi ilk calisir");


console.log("Burasi ikinci calisir");


setTimeout(()=>{
    myFunction();
    console.log("2. çirak agir isleri yapiyor")
},1000)

setTimeout(()=>{
    myFunction();
    console.log("çirak agir isleri yapiyor")
},0)

console.log("Burasi ucuncu calisir");

console.log("Burasi dorduncu calisir");

console.log("Burasi besinci calisir");

console.log("Burasi altinci calisir");

console.log("Burasi yedinci calisir");

console.log("Burasi son calisir");

function myFunction () {
    for(let i =0 ; i<1000000000 ; i++){}
    console.log("Dongu bitti calisti")
};


let data = {};

function getData () {
    setTimeout (()=>{
        data = {title: "JS", lesson : "Async"};
        console.log(data);
        console.log("getData calisti")
        return data;
    },1500)
};

console.log(getData());
// console.log(data); data yi yazdirma islemini burada yaparsak datayi her zaman bos olarak goruyoruz.

//JS IDLE - CALISMIYOR SU ANDA