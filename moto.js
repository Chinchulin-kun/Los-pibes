function moto(vehiculo){
    switch (vehiculo) {
        case "auto":
            console.log(false);
            break;
        case "avion":
            console.log(false);
            break;
        case "tren":
            console.log(false);
            break;
        case "barco":
            console.log(false);
            break;
        case "moto":
            console.log(true)
            break;     
        default: 
            console.log("no es un vehiculo") // Luquita te falto el console.log();
    }
}