



const nounArray = ['person', 'dog', 'lion', 'elephant', 'electrician', 'plumber', 'gardener'];
const verbArray = ['walk', 'jump', 'skip', 'run', 'drive', 'swim'];
const placeArray = ['park', 'city', 'museum', 'art gallery', 'zoo', 'hotel'];

const randomWord = array => {
    let word = array[Math.floor(Math.random() * (array.length))];
    return word;
}



const noun = randomWord(nounArray);
const verb = randomWord(verbArray);
const place = randomWord(placeArray); 

console.log(`A ${noun} went for a ${verb} in the ${place}!`);