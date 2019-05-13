import * as mongo from 'mongodb';

const client = mongo.default.MongoClient;
const url = 'mongodb://localhost:27017';

export default function start(){
    console.log("Running...");
    client.connect(url, (err, db) => {
        if(err) {
            console.error(err);
            return;
        }

        console.log("Success 🎉");
        db.close();
    });
}
