const numberCards = 16
var Score = 0
let openedCards = []
let cardTypes=[]


for (let index = 0; index < numberCards/2; index++) {
    cardTypes.push(index+1)
    cardTypes.push(index+1)
}


cardTypes = shuffle(cardTypes)
let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = cardTypes[index]
        c.type = cardTypes[index]
        c.className="card"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}



function flipp(event){
    if(!this.classList.contains('found'))
        openCard(this)  
}


function openCard(c){
    if(openedCards.length<2){
        c.classList.toggle('flipp')
        openedCards.push(c)
        if(openedCards.length==2){
            if(openedCards[0].type == openedCards[1].type){
                Score += 1
                document.querySelector('#Score').textContent = `Score: ${Score}`;
                window.setTimeout(
                ()=>{
                    openedCards.pop().classList.toggle('found')
                    openedCards.pop().classList.toggle('found')
                },
                500    
            )

            }
            else{             
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('flipp')
                        openedCards.pop().classList.toggle('flipp')
                    },
                    1500
                )
                
            }
        }
    }
}
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr)
        ctr--
        temp = arra1[ctr]
        arra1[ctr] = arra1[index]
        arra1[index] = temp
    }
    return arra1;
}