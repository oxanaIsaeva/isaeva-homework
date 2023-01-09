const checkName = kolobok ('лиса')

function kolobok (name) {
    switch(name){
        case 'дедушка':
            return 'Я от дедушки ушел'
        case 'заяц':
            return 'Я от зайчика ушел'
        default:
            return 'Меня съели'
    }
}

console.log (checkName)


const checkСharacter = newYear ('Дед Мороз')

function newYear (character) {
    return `${character}! ${character}! ${character}!`
}

console.log (checkСharacter)