import React, { Component } from "react";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Book from "../../components/Book";
import API from "../../utils/API";
import { Container, Col, Row } from "reactstrap";
import { List } from "../../components/List";
import "./style.css";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Use the search to track a book!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          style: {},
          message: "No books found."
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <Card title="Book Search" icon="fas fa-quran">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <Card title="Tracked Books" icon="far fa-compass">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-secondary ml-3"
                        >
                          <i className="fa fa-file-download"></i>
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="message text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;