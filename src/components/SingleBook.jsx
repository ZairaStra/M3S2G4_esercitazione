import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

/*
//questa versione non valuta l'asin quindi la selezione non è esclusiva, si possono selezionare più card contemporaneamente

const SingleBook = ({ book }) => {
  // state = {
  //   selected: false,
  // }

  const [selected, setSelected] = useState(false);

  // funzione  SEPARATA per selezionare il libro e aggiungere il bordo
  //const toggleSelection = () => {
  // setSelected((prev) => !prev); };

  //corrispettivo di didUpdate
  useEffect(() => {}, [selected]);

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}
        //se non volessi scrivere una funzione separata ma volessi usarla in linea
        onClick={() => setSelected((prev) => !prev)}
        //onClick={toggleSelection}
        style={{
          //valuto se c'è un cambiamento di libro selezionato
          border: selected ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      
    </>
  );
};


*/

//passando i dati come props da booklist resta invece efficiente, ma non si testa il componentDidUpdate

//useEffect (ex componentDidUpdate) spostato in BookList e passato come props destrutturata

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  // state = {
  //   selected: false,
  // }

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};
export default SingleBook;
