import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredAlreadyRead } from '../../utilities/addToDB';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    const findBook = data.find(book => book.bookId === id)
    // console.log(findBook,bookId,id);

    const {bookName,author,image,category,review,tags,totalPages, publisher, yearOfPublishing, rating, bookId: currentBookId } = findBook;

const handleAlreadyRead = (id) =>{
//1. understand what to store or save: (bookId)
//2. where to store: database
//3. array, list, collection:
//4. checked if the book already read
//5. if not, add the book to the list
//6. if yes, do not add the same book again

addToStoredAlreadyRead(id)

;}

    return (
        <div>
            <h1>Book Derails: {bookId}</h1>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl bg-gray-300 p-10" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className='pt-6'>
                            By: {author}
                        </p>
                        <div className="divider"></div>
                        <p>{category}</p>
                        <div className="divider"></div>
                        <p><span className='font-bold'>Review:</span> {review}</p>
                        <p className=' py-6'><span className='font-bold'>Tag</span>
                        {
                            tags.map((tag, index) => <button 
                            key={index}
                            className='btn btn-sm rounded-3xl text-green-400 font-extrabold mx-5'>#{tag}</button>)
                        }
                        </p>
                        <div className="divider"></div>
                        <p className='grid grid-cols-4 py-2'><span>Number of Pages:</span> {totalPages}</p>
                        <p className='grid grid-cols-4 pb-2'><span className=''>Publisher:</span> {publisher}</p>
                        <p className='grid grid-cols-4'><span>Year of Publishing:</span> {yearOfPublishing}</p>
                        <p className='grid grid-cols-4 py-2 pb-5'><span>Rating:</span> {rating}</p>
                        <button onClick={()=> handleAlreadyRead(bookId)} className="btn btn-primary">Already read</button>
                        <button className="btn btn-primary ml-5">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;