import { Schema, model, models } from 'mongoose';


const BookInfoSchema = new Schema({

    name: {
        type: String,
        required: [true, 'name is required.'],
    },
    topic: {
        type: String,
        required: [true, 'topic is required.'],
    }
});


const BookInfo = models.BookInfo || model('BookInfo', BookInfoSchema);


export default BookInfo;
