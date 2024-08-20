//DOM ELEMENTS
const vize = document.querySelector("#vize");
const final = document.querySelector("#final");
const hesaplaBtn = document.querySelector("#hesapla");
const temizleBtn = document.querySelector("#temizle");
const result = document.querySelector("#msg");


//EVENTS LISTENERS
hesaplaBtn;addEventListener('click', () => {
    notHesapla();
});

function notHesapla () {
    const vizeNotu = Number(vize.value)
    const finalNotu = Number(final.value)
    const ortalama = vizeNotu*0.3 + finalNotu*0.7
    console.log(ortalama);
    
    let not = "";
    switch(true){
        
        case ortalama<0 :
            not = "Ortalma negatif olamaz";
            break;
        
        
        case ortalama<50 :
            not = "FF";
            break;

        case ortalama<60 :
            not = "DC";
            break;
        case ortalama<70 :
            not = "CC";
            break;    
    
        case ortalama<80 :
            not = "CB";
            break;
        case ortalama<85 :
            not = "BB";
            break;
        case ortalama<90 :
            not = "BA";
            break;
        case ortalama<100 :
            not = "AA";
            break;
        default :
            not = "Hatali giris yaptiniz";
                        
        }
    result.innerHTML = `Not ortalamaniz : ${ortalama} Notunuz: ${not}`;

}

