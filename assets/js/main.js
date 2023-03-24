console.log("TEST");

function calculateCal() {
    let height = document.getElementById("bodyheightcm").value;
    let age = document.getElementById("ageOfCustomer").value;
    let weight = document.getElementById("weightOfCustomer").value;
    const men = document.getElementById("genderMen").checked;
    const women = document.getElementById("genderWomen").checked;

    let numberValue = document.getElementById('freetimeactivity').value;
    let grundUmsatz;
    let kcal = document.getElementById("kcal");
    let gesamtUmsatz;
    let totalKcal = document.getElementById("totalKcal");
    let kJ = document.getElementById("kJ");
    let totalKJ = document.getElementById("totalKJ");

    switch (height && age && weight && men && numberValue) {
        case value="1":
            grundUmsatz = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 0.95;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 0.95).toFixed(2);
            console.log("Value1")
            break;
        case value="2":
            grundUmsatz = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 1.2;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 1.2).toFixed(2);
            break;
        case value="3":
            grundUmsatz = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 1.5;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 1.5).toFixed(2);
            break;
        case value="4":
            grundUmsatz = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 1.7;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 1.7).toFixed(2);
            break;
        case value="5":
            grundUmsatz = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 1.9;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 1.9).toFixed(2);
            break;
        case value="6":
            grundUmsatz = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 2.2;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 2.2).toFixed(2);
            break;
    } 

    switch (height && age && weight && women && numberValue) {
        case value="1":
            grundUmsatz = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 0.95;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 0.95).toFixed(2);
            break;
        case value="2":
            grundUmsatz = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 1.2;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 1.2).toFixed(2);
            break;
        case value="3":
            grundUmsatz = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 1.5;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 1.5).toFixed(2);
            break;
        case value="4":
            grundUmsatz = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 1.7;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 1.7).toFixed(2);
            break;
        case value="5":
            grundUmsatz = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 1.9;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 1.9).toFixed(2);
            break;
        case value="6":
            grundUmsatz = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            kcal.innerHTML = grundUmsatz.toFixed(2);
            gesamtUmsatz = grundUmsatz * 2.2;
            totalKcal.innerHTML = gesamtUmsatz.toFixed(2);
            kJ.innerHTML = (grundUmsatz * 4.184).toFixed(2);
            totalKJ.innerHTML = (kJ.innerHTML * 2.2).toFixed(2);
            break;
    } 

}


