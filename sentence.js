let adjectives = ["fun", "happy", "sad", "painful", "horrific"]
let nouns = ["cat", "dog", "mouse", "man", "lion", "sprout", "goldfish"]
let verbs = ["eats", "sleeps", "wanders", "patrols", "stumbles", "drinks", "mopes"]
let advebs = ["lazily", "guardedly", "dangerously", "sadly", "happily", "eagerly"]

function randomInt(input){
    return Math.floor(Math.random() * input)
}

function updateSentence(){
    location = document.getElementById("sentenceLocation")
    sentence = "The " + adjectives[randomInt(adjectives.length())] + " " + nouns[randomInt(nouns.length())] + " " + verbs[randomInt(verbs.length())] + " " + adverbs[randomInt(adverbs.length())]
    location.innerHTML = sentence
}       