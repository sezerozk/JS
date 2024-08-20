//DOM ELEMENTS 
const button = document.querySelector("#btn");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const textArea = document.querySelector("#textArea");



//EVENT LISTENERS
button.addEventListener('click', () => {
    calculator();
});

function calculator() {

    const result = input1.value ** input2.value//Esasen burada gelen verilen string olarak geliyor. Fakat carpma islemi yaptigimiz icin number kabul edip islem yapiyor. Fakat toplama yapsaydik 
    //bekledigimiz sonucu alamayacaktik.
    textArea.textContent = result
    



};











