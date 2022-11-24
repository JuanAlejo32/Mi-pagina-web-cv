const d = document;

const $dataUser = d.querySelector(".td-user-update"),
      $dataName = d.getElementById("update-name"),
      $dataId = d.querySelector(".td-id-update"),
      $dId = d.querySelector(".a-save")

const $updateName = d.getElementById("update-name")

export const catchData =(e)=>{
   const dataId = e.target.parentNode.querySelector('.a-edit').dataset.id,
         dataUser = e.target.parentNode.parentNode.querySelector('.td-user').innerText,
         dataName = e.target.parentNode.parentNode.querySelector('.td-name').innerText
        

    $dataUser.innerText = dataUser
    $dataId.innerText = dataId
    $dataName.value = dataName
    $dId.dataset.id = dataId

}

export const updateData = ()=>{
   const dbUpdate = JSON.parse(localStorage.getItem("dbuser"))

   const updateDb = dbUpdate.map((element,index)=>{
        if (index == $dId.dataset.id) {
            return {...element,name:$updateName.value}
        }else{
            return element
        }
     });

     console.log(updateDb);

    localStorage.setItem("dbuser",JSON.stringify(updateDb))
}