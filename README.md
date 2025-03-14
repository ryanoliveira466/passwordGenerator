# passwordGenerator

## Como funciona?

Esse código funciona ao usuário colocar a quantidade de caracteres que ele deseja no item `length`.
e o usuário pode escolher se quer usar caracteres especiais marcando *true* ou *false* no item `includeSpecialChars`. 

## Passo a passo

### Função

Criamos uma *function* onde esses parametros serão passados:

`function passwordGenerator(length, includeSpecialChars){
}`

### Lógica

1 - Dentro da **function** criamos uma variável chamada **password** que receberá o valor final.

2 - Criamos 2 variáveis; **caracteresNormais** e **caracteresEspeciais** e outra chamada **allChars**
Se o usuário quiser caracteres especiais, então **allChars** terá os caracteres inclusos, senão,
**allChars** terá somente **caracteresNormais**.

3 - Criamos um **for** que terminará seu processo determinado pelo número de casas que o usuário quer.

4 - Dentro do **for** criamos a variável **indiceAleatorio** que será um número aleatório entre **0** e o `.length` de **allChars**. 

5 - Criamos outra variável chamada **caracterEscolhido** que será o resultado da coleta do elemento em *allChars*. 

6 - **password** então é somada com esse **caracterEscolhido**.

7 - No final do códidgo colocamos `return password` que retornará o valor dentro do `console.log()`.

```javascript
    `function passwordGenerator(length, includeSpecialChars){

    let password = ""

    let caracteresEspeciais = "!@#$%^&*()_+{}|:\"<>?-=[]\\;',./`~";
    let caracteresNormais = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const allChars = includeSpecialChars ? caracteresNormais + caracteresEspeciais : caracteresNormais


    for(var i = 0; i <= length; i++){

        let indiceAletorio = Math.floor(Math.random() * allChars.length);
        let caracterEscolhido = allChars[indiceAletorio]
        password += caracterEscolhido;
    } 
    return password
    }
    console.log(passwordGenerator(10, false))`
```
