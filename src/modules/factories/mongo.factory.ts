export default class MongoFactory {
    
    constructor() {}

    async connect() {

        try {

            const uri = 'mongodb+srv://admin:<password>@mongodbtutorial.p084l.mongodb.net/?retryWrites=true&w=majority';

            const mongoose = (await import('mongoose')).connect(uri);
            return mongoose;

        } catch (err) {

            if (err instanceof Error) return err;
            else new Error('Unkown Error : ' + JSON.stringify(err));

        }

    }

}