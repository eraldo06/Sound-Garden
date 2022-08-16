const URL = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

async function listarReservas (){
    const response = await fetch(URL)
        const data = await response.json()


    const tabela = document.querySelector('tbody')
    data.forEach((reservas) =>{
        tabela.innerHTML += 
       `<th> ${data.indexOf(reservas)+1} </th>
        <th> ${reservas.owner_name} </th>
        <th> ${reservas.owner_email} </th>
        <th> ${reservas.number_tickets} </th>
        `
        
    } ) 



}


listarReservas()
