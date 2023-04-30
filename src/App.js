import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Title() {
  return (
    <div class="title">
      <h1>Library Database</h1>
    </div>
  );
}

function FictionBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const handleReload = () => {
    window.location.reload();
  };
  useEffect(() => {
    async function getFictionBooks() {
      let { data: fictionbooks, error } = await supabase
        .from('fictionbooks')
        .select('*');
      setMyBooks(fictionbooks);
    }
    getFictionBooks();
  }, []);

  async function addFictionBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const isbn = formData.get('isbn');
    const description = formData.get('description');
    const { data, error } = await supabase
      .from('fictionbooks')
      .insert([{ title, author, isbn, description }]);
    setMyBooks([...myBooks, ...data]);
  }

  return (
    <div>
      <h2 class="tabletitle">Fiction Books</h2>
    <table class="fictionbooktable">
      {myBooks &&
        myBooks.map((b) => (
          <tr class="fictionbooktr">
            <td class="fictionbooktd">{b.title}</td>
            <td class="fictionbooktd">{b.author}</td>
            <td class="fictionbooktd">{b.isbn}</td>
            <td class="fictionbooktd">{b.description}</td>
          </tr>
        ))}
    </table>
    <h2 class="formtitle">Fiction Book Add Form</h2>
    <h3>Please make sure to click "Add" button ONCE and click "Reload" button to see the updated database.</h3>
    <div class="formdiv">
    <form onSubmit={addFictionBook} class="w-full max-w-sm">
      <label>
        <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="title" placeholder="Title" required />
      </label>
      <label>
        <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="author" placeholder="Author" required />
      </label>
      <label>
        <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="isbn" placeholder="ISBN" required />
      </label>
      <label>
        <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="description" placeholder="Description" required />
      </label>
      <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add</button>
      <button type="button" class="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleReload}>Reload</button>
    </form>
    </div> 
  </div>
  );
}

function NonFictionBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const handleReload = () => {
    window.location.reload();
  };
  useEffect(() => {
    async function getNonFictionBooks() {
      let { data: nonfictionbooks, error } = await supabase
        .from('nonfictionbooks')
        .select('*');
      setMyBooks(nonfictionbooks);
    }
    getNonFictionBooks();
  }, []);

  async function addNonFictionBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const isbn = formData.get('isbn');
    const description = formData.get('description');
    const { data, error } = await supabase
      .from('nonfictionbooks')
      .insert([{ title, author, isbn, description }]);
    setMyBooks([...myBooks, ...data]);
  }

  return (
    <div>
      <h2 class="tabletitle">Non-Fiction Books</h2>
      <table class="nonfictionbooktable">
        {myBooks &&
          myBooks.map((b) => (
            <tr class="nonfictionbooktr">
              <td class="nonfictionbooktd">{b.title}</td>
              <td class="nonfictionbooktd">{b.author}</td>
              <td class="nonfictionbooktd">{b.isbn}</td>
              <td class="nonfictionbooktd">{b.description}</td>
            </tr>
          ))}
      </table>
      <h2 class="formtitle">Non-Fiction Book Add Form</h2>
      <h3>Please make sure to click "Add" button ONCE and click "Reload" button to see the updated database.</h3>
      <div class="formdiv">
      <form onSubmit={addNonFictionBook} class="w-full max-w-sm">
        <label>
          <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="title" placeholder="Title" required />
        </label>
        <label>
          <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="author" placeholder="Author" required />
        </label>
        <label>
          <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="isbn" placeholder="ISBN" required />
        </label>
        <label>
          <input class="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="description" placeholder="Description" required />
        </label>
        <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add</button>
        <button type="button" class="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleReload}>Reload</button>
      </form>
    </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <FictionBooks />
        <NonFictionBooks />
      </header>
    </div>
  );
}

export default App;