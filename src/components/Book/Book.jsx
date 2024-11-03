import React from 'react';

const Book = ({ book }) => {
    const { author, image, bookName, tags, category, rating } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-7">
            <figure className='bg-gray-100 rounded-xl py-7'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className='flex gap-2 justify-center'>
                    {
                        tags.map(tag => <button className='btn btn-sm rounded-3xl text-green-400 font-bold'>{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 border-dashed"></div>
                <div className="card-actions justify-between flex">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge">
                        {rating}
                        <div className="rating pl-2">
                            <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;