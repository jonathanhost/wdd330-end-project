
export default function loadtransfer(teamId){
   console.log('entrando')
    fetch(`https://v3.football.api-sports.io/transfers?team=${teamId}`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "0b8423ed61b5f4dc2d046bea90fdaf81"
        }
    })
    .then(response => response.json())
.then(data => {
    const teams = data.response; 
    getTransfersFrom2024(teams,teamId)

})
.catch(err => {
    console.log(err);
});


}

function getTransfersFrom2024(data,teamId) {
  console.log('entrando')
    let transfers2024 = [];
    data.forEach(item => {
      if (item.transfers) {
        const playerName = item.player.name;
        const transfers = item.transfers.filter(transfer => {
          const year = new Date(transfer.date).getFullYear();
          return year === 2024;
        }).map(transfer => {
          return { ...transfer, playerName };
        });
        transfers2024 = transfers2024.concat(transfers);
      }
    });
    createList(transfers2024,teamId);
  }
  


  function createList(teamObjects,teamId){
    console.log('entrando')
    const teamsContainer = document.getElementById('transfer-list');
    teamObjects.forEach(player => {
      const playerDiv = document.createElement('div');
        if (player.teams.in.id == teamId){
  
          playerDiv.className = 'transfer-item transfer-in';
        }
        else{
          playerDiv.className = 'transfer-item transfer-out';
        }
          
          playerDiv.innerHTML = `
               <img src="${player.teams.out.logo}" alt="${player.teams.out.name}" class="team-logo">
               <span class="out-team-name">${player.teams.out.name}</span>
              <div class="details">
                  <span class="player-name">${player.playerName}</span>
                  <span class="transfer-date">Data: ${player.date}</span>
              </div>
              <span class="arrow">→</span>
              <span class="in-team-name">${player.teams.in.name}</span>
              <img src="${player.teams.in.logo}" alt="${player.teams.in.logo}" class="team-logo">
          `;
          teamsContainer.appendChild(playerDiv);

        }
      )
    }
