import React from 'react';
import './App.css';
import ContactsList from './components/ContactsList';

class App extends React.Component {
  
  render() {
    // const contactsList = this.state.fiveContacts.map(contact => {
    //   return <React.Fragment>
    //   <tr>
    //     <td><img src={contact.pictureUrl} alt={contact.name}/></td>
    //     <td>{contact.name}</td>
    //     <td>{contact.popularity}</td>
    //     <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
    //   </tr>
    //   </React.Fragment>
    // })
    return (
      <div className="App" >
      <h1>Ironcontacts</h1>
      <ContactsList />
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App" >
//         <TodoList />
//       </div>
//     );
//   }
// }

export default App;