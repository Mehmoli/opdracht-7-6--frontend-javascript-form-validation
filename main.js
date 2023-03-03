//MAAK EEN VARIABELE FOR USERINPUT FIELD
//MAAK EEN VARIABELE FOR PASSWORD FIELD

const userName = document.getElementById('username');
const password = document.getElementById('password');

//MAAK EEN VARIABELE FOR ERROR USERNAME FIELD
//MAAK EEN VARIABELE FOR ERROR PASSWORD FIELD

const errorUserName = document.getElementById('error-username');
const errorPassword = document.getElementById('error-password');
//EVENTLISTENER VOOR USERNAME
//EVENTLISTENER VOOR PASSWORD
userName.addEventListener('keyup', checkValueUserName);
password.addEventListener('keyup', checkPassword);

//MAAK EEN FUNCTIE DIE DE INGEVULDE WAARDE CONTROLEERT OP @
function checkValueUserName(e) {
    if (e.target.value.includes('@')) {
        errorUserName.textContent = 'Geen @ toegestaan in gebruikersnaam';
    } else {
        errorUserName.textContent = '';
    }
}

function checkPassword(e) {
    if (e.target.value === '' || e.target.value.length > 6) {
        errorPassword.textContent = '';
    } else {
        errorPassword.textContent = 'Te kort, wachtwoord moet minimaal 6 tekens';
    }
}
