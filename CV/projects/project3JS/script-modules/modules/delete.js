const d = document

export const deleteUser = (e)=>{

   const deleteIndex = e.target.parentNode.querySelector('.a-delete').dataset.id,
         dbDelete = JSON.parse(localStorage.getItem("dbuser"))

         dbDelete.splice(deleteIndex,1)
         
    localStorage.setItem("dbuser",JSON.stringify(dbDelete))
}