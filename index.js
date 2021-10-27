//Dependencies
const Request = require("request")

//Main
async function user_info(username = String){
    return new Promise((resolve)=>{
        Request(`https://tryhackme.com/api/discord/user/${username}`, function(err, res, body){
            if(err){
                resolve("Something went wrong, make sure the username is valid.")
                return
            }

            if(body.indexOf("avatar") != -1){
                resolve(JSON.parse(body))
            }else{
                resolve("Invalid username.")
            }
        })
    })
}

async function global_leaderboard(){
    return new Promise((resolve)=>{
        Request("https://tryhackme.com/api/leaderboards", function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please try again later.")
                return
            }

            resolve(JSON.parse(body))
        })
    })
}

async function site_stats(){
    return new Promise((resolve)=>{
        Request("https://tryhackme.com/api/site-stats", function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please try again later.")
                return
            }

            resolve(JSON.parse(body))
        })
    })
}

async function new_rooms(){
    return new Promise((resolve)=>{
        Request("http://tryhackme.com/api/new-rooms/", function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please try again later.")
                return
            }

            resolve(JSON.parse(body))
        })
    })
}

async function room_info(room_code = String){
    return new Promise((resolve)=>{
        Request(`https://tryhackme.com/api/room/details?codes=${room_code}`, function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please make sure the room_code is valid.")
                return
            }

            if(body.indexOf('"success": false') != -1){
                resolve(JSON.parse(body))
            }else{
                resolve("Invalid room_code.")
            }
        })
    })
}

async function user_badges(username = String){
    return new Promise((resolve)=>{
        Request(`https://tryhackme.com/api/badges/get/${username}`, function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please make sure the username is valid.")
                return
            }

            if(body.indexOf('"name":') != -1){
                resolve(JSON.parse(body))
            }else{
                resolve("Invalid username.")
            }
        })
    })
}

async function room_series(keyword = String){
    return new Promise((resolve)=>{
        Request(`https://tryhackme.com/api/series?${keyword}`, function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please make sure the keyword is valid.")
                return
            }

            if(body.indexOf('"_id":') != -1){
                resolve(JSON.parse(body))
            }else{
                resolve("Invalid keyword.")
            }
        })
    })
}

async function common_network_rooms(){
    return new Promise((resolve)=>{
        Request("https://tryhackme.com/api/networks", function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please try again later.")
                return
            }

            resolve(JSON.parse(body))
        })
    })
}

async function common_rooms(){
    return new Promise((resolve)=>{
        Request("https://tryhackme.com/modules/summary", function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please try again later.")
                return
            }

            resolve(JSON.parse(body))
        })
    })
}

async function user_rooms(username = String){
    return new Promise((resolve)=>{
        Request(`https://tryhackme.com/api/created-rooms/${username}`, function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please make sure the username is valid.")
                return
            }

            if(body.indexOf('"success": true') != -1){
                resolve(JSON.parse(body))
            }else{
                resolve("Invalid username.")
            }
        })
    })
}

async function user_tickets(username = String){
    return new Promise((resolve)=>{
        Request(`https://tryhackme.com/games/tickets/won?username=${username}`, function(err, res, body){
            if(err){
                resolve("Something went wrong with the API, please make sure the username is valid.")
                return
            }

            if(body.indexOf('"success": true') != -1){
                resolve(JSON.parse(body))
            }else{
                resolve("Invalid username.")
            }
        })
    })
}

//Exporter
module.exports = {
    user_info: user_info,
    global_leaderboard: global_leaderboard,
    site_stats: site_stats,
    new_rooms: new_rooms,
    room_info: room_info,
    user_badges: user_badges,
    room_series: room_series,
    common_network_rooms: common_network_rooms,
    common_rooms: common_rooms,
    user_rooms: user_rooms,
    user_tickets: user_tickets
}
