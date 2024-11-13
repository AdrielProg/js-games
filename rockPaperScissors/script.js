

const buttons = document.querySelectorAll('button')
const rock = document.getElementById('bt-rock');
const paper = document.getElementById('bt-paper');
const scissors = document.getElementById('bt-scissors');
const result = document.getElementById('result');
const plays = [
    {
        id: 1,
        name: rock.id.substring(3),
        img: "./assets/rock.png"
    },
    {
        id: 2,
        name: paper.id.substring(3),
        img: "./assets/paper.png"
    },
    {
        id: 3,
        name: scissors.id.substring(3),
        img: "./assets/scissors.png"
    }

]


const playGame = (player, computer)=> {

    result.innerHTML = ` 
       <div class="container-result-game uk-flex uk-grid-large uk-flex-center" uk-grid>
                <div class="uk-card uk-card-default uk-card-body uk-card-large uk-width-xlarge">
                    <h3 class="uk-card-title">Computer</h3>
                    <img src="./assets/${computer}.png" alt="">
                </div>
                <div class="uk-card uk-card-default uk-card-body uk-card-large uk-width-xlarge">
                    <h3 class="uk-card-title">You</h3>
                    <img src="./assets/${player}.png" alt="">
                </div>
        </div>`


    console.log(player, computer)
    }

    
    buttons.forEach( e =>{
        e.addEventListener('click', (event) => {
            const playerChoose = event.target.id.substring(3)
            const computerChosse = computerChoose();
            playGame(playerChoose, computerChosse)
        })
        
    })

const computerChoose = () => {
    const randomNumber = Math.random();
    let computerMoviment = '';

    if(randomNumber >= 0 && randomNumber < 1/3 ){
        computerMoviment = 'rock'
    }
     else if(randomNumber >= 1/3 && randomNumber < 2/3 ){
        computerMoviment = 'paper'
    }
    else if(randomNumber >= 2/3 && randomNumber < 1 ){
        computerMoviment = 'scissors'
    }

    return computerMoviment
}
