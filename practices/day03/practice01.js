//DOM ELEMENTS 
const country = document.querySelector("#country");
const skills = document.querySelector("#skills");
const experience = document.querySelector("#experience");
const findCandidateBtn = document.querySelector("#button");
const results = document.querySelector("#results");
const addName = document.querySelector("#addName");
const addCountry = document.querySelector("#addCountry");
const addSkills = document.querySelector("#addSkills");
const addExperience = document.querySelector("#addExperience");
const buttonAdd = document.querySelector("#buttonAdd");




let candidates = [
    {
        id: 0,
        candName: 'Melisa',
        country: 'usa',
        skills: 'Apex, LWC, js',
        experience: 1
    },
    {
        id: 1,
        candName: 'Harry',
        country: 'Germany',
        skills: 'Apex, LWC, js, html',
        experience: 2
    },
    {
        id: 2,
        candName: 'Melisa',
        country: 'USA',
        skills: 'Apex, LWC, js, css, flow',
        experience: 6
    },
    {
        id: 3,
        candName: 'George',
        country: 'usa',
        skills: 'Apex, js, html, css, flow',
        experience: 1
    }
];


findCandidateBtn.addEventListener('click', () => {
    findCandi();
})


function findCandi() {
    const countryValue = country.value.toLowerCase();
    const skillsValue = skills.value.toLowerCase();
    const experienceValue = parseInt(experience.value);


    let interwiev = candidates.filter((person) => {


        return (
            (countryValue == '' || person.country.toLocaleLowerCase() == countryValue) &&
            (skillsValue == '' || person.skills.toLocaleLowerCase().includes(skillsValue)) &&
            (!experienceValue || person.experience >= experienceValue)
        )

    })




    displayResults(interwiev);
};

function displayResults(aday) {
    results.innerHTML = "";
    if (aday.length == 0) {
        results.innerHTML = `<p>Aradiginiz kriterlere uygun aday bulunamamistir</p>`
    }

    aday.forEach(element => {
        results.innerHTML += `<div>
        <h4>Candidate Name : ${element.candName}</h4>
        <p>Country: ${element.country} </p>
        <p>Skills: ${element.skills} </p>
        <p>Experience: ${element.experience} </p>
        </div>`
    });
}

buttonAdd.addEventListener('click', () => {    
    addCandi();
    
});

function addCandi() {
    const name = addName.value;
    const country = addCountry.value;
    const skills = addSkills.value;
    const experience = parseInt(addExperience.value)
  
    let object = {
        id: candidates.length,
        candName: name,
        country: country,
        skills: skills,
        experience: experience
    };
    
    console.log(`ekleme oncesi ; ${candidates.length}`)
    candidates.push(object);
    console.log(`ekleme sonrasi ; ${candidates.length}`)
    
    
    


};

shuffleCount(6);


function shuffleCount(num) {
	let arr = array(num);
	let newArr = newArray(arr);
	let flag = 1 ;
	while (!arrayEqual(arr,newArr)){
		newArr = newArray(newArr);
		flag++;
	}
    console.log(flag)
	return flag;
	
    
	
	
}

function array (num){
	let arr = [];
	for (let i = 1 ; i<=num ; i++){
		arr.push(i);
	}
	return arr;
}

function newArray(arr){
	let newArr = [];
	const arr1 = arr.slice(0, arr.length/2);
	const arr2 = arr.slice(arr.length/2);
	for(let i = 0 ; i<arr.length/2 ; i++){
		if(i%2==0){
			newArr.push(arr1[i]);
			newArr.push(arr2[i]);
		}else {
			newArr.push(arr1[i]);
			newArr.push(arr2[i]);
		}
	}
    console.log(newArr);
	return newArr; 
}
function controleArray(arr1,arr2){
	if (arr1 == arr2){
		return true
	}else {
		false
	}
}

function arrayEqual (arr1,arr2){
	 return JSON.stringify(arr1) === JSON.stringify(arr2);
}

