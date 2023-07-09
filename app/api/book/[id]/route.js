import BookInfo from "@models/bookInfo";
import { connectToDB } from "@utils/database";

export const DELETE = async (request, { params }) => {

    try {
        await connectToDB();
        await BookInfo.findByIdAndRemove(params.id)
        return new Response("deleted successfully", { status: 200 })


    }
    catch (error) {
        console.log(error)
        return new Response("failed", { status: 500 })

    }
}


export const PATCH = async (request, { params }) => {
    const { bookName, bookTopic } = await request.json();


    try {
        await connectToDB();
        const existingBook = await BookInfo.findById(params.id);

        if (!existingBook) {
            return new Response("book not found", { status: 404 })
        }

        existingBook.name = bookName;
        existingBook.topic = bookTopic;
        console.log(existingBook, 'existing Book')

        await existingBook.save();
        return new Response("book  found", { status: 200 })

    }
    catch (error) {

        return new Response("error updating data", { status: 500 })
    }

}