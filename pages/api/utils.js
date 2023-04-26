class Utils {
    static getDatabaseURI (username, password) {
        return `mongodb+srv://${username}:${password}@main-cluster.njo3xbw.mongodb.net/?retryWrites=true&w=majority`;
    }
}

export default Utils;