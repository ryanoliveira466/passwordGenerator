function passwordGenerator(length, includeSpecialChars){

    let password = ""

    let caracteresEspeciais = "!@#$%^&*()_+{}|:\"<>?-=[]\\;',./`~";
    let caracteresNormais = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const allChars = includeSpecialChars ? caracteresNormais + caracteresEspeciais : caracteresNormais


    for(var i = 0; i <= length; i++){

        let indiceAletorio = Math.floor(Math.random() * allChars.length);
        let caracterEscolhido = allChars[indiceAletorio]
        password += caracterEscolhido;
    }
    




return password;

}

console.log(passwordGenerator(10, false))