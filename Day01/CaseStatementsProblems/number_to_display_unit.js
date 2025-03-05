function numberToDisplayUnit(number) {
    switch (number) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("Hundred");
            break;
        case 1000:
            console.log("Thousand");
            break;
        case 10000:
            console.log("Ten Thousand");
            break;
        case 100000:
            console.log("Hundred Thousand");
            break;
        default:
            console.log("Number not recognized");
    }
}

numberToDisplayUnit(1);     
numberToDisplayUnit(10);   
numberToDisplayUnit(100);    
numberToDisplayUnit(1000);   
numberToDisplayUnit(10000);  
numberToDisplayUnit(5);      