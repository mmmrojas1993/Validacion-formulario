let paymentForm = document.querySelector('#paymentForm');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); //EVITA QUE EL FORMULARIO SE ENVIE 

    let todoBien = true;

    const form = e.target;

    /*let card = document.querySelector('#card');
    
    alert(card.value);*/

    let soloNumeros = /^[0-9]+$/;
    let checkCVC = /^[0-9]{3,4}/;
    let SoloLetras = /^[a-zA-Z\s]+$/;

    if (form.Card.value === "" || !soloNumeros.test(form.Card.value)) {
        //alert("Por favor verifique numero de tarjeta...")
        todoBien = false;
    }

    if (form.Cvc.value === "" || !checkCVC.test(form.Cvc.value)) {
        //alert("Por favor verifique numero de seguridad (CVC)...")
        todoBien = false;
    }

    if (form.Amount.value === "" || !soloNumeros.test(form.Amount.value)) {
        //alert("Por favor verifique $Amoun")
        todoBien = false;
    }

    if (form.Name.value === "" || !SoloLetras.test(form.Name.value)) {
        // alert("por favor verifique nombre... ");
        todoBien = false;
    }

    if (form.LastName.value === "" || !SoloLetras.test(form.LastName.value)) {
        // alert("por favor verifique Lastname... ");
        todoBien = false;
    }

    if (form.City.value === "" || !SoloLetras.test(form.City.value)) {
        // alert("por favor verifique City ");
        todoBien = false;
    }

    if (form.State.value === "" || !SoloLetras.test(form.State.value)) {
        // alert("por favor verifique state... ");
        todoBien = false;
    }

    if (form.PostalCode.value === "" || !soloNumeros.test(form.PostalCode.value)) {
        //alert("Por favor verifique PostalCode...")
        todoBien = false;
    }


    if (todoBien) {
        form.submit();

    } else {
        alert("por favor verifique el formulario...");
    }

})