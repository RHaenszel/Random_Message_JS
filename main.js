



const nounArray = ['person', 'dog', 'lion', 'elephant', 'electrician', 'plumber', 'gardener'];
const verbArray = ['walk', 'jump', 'skip', 'run', 'drive', 'swim'];
const placeArray = ['park', 'city', 'museum', 'art gallery', 'zoo', 'hotel'];

const randomWord = array => {
    // console.log(array.length)
    let word = array[Math.floor(Math.random() * (array.length))];
    // console.log(word);
    return word;
}



const noun = randomWord(nounArray);
const verb = randomWord(verbArray);
const place = randomWord(placeArray); 
//console.log(noun + verb + place)
//randomWord(noun);
console.log(`A _____ went for a _____ in the _____`);