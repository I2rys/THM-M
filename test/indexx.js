//Dependencies
const THM_M = require("../index.js")

//Functions
async function Main(){
    const user_info = await THM_M.user_info("Trac3D1y")

    console.log(user_info)
}

//Main
Main()
