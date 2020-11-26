/*
1.)Leeres Array zum SPeichern der aufgedeckten Karten (openedCards)
2.)Karten richtig erzeugen (type)
3.)Karten mischen (Shuffle) [1,1,2,2,3,3.....8,8]
4.)Karten zum Deck hinzufügen
5.)Klick Eventhaendler
6.)Kartenlogik:
    6.1) prüfen ob karte bereits found +
    prüfen wie viele Karten bereits aufgedeckt sind? (0,1,2)
    6.2) wenn weniger als 2 -> aufdecken
    6.3) Erkennen ob zwei gleiche Karten 
    aufgedeckt wurden -> wenn gleich -> found; wenn nicht gleich -> verdecken
*/


const numberCards = 16
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
    //this.classList.toggle('flip')
}

function openCard(c){
    //alert(c.innerHTML)
    if(openedCards.length<2){
        c.classList.toggle('flipp')
        openedCards.push(c)
        if(openedCards.length==2){
            if(openedCards[0].type == openedCards[1].type){
                //alert('gleich')
                //TODO: Klasse found hinzufügen
                window.setTimeout(
                ()=>{
                    openedCards.pop().classList.toggle('found')
                    openedCards.pop().classList.toggle('found')
                },
                1000       
            )
            }
            else{             
                //alert('nicht gleich')
                //TODO: warten (setTimeout) Karten wieder umdrehen
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('flipp')
                        openedCards.pop().classList.toggle('flipp')
                    },
                    1000
                )
            }
        }
    }
}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
