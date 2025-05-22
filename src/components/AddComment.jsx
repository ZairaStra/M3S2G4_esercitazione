import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZTQ0MzFlYmU4MjAwMTUwOWYzMGMiLCJpYXQiOjE3NDczMTM3MzEsImV4cCI6MTc0ODUyMzMzMX0.sOUGPFm9rwM0pYvE3wqyxXhkj2MG6LblP4jVZPpikrI";

const AddComment = ({ asin, fetchComments }) => {
  /*  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    }, */

  const [comment, addComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  //resetta il campo al click su un'altra immagine e ne cattura l'id
  useEffect(() => {
    addComment(() => ({
      comment: "",
      rate: 1,
      elementId: asin,
    }));
  }, [asin]);

  /*  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      });
    }
  }
 */
  const sendComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json",
          Authorization: ` Bearer ${token}`,
        },
      });
      if (response.ok) {
        alert("Recensione inviata!");
        addComment({
          comment: {
            comment: "",
            rate: 1,
            elementId: asin,
          },
        });

        fetchComments();
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              addComment((prev) => ({
                ...prev,
                comment: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              addComment((prev) => ({
                ...prev,
                rate: e.target.value,
              }))
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
