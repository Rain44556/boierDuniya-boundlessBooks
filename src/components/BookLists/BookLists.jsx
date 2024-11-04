import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredAlreadyReadBooks } from '../../utilities/addToDB';
import Book from '../Book/Book';

const BookLists = () => {
const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();
//Ideally we will directly get the read book list from the database

//for now, we just trying to understand logic by using this process
useEffect(()=>{
const storedAlreadyReadBooksList = getStoredAlreadyReadBooks();
const storedAlreadyReadBooksListInt = storedAlreadyReadBooksList.map(id => parseInt(id));
//not the best way
// console.log(storedAlreadyReadBooksList,storedAlreadyReadBooksListInt, allBooks);

const alreadyReadBooksList = allBooks.filter(book => storedAlreadyReadBooksListInt.includes(book.bookId));
setReadList(alreadyReadBooksList);
}, [])

    return (
        <div>
              <Tabs>
    <TabList>
      <Tab>Already Read Books List: {readList.length}</Tab>
      {
        readList.map(book => <Book
        key={book.bookId}
        book={book}
        ></Book> )
      }
      <Tab>Add Wish List Books</Tab>
    </TabList>

    <TabPanel>
      <h2>I read books already</h2>
    </TabPanel>
    <TabPanel>
      <h2>Add my books in wish list </h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default BookLists;