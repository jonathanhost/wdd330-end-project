export default function loadTeams(){
    fetch("https://v3.football.api-sports.io/teams?league=71&season=2024", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "0b8423ed61b5f4dc2d046bea90fdaf81"
        }
    })
    .then(response => response.json())
.then(data => {
    const teams = data.response;  // Acessa o array 'response'
    
    // Cria um array para armazenar os novos objetos de times
    const teamObjects = teams.map(teamObj => {
        return {
            code: teamObj.team.code,
            country: teamObj.team.country,
            founded: teamObj.team.founded,
            id: teamObj.team.id,
            logo: teamObj.team.logo,
            name: teamObj.team.name,
            national: teamObj.team.national
        };
    });
    
    // Exibe os novos objetos no console
    createList(teamObjects);
})
.catch(err => {
    console.log(err);
});


}
    

function createList(teamObjects){
    const teamsContainer = document.getElementById('teams-container');
    teamObjects.forEach(team => {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team';
        teamDiv.innerHTML = `
            <img src="${team.logo}" alt="${team.name} Logo">
            <h2>${team.name}</h2>
            <p><strong>Country:</strong> ${team.country}</p>
            <p><strong>Founded:</strong> ${team.founded}</p>
            <a href="../teampage/index.html?id=${team.id}" class="button-link">
            <button class="button">Verify Transfer</button>
            </a>
        `;
    
        teamsContainer.appendChild(teamDiv);
    })
  
}


