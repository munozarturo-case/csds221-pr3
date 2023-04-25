class UserUtil {
    static getRandomUsername() {
        const adj = ['Adorable', 'Adventurous', 'Aggressive', 'Agreeable', 'Alert', 'Alive', 'Amused', 'Angry', 'Annoyed', 'Annoying', 'Anxious', 'Arrogant', 'Ashamed', 'Attractive', 'Average', 'Awful', 'Bad', 'Beautiful', 'Better', 'Bewildered', 'Black', 'Bloody', 'Blue', 'Blue-eyed', 'Blushing', 'Bored', 'Brainy', 'Brave', 'Breakable', 'Bright', 'Busy', 'Calm', 'Careful', 'Cautious', 'Charming', 'Cheerful', 'Clean', 'Clear', 'Clever', 'Cloudy', 'Clumsy', 'Colorful', 'Combative', 'Comfortable', 'Concerned', 'Condemned', 'Confused', 'Cooperative', 'Courageous', 'Crazy', 'Creepy', 'Crowded', 'Cruel', 'Curious', 'Cute', 'Dangerous', 'Dark', 'Dead', 'Defeated', 'Defiant', 'Delightful', 'Depressed', 'Determined', 'Different', 'Difficult', 'Disgusted', 'Distinct', 'Disturbed', 'Dizzy', 'Doubtful', 'Drab', 'Dull'];
        const obj = ['Dog', 'Cow', 'Cat', 'Horse', 'Donkey', 'Tiger', 'Lion', 'Panther', 'Leopard', 'Cheetah', 'Bear', 'Elephant', 'Polarbear', 'Turtle', 'Tortoise', 'Crocodile', 'Rabbit', 'Porcupine', 'Hare', 'Hen', 'Pigeon', 'Albatross', 'Crow', 'Fish', 'Dolphin', 'Frog', 'Whale', 'Alligator', 'Eagle', 'Flyingsquirrel', 'Ostrich', 'Fox', 'Goat', 'Jackal', 'Emu', 'Armadillo', 'Eel', 'Goose', 'Arcticfox', 'Wolf', 'Beagle', 'Gorilla', 'Chimpanzee', 'Monkey', 'Beaver', 'Orangutan', 'Antelope', 'Bat', 'Badger', 'Giraffe', 'HermitCrab', 'GiantPanda', 'Hamster', 'Cobra', 'Hammerheadshark', 'Camel', 'Hawk', 'Deer', 'Chameleon', 'Hippopotamus', 'Jaguar', 'Chihuahua', 'KingCobra', 'Ibex', 'Lizard', 'Koala', 'Kangaroo', 'Iguana', 'Llama', 'Chinchillas', 'Dodo', 'Jellyfish', 'Rhinoceros', 'Hedgehog', 'Zebra', 'Possum', 'Wombat', 'Bison', 'Bull', 'Buffalo', 'Sheep', 'Meerkat', 'Mouse', 'Otter', 'Sloth', 'Owl', 'Vulture', 'Flamingo', 'Racoon', 'Mole', 'Duck', 'Swan', 'Lynx', 'Monitorlizard', 'Elk', 'Boar', 'Lemur', 'Mule', 'Baboon', 'Mammoth', 'Bluewhale', 'Rat', 'Snake', 'Peacock'];
    
        const randomAdj = adj[Math.floor(Math.random() * adj.length)];
        const randomObj = obj[Math.floor(Math.random() * obj.length)];
        const randomNumber = Math.floor(Math.random() * 1000);

        return `${randomAdj}${randomObj}${randomNumber}`;
    }
}

export default UserUtil;