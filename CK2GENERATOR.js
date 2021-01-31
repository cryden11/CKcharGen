const eduNum = Math.floor(Math.random() * 4) 
const sinNum = Math.floor(Math.random()* 6)
const traitNum = Math.floor(Math.random()* 16)
const traitNum2 = Math.floor(Math.random()* 16)
const northName = ['Eddard','Alaric','Jon','Benjen']

const randName = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)]
}

console.log(randName(northName))

const getRandEducation = () => {
    let education = ''
    switch(eduNum){
        case 0: 
            education = 'Martial'
            break
        case 1: 
            education = 'Stewardship'
            break
        case 2:
            education = 'Intrigue'
            break
        case 3: 
            education = 'Learning'
    }
    return education
}

const getRandSin = () => {
    let sin = ''
    switch(sinNum){
        case 0:
            sin = 'Wroth'
            break
        case 1:
            sin = 'Lustful'
            break
        case 2:
            sin = 'Slothful'
            break
        case 3:
            sin = 'Greedy'
            break
        case 4: 
            sin = 'Gluttonous'
            break
        case 5:
            sin = 'Envious'
            break
        case 6:
            sin = 'Proud'
    }
    return sin
}

const getRandTrait = () => {
    let trait1 = ''
    switch(traitNum){
        case 0:
            trait1 = 'Ambitious'
            break
        case 1:
            trait1 = 'Arbitrary'
            break
        case 2:
            trait1 = 'Brave'
            break
        case 3:
            trait1 = 'Content'
            break
        case 4:
            trait1 = 'Craven'
            break
        case 5:
            trait1 = 'Cruel'
            break
        case 6:
            trait1 = 'Cynical'
            break
        case 7:
            trait1 = 'Deceitful'
            break
        case 8:
            trait1 = 'Erudite'
            break
        case 9:
            trait1 = 'Gregarious'
            break
        case 10:
            trait1 = 'Honest'
            break
        case 11:
            trait1 = 'Just'
            break
        case 12: 
            trait1 = 'Paranoid'
            break
        case 13:
            trait1 = 'Shy'
            break
        case 14:
            trait1 = 'Stubborn'
            break
        case 15: 
            trait1 = 'Trusting'
            break
        case 16:
            trait1 = 'Zealous'
    }
    return trait1
}

const getRandTrait2 = () => {
    let trait2 = ''
    switch(traitNum2){
        case 0:
            trait2 = 'Ambitious'
            break
        case 1:
            trait2 = 'Arbitrary'
            break
        case 2:
            trait2 = 'Brave'
            break
        case 3:
            trait2 = 'Content'
            break
        case 4:
            trait2 = 'Craven'
            break
        case 5:
            trait2 = 'Cruel'
            break
        case 6:
            trait2 = 'Cynical'
            break
        case 7:
            trait2 = 'Deceitful'
            break
        case 8:
            trait2 = 'Erudite'
            break
        case 9:
            trait2 = 'Gregarious'
            break
        case 10:
            trait2 = 'Honest'
            break
        case 11:
            trait2 = 'Just'
            break
        case 12: 
            trait2 = 'Paranoid'
            break
        case 13:
            trait2 = 'Shy'
            break
        case 14:
            trait2 = 'Stubborn'
            break
        case 15: 
            trait2 = 'Trusting'
            break
        case 16:
            trait2 = 'Zealous'
    }
    return trait2
}
const createCharacter = (name, age, education, trait1, trait2,) => {
    return {
        name: name, 
        age: age,
        education: education,
        trait1: trait1,
        trait2: trait2,
    }
} 

console.log(createCharacter(randName(northName), 20, getRandEducation(), getRandTrait(), getRandTrait2()))