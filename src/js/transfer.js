import returnData from './main.js'
import loadPlayers from './players.js'

export default async function listTransfer() {
    const url = 'https://transfermarkt-db.p.rapidapi.com/v1/transfers/list?page_number=0&top_transfers_first=true&locale=DE';
    const transfer_list = await returnData(url);

   
    console.log(transfer_list)
    listrender(transfer_list.data);
}

function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function listrender(transfer_list) {
    const chunkedLists = chunkArray(transfer_list, 2); 
  
    for (const chunk of chunkedLists) {
      chunk.forEach(item => {
        loadPlayers(item.playerID);
      });
      await delay(1000); 
    }
  }
  

listTransfer();