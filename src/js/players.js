import returnData from './main.js'


const player_list = [];
export default async function loadPlayers(playerId) {
    const url = `https://transfermarkt-db.p.rapidapi.com/v1/players/profile?locale=DE&player_id=${playerId}`;
    const player_data = await returnData(url);
    const player_profile = player_data.data.playerProfile
    const player = {
        name: player_profile.playerFullName,
        age:player_profile.age,
        player_image:player_profile.playerImage,
        country:player_profile.country,
        club:player_profile.club,
        club_image: player_profile.clubImage
    };
    player_list.push(player)

    console.log(player_list)
    return player

}

function renderPlayers(player_data){

}
