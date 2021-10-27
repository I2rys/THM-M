<h1 align="center">THM-M</h1>
<h4 align="center">A complete TryHackMe API module maybe</h4>
<p align="center">
	<a href="https://github.com/I2rys/THM-M/blob/main/LICENSE"><img src="https://img.shields.io/github/license/I2rys/THM-M?style=flat-square"></img></a>
	<a href="https://github.com/I2rys/THM-M/issues"><img src="https://img.shields.io/github/issues/I2rys/THM-M.svg"></img></a>
	<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/-Nodejs-green?style=flat-square&logo=Node.js"></img></a>
</p>


## Installation
Github:

    git clone https://github.com/I2rys/THM-M

NPM Packages:

    npm i request
    
## Usage
Retrieves user information:

    THM_M.user_info(username)

Retrieves global leaderboard:

    THM_M.global_leaderboard()

Retrieves website stats:

    THM_M.site_stats()

Retrieves new rooms:

    THM_M.new_rooms()

Retrieves room information:

    THM_M.room_info(room_code)

Retrieves user badges:

    THM_M.user_badges(username)

Retrieves room series:

    THM_M.room_series(keyword)

Retrieves common network rooms:

    THM_M.common_network_rooms()

Retrieves common rooms:

    THM_M.common_rooms()

Retrieves user rooms:

    THM_M.user_rooms(username)

Retrieves user tickets:

    THM_M.user_tickets(username)

## License
MIT © I2rys
