function validateForm() {
    // Récupérer les champs
    let nom = document.getElementById('nom');
    let email = document.getElementById('email');
    let objet = document.getElementById('objet');
    let message = document.getElementById('message');
    let formIsValid = true;

    // Valider le champ du Nom
    if (!nom.value.trim()) {
        alert('Le champ Nom est requis.');
        return formIsValid; 
    } else if (nom.value.trim().length < 3) {
        alert('Le champ Nom est invalide.');
        return formIsValid; 
    }

    // Valider le champ E-mail
    if (!email.value.trim()) {
        alert('Le champ E-mail est requis.');
        return formIsValid; 
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return formIsValid; 
    }

    // Valider le champ Objet
    if (!objet.value.trim()) {
        alert('Le champ Objet est requis.');
        return formIsValid; 

    } else if (objet.value.trim().length < 3) {
        alert('Le champ Objet est invalide.');
        return formIsValid; 
    }

    // Valider le champ Message
    if (!message.value.trim()) {
        alert('Le champ Message est requis.');
        return formIsValid; 
    } else if (message.value.trim().length < 3) {
        alert('Le champ Message est invalide.');
        return formIsValid; 
    }

    // Message de validation ou annulation de l'envoi
    if (formIsValid) {
        alert('Votre message a été envoyé avec succès !');
        document.getElementById('form').reset();
    }

    

    
}


