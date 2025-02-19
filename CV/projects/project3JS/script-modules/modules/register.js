const d = document;

const $regUser = d.getElementById('reg-user'),
      $regName = d.getElementById('reg-name'),
      $regPass = d.getElementById('reg-pass'),
      $regRol = d.getElementById('reg-rol')



const validaLenth = (string,select)=>{

    const element = string.value

    if (element.length <= 3) {
        return Swal.fire({
            title:'Error !',
            text:`Por favor ingresar un ${select} de mas de 3 caracteres !`,
            icon:'error',
            showConfirmButton:true,
            timer:false,})
    }else{
        return true
    }
}

const validaCoincidencia =(elementValidar,campo,db)=>{
    const valida = (element) => element[`${campo}`]== elementValidar
    return db.findIndex(valida)
}

export const validaRegister =()=>{

    let dbUser = JSON.parse(localStorage.getItem("dbuser"))
       
    if (validaLenth($regUser,"Usuario") === true && validaLenth($regPass,"Contraseña") === true && validaLenth($regName,"Nombre")  === true) {


        if (validaCoincidencia($regUser.value,"user",dbUser) === -1) {
            
            dbUser.push({user:$regUser.value.toLowerCase(),name:$regName.value,rol:$regRol.value,pass:$regPass.value})

            localStorage.setItem("dbuser",JSON.stringify(dbUser))
    
            // console.log($regUser.value,$regName.value,$regPass.value,$regRol.value)
    
            Swal.fire({
            title:'Registro exitoso !',
            text:'',
            icon:'success',
            showConfirmButton:false,
            timer:1500,})
    
            setTimeout(() => {
                d.querySelector(".sliders").style.transform = "translateX(0%)"
            }, 2000);
            
        } else{

            return  Swal.fire({
                    title:'Error  !',
                    text:'El usuario ya se encuentra registrado',
                    icon:'error',
                    showConfirmButton:true,
                    timer:false,})
        }

       
        
    }
}