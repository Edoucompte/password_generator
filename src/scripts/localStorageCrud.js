const savePassword = (newMotDePasse, siteNom)=>{
    if(localStorage){
        let oldData = JSON.parse(localStorage.getItem('password-gen-history'))
        //console.log(oldData);
        
        
        if(oldData === null || oldData.length === 0){
            localStorage.setItem('password-gen-history', JSON.stringify([
                {
                    'password': newMotDePasse,
                    'date': Date.now(),
                    'site': siteNom === "" ? '__1__' : siteNom,
                }
            ]))
        } else{
            oldData.push({
                'password': newMotDePasse,
                'date': Date.now(),
                'site': siteNom === "" ? ` __${oldData.length +1 }__` : siteNom, 
            })
            console.log(oldData);
            
            
            localStorage.setItem('password-gen-history', JSON.stringify(
                oldData
            ))
        }

        return oldData
    }
    return false
    
    
}

const getTotalSaved = ()=> {
    if(localStorage){
        let oldData = JSON.parse(localStorage.getItem('password-gen-history'))
        return oldData
    }
}

const deletePassword = (motDePass) =>{
    if(localStorage){
        let oldData = JSON.parse(localStorage.getItem('password-gen-history'))
        if(! oldData === null && oldData.length > 0){
            oldData.filter((elem) => elem.password !== motDePass)
            localStorage.setItem('password-gen-history', JSON.stringify(
                oldData
            ))
        }
    }
}

export {savePassword, getTotalSaved, deletePassword}