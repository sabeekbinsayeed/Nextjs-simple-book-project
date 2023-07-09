import BookInfo from "@models/bookInfo";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {


    try {
        await connectToDB();
        const book = await BookInfo.find({})

        if (!book)
            return new Response("book not found", { status: 404 })

        return new Response(JSON.stringify(book), { status: 200 })

    }
    catch (error) {
        return new Response("Failed to fetch data ", { status: 500 })
    }
}