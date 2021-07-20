export default class Card {
    constructor (name) {
        this.name = name
    }

    isMatch(name) {
        return this.name === name
    }
}