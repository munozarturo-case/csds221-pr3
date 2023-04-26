class Utils {
    static getDatabaseURI (username, password) {
        return `mongodb+srv://${username}:${password}@cluster-us-east.r8dna1m.mongodb.net/?retryWrites=true&w=majority`;
    }
}

export default Utils;