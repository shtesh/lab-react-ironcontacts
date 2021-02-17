import React, { Component } from 'react';
import contactsFromJSON from './../contacts.json';
import OneContact from './OneContact';

class ContactList extends Component {
  state = {
    contactsList: contactsFromJSON.splice(0, 5),
  };

  // ITERACIÓN 2 | Add New Random Contacts
  addRandomContact = () => {
    // creamos un random contact a partir de contacts.json
    const randomContact =
      contactsFromJSON[Math.floor(Math.random() * contactsFromJSON.length)];

    // creamos una copia de nuestra lista de contactos, para no modificar directamente el contactsList del state (el metodo push() que usamos luego muta el array... aunque no es absolutamente necesario ya que luego redifiniremos el contenido de contactsList en el state)
    const copyOfContactsList = [...this.state.contactsList];

    // si no existe ese randomContact en nuestro lista de contactos, lo añadimos a 'copyOfContactsList'
    if (!copyOfContactsList.includes(randomContact)) {
      copyOfContactsList.push(randomContact);
    }

    // actualizamos la lista de contactos en el state
    this.setState({ contactsList: copyOfContactsList });
  };

  // ITERACIÓN 3 | Sort Contacts By Name
  sortByName = () => {
    // aplicamos el método `sort` sobre una copia del array de contactos (el metodo sort() muta el array, asi que mejor hacer una copia, aunque después redifinamos el contenido de contactsList en el state)
    const contactsSortedByName = [...this.state.contactsList].sort((a, b) => {
      // convertimos los nombres de contactos a mayúsculas para asegurarnos de comparar el mismo string
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    // Actualizamos contactsList en el state con la copia de contactos ordenada por nombre (ascendiente)
    this.setState({ contactsList: contactsSortedByName });
  };

  // ITERACIÓN 3 | Sort Contacts By Popularity
  sortByPopularity = () => {
    // aplicamos el método `sort` sobre una copia del array de contactos (el metodo sort() muta el array, asi que mejor hacer una copia, aunque después redifinamos el contenido de contactsList en el state)
    const contactsSortedByPopularity = [...this.state.contactsList].sort(
      (a, b) => b.popularity - a.popularity
    );
    // se puede hacer directamente 'b - a' ya que popularity es un number

    // Actualizamos contactsList en el state con la copia de contactos ordenada por popularidad (descendiente)
    this.setState({ contactsList: contactsSortedByPopularity });
  };

  // ITERACIÓN 4 | Remove Contacts
  deleteContact = (idOfDeletedContact) => {
    // aquí no hace falta hacer una copia del array de contactos, porque filter() no muta (pero hay que guardarlo sí o sí en una nueva variable)
    const listOfContacts = this.state.contactsList.filter(
      (contact) => contact.id !== idOfDeletedContact
    );

    // Actualizamos contactsList en el state, con la lista que ha sido filtrada
    this.setState({ contactsList: listOfContacts });
  };

  render() {
    const listOfContacts = this.state.contactsList.map((contact) => {
      return (
        <OneContact
          key={contact.id}
          {...contact}
          deleteContact={() => this.deleteContact(contact.id)}
        />
      );
    });

    return (
      <div>
        <div id="action-buttons">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{listOfContacts}</tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
