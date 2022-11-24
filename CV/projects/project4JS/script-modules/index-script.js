import { deleteUser } from "./modules/delete.js";
import { loginRegister } from "./modules/login-register.js";
import { createTableDB, validationLogin } from "./modules/login.js";
import { validaRegister } from "./modules/register.js";
import { catchData, updateData } from "./modules/update.js";
import { localDbuser } from "./modules/user-bd.js";
deleteUser



const d = document

const $formLogin = d.querySelector(".section-log"),
      $formRegister = d.querySelector(".section-register")

const $valueUser = d.getElementById('user'),
      $valuePass = d.getElementById('password')


d.addEventListener('DOMContentLoaded',e=>{
        localDbuser();  
    })

$formLogin.addEventListener('submit',(e)=>{
        e.preventDefault();    
    })
    
$formRegister.addEventListener('submit',(e)=>{
        e.preventDefault();    
    })


d.addEventListener('click',(e)=>{

    if (e.target.matches('#btn-login')) {
        validationLogin($valueUser,$valuePass);
    }  

    if (e.target.matches('#btn-create-register')) {
        validaRegister();

        setTimeout(() => {
            loginRegister() 
        }, 2000);
    }

    if (e.target.matches(".btn-register")) {
        e.preventDefault(); 
        loginRegister() 
    }

    if (e.target.matches(".a-edit")) {
        catchData(e)
        d.querySelector(".table-list-user").classList.toggle("table-show")
        setTimeout(() => {
            d.querySelector(".table-list-user").style.display = "none";
            d.querySelector(".table-list-update").style.display = "inline-table";       
        }, 300);
        d.querySelector(".table-list-update").classList.toggle("table-show")
    }

    if (e.target.matches(".a-cancel")) {
        d.querySelector(".table-list-user").classList.toggle("table-show")
        setTimeout(() => {
            d.querySelector(".table-list-user").style.display = "inline-table";
            d.querySelector(".table-list-update").style.display = "none";       
        }, 300);
        d.querySelector(".table-list-update").classList.toggle("table-show")
    }

    if (e.target.matches(".a-save")) {  
        updateData()
        createTableDB()
        d.querySelector(".table-list-user").classList.toggle("table-show")
        setTimeout(() => {
            d.querySelector(".table-list-user").style.display = "inline-table";
            d.querySelector(".table-list-update").style.display = "none";       
        }, 300);
        d.querySelector(".table-list-update").classList.toggle("table-show")
    }

    if (e.target.matches(".a-delete")) {
        deleteUser(e)
        createTableDB()
    }

  
})

