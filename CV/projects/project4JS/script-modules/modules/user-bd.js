let userDB =[ {
            user:"admintest",
            name:"Admin example",
            rol:"admin",
            pass:12345},
          {
            user:"clientetest",
            name:"Cliente example",
            rol:"client",
            pass:1234
          }]


export const localDbuser =()=>{
    if (localStorage.getItem("dbuser") === null) {
        localStorage.setItem("dbuser",JSON.stringify(userDB))
    }
}         