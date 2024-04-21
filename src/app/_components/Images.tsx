import React from 'react'
import { db } from "~/server/db";
import Image from 'next/image';
const Images = async () => {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id)
    });
    return (
        <div className='flex flex-wrap justify-center'>{[...images, ...images].map((image) => (
            <div
                key={image.id}
                className='p-4'
                // className="w-1/2 sm:w-1/3 md:w-1/5 p-4 "
            >
                <Image
                    src={image.url}
                    alt={image.name}
                    className="rounded-xl "
                    width={400}
                    height={400}
                />
                {image.id}
            </div>
        ))}</div>
    )
}

export default Images