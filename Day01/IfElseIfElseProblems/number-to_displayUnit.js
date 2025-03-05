function numberToDisplayUnit(number) {
    if (number === 1) {
        console.log("Unit");
    } else if (number === 10) {
        console.log("Ten");
    } else if (number === 100) {
        console.log("Hundred");
    } else if (number === 1000) {
        console.log("Thousand");
    } else if (number === 10000) {
        console.log("Ten Thousand");
    } else {
        console.log("Number not recognized");
    }
}


numberToDisplayUnit(1);      
numberToDisplayUnit(10); 
numberToDisplayUnit(100);     
numberToDisplayUnit(1000);    
numberToDisplayUnit(10000);   
numberToDisplayUnit(123);     