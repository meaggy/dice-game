
// TODO: break up function, create dice image?

const form = document.getElementById('userForm')
form.addEventListener('submit', function(event){
    event.preventDefault(); 
    const targetDiv = document.getElementById('diceRow');

    targetDiv.innerHTML = '';

    const input = document.getElementById('inputField').value;
    const quantity = parseInt(input) +1;
    console.log("REPORTING INPUT", typeof(quantity));

    for (let i = 1; i < quantity; i++){


        let randomNumber = Math.floor(Math.random() * 6) + 1;

        const newDiv = document.createElement('div');
        const newPlayer = document.createElement('p');
        const newDie = document.createElement('img');
        
        newPlayer.textContent = `Player ${i}`;
        newDie.setAttribute('src', `assets/images/dice${randomNumber}.png`);
        newDie.setAttribute('alt', `A die with value of ${randomNumber}`);  // accesibility

        newDiv.appendChild(newPlayer);  
        newDiv.appendChild(newDie);  
        targetDiv.appendChild(newDiv);  
    };

}
)
