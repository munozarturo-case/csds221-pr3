class UserUtil {
    static getRandomUsername() {
        const adj = ['Alert', 'Alive', 'Amused', 'Angry', 'Awful', 'Bad', 'Better', 'Black', 'Bloody', 'Blue', 'Bored', 'Brainy', 'Brave', 'Bright', 'Busy', 'Calm', 'Clean', 'Clear', 'Clever', 'Cloudy', 'Clumsy', 'Crazy', 'Creepy', 'Cruel', 'Cute', 'Dark', 'Dead', 'Dizzy', 'Drab', 'Dull'];
        const obj = ['Dog', 'Cow', 'Cat', 'Horse', 'Donkey', 'Tiger', 'Lion', 'Bear', 'Turtle', 'Rabbit', 'Hare', 'Hen', 'Pigeon', 'Crow', 'Fish', 'Frog', 'Whale', 'Eagle', 'Fox', 'Goat', 'Jackal', 'Emu', 'Eel', 'Goose', 'Wolf', 'Beagle', 'Monkey', 'Beaver', 'Bat', 'Badger', 'Cobra', 'Camel', 'Hawk', 'Deer', 'Jaguar', 'Ibex', 'Lizard', 'Koala', 'Iguana', 'Llama', 'Dodo', 'Zebra', 'Possum', 'Wombat', 'Bison', 'Bull', 'Sheep', 'Mouse', 'Otter', 'Sloth', 'Owl', 'Racoon', 'Mole', 'Duck', 'Swan', 'Lynx', 'Elk', 'Boar', 'Lemur', 'Mule', 'Baboon', 'Rat', 'Snake'];

        const randomAdj = adj[Math.floor(Math.random() * adj.length)];
        const randomObj = obj[Math.floor(Math.random() * obj.length)];
        const randomNumber = Math.floor(Math.random() * 100);

        return `${randomAdj}${randomObj}${randomNumber}`;
    }
}

export default UserUtil;