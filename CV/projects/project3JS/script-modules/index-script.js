import { deleteUser } from "./modules/delete.js";
import { createTableDB, test, validationLogin } from "./modules/login.js";
import { validaRegister } from "./modules/register.js";
import { catchData,updateData } from "./modules/update.js";
import { localDbuser } from "./modules/user-bd.js";





const d = document;

const $formLogin = d.querySelector(".form-login-section"),
      $formRegister = d.querySelector(".container-form-register"),
      $tableUser = d.querySelector(".table-list-user")

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

    if (e.target.matches('#btn-slide-register')) {
        d.querySelector(".sliders").style.transform = "translateX(-50%)"
    }

    if (e.target.matches('#btn-create-register')) {
        validaRegister();
    }


    if (e.target.matches('#btn-cancel-register')) {
        d.querySelector(".sliders").style.transform = "translateX(0%)"
    }

    if (e.target.matches(".a-edit")) {
        catchData(e)
        d.querySelector(".table-user").classList.toggle("table-show")
        setTimeout(() => {
            d.querySelector(".table-user").style.display = "none";
            d.querySelector(".table-update").style.display = "inline-table";       
        }, 300);
        d.querySelector(".table-update").classList.toggle("table-show")
    }

    if (e.target.matches(".a-save")) {  
        updateData()
        createTableDB()
        d.querySelector(".table-user").classList.toggle("table-show")
        setTimeout(() => {
            d.querySelector(".table-user").style.display = "inline-table";
            d.querySelector(".table-update").style.display = "none";       
        }, 300);
        d.querySelector(".table-update").classList.toggle("table-show")
    }

    if (e.target.matches(".a-delete")) {
        deleteUser(e)
        createTableDB()
    }

    if (e.target.matches(".a-cancel")) {
        d.querySelector(".table-user").classList.toggle("table-show")
        setTimeout(() => {
            d.querySelector(".table-user").style.display = "inline-table";
            d.querySelector(".table-update").style.display = "none";       
        }, 300);
        d.querySelector(".table-update").classList.toggle("table-show")
    }
})



