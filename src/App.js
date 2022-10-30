import './App.css';
import contacts1 from "./contacts.json";
import {useState} from 'react';

let contactsArr = contacts1.slice(0, 5);
let contactsArr1 = contactsArr;
let remainingContacts = contacts1.slice(5)

function App() {
  
  const [contacts, setContacts] = useState(contactsArr1);

  
  // let count = 5;

  // const suma = () => {
  //   console.log("Hola: ", count)
  //   count++;
  // }
  
  const afegirContact = () => {
    
    let newArr = contacts.map(e => {return e});
    newArr.push(remainingContacts[Math.floor(Math.random()*remainingContacts.length)])
    // suma();
    setContacts(newArr)

    // console.log("count: ", count)

  }


  return (
    <div className="App">
    <h1>Iron Contacts</h1>
    <input type="button" onClick={ afegirContact } value="Afegir Famós" />
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Has an Oscar?</th>
          <th>Has an Emmy?</th>
          <th>ID</th>
        </tr>
        {contacts.map((contact, k) => {
          return (<tr key={k}>
                    <td><img src={contact.pictureUrl} alt="profile"/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>{contact.wonOscar && "🏆"}</td>
                    <td>{contact.wonEmmy && "🏆"}</td>
                    <td><button >Delete</button></td>
                  </tr>)
        })}
      </table>
    </div>
  );
}

export default App;