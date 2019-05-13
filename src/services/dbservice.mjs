import * as mongo from 'mongodb';

const mongoclient = mongo.MongoClient;
const url = 'mongodb://localhost:27017';

function start(){
    console.log("Running...");
mongoclient.connect(url, (err, client) => {
    if(err) {
        console.error(err);
        return;
    }

    console.log("Success 🎉");
});
}

export default start;