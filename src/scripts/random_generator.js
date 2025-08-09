const majAlphabet = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 
        'Y', 'Z',
    ]

const miniAlphabet = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 
        'y', 'z',
    ]

const numeros = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const specialCarac = ['!', '@', '#', '$', '%']

const randomIntBetween = (deb, fin) => {
        // arrondir extermes
        const debArrondi = Math.ceil(deb)
        const finArrondi = Math.floor(fin) // ordre sup
        return Math.ceil(Math.random() * (finArrondi - debArrondi ) + debArrondi)
    }

const pickRandomCharIn = (list) =>{
        if(list.length === 0)
            return ''
        const randomIndex = randomIntBetween(0, list.length - 1)
        return list[randomIndex]
    }

const pickRandomCharWithOptions = (isMaj, isMin, isNum, isSymb) => {
        let maList = []
        
        if (isMaj) {
            maList = [ ...maList, ...majAlphabet]
            //console.log(maList);
            
        }
        if(isMin) {
            maList = [ ...maList, ...miniAlphabet]
        }

        if(isNum) {
            maList = [ ...maList, ...numeros]
        }

        if(isSymb) {
            maList = [ ...maList, ...specialCarac]
        }

        return pickRandomCharIn(maList)
    }

const generatePasswordLength = (length, isMaj, isMin, isNum, isSymb) =>{
    //console.log(length);
    
    let i = 0
    let password = ''
    //console.log("test", pickRandomCharWithOptions(isMaj, isMin, isNum, isSymb));
    
    
    while (i < length) {
        password = password + pickRandomCharWithOptions(isMaj, isMin, isNum, isSymb)
        //console.log(password);
        i++
        //console.log(i);
        
    }
    //console.log(password);
    return password
}

export default generatePasswordLength