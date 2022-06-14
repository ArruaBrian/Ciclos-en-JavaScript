/* ==================================================================================================

    De que sabor es (?)

=====================================================================================================*/

/* 

Las funciones, no son parte de la consigna pero quería agradecer por el excelente material que nos brindo
el libro de Eloquent JS

*/

const mentaSupremacy = (i) =>{

    for(i; i <= 100; i++){

        console.log("MENTA SUPREMACY");

    }

}

const esMenta = () =>{

    alert("Vos si sabes PAPA!");
    alert("Revisa la consola")
    
    mentaSupremacy(0);


}

// ==============================================================================================


let questionTaste = prompt("Cual es el mejor sabor de fernet, clásico o menta?");

while(true){

    if(questionTaste.toLowerCase() != "menta"){

        alert("Que verguenza....");

        questionTaste = prompt("Cual es el mejor sabor de fernet, clásico o menta?");

    }else{

        esMenta();

        break;

    }
    
}

