const d = document;

const $dataUser = d.querySelector(".td-user-update"),
      $dataName = d.getElementById("update-name"),
      $dataRol = d.getElementById("rol-edit"),
      $dataId = d.querySelector(".a-save")

const $updateName = d.getElementById("update-name"),
      $updateRol = d.getElementById("rol-edit")

export const catchData =(e)=>{
   const dataId = e.target.parentNode.querySelector('.a-edit').dataset.id,
         dataUser = e.target.parentNode.parentNode.querySelector('.td-user').innerText,
         dataName = e.target.parentNode.parentNode.querySelector('.td-name').innerText,
         dataRol = e.target.parentNode.parentNode.querySelector('.td-rol').innerText

    $dataUser.innerText = dataUser
    $dataName.value = dataName
    $dataId.dataset.id = dataId

    if (dataRol == "admin") {
        $dataRol.options.selectedIndex = 0
    }else{
        $dataRol.options.selectedIndex = 1
    }

}

export const updateData = ()=>{
   const dbUpdate = JSON.parse(localStorage.getItem("dbuser"))

   const updateDb = dbUpdate.map((element,index)=>{
        if (index == $dataId.dataset.id) {
            return {...element,name:$updateName.value,rol:$updateRol.value}
        }else{
            return element
        }
     });

    localStorage.setItem("dbuser",JSON.stringify(updateDb))
}