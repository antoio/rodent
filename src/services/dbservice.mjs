import * as mongo from 'mongodb';

const testdbname = 'clusterfsck-kcjcx.mongodb.net';
const username = 'budb';
const password = 'b00mb00m';

const url = `mongodb+srv://${username}:${password}@${testdbname}/test?retryWrites=true`;

export default function start(){
    console.log("Running...");
    const client = new mongo.default.MongoClient(url, {useNewUrlParser: true});
    client.connect((err, db) => {
        if(err) {
            console.error(err);
            return;
        }
        const client_db = client.db("test");
        //console.log(client_db);

        const coll = client_db.collection("devices");
        console.log(coll);

        console.log("Success 🎉");
        db.close();
    });
}
