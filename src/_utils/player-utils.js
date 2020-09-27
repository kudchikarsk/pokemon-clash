import { head } from 'lodash';

export function getPlayerCards() {
    return JSON.parse(localStorage.getItem("cards")) ||[];
}

export function setPlayerCards(cards) {
    localStorage.setItem("cards", JSON.stringify(cards));
}

export function getCardById(cards,id) {
    return head(cards.filter(c=>c.pokemon.id==id));
}

export function addPlayerCard({id,pokemon, species}) {
    let cards = getPlayerCards();
        let newCard = {
            id,
            pokemon,
            species,
            count:0
        };

        let card = getCardById(cards, id) || newCard;

        if(card.count==0)
        {
            cards.push(card);
        }

        card.count+=1;
        
        setPlayerCards(cards);
}