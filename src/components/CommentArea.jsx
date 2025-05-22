import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZTQ0MzFlYmU4MjAwMTUwOWYzMGMiLCJpYXQiOjE3NDczMTM3MzEsImV4cCI6MTc0ODUyMzMzMX0.sOUGPFm9rwM0pYvE3wqyxXhkj2MG6LblP4jVZPpikrI";

const CommentArea = ({ asin }) => {
  /* state = {
    comments: [],
    isLoading: false,
    isError: false
  }; */

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchComments = async () => {
    if (!asin) return;
    setIsLoading(true);
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      });
      if (response.ok) {
        const comments = await response.json();
        setComments(comments);
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      {asin && (
        <>
          <AddComment asin={asin} fetchComments={fetchComments} />
          <CommentList commentsToShow={comments} />
        </>
      )}
    </div>
  );
};

export default CommentArea;

// componentDidMount = async () => {
//   try {
//     let response = await fetch(
//       'https://striveschool-api.herokuapp.com/api/comments/' +
//         this.props.asin,
//       {
//         headers: {
//           Authorization:
//             'Bearer INSERISCI_IL_TUO_TOKEN',
//         },
//       }
//     )
//     console.log(response)
//     if (response.ok) {
//       let comments = await response.json()
//       this.setState({ comments: comments, isLoading: false, isError: false })
//     } else {
//       console.log('error')
//       this.setState({ isLoading: false, isError: true })
//     }
//   } catch (error) {
//     console.log(error)
//     this.setState({ isLoading: false, isError: true })
//   }
// }

/*  componentDidUpdate = async prevProps => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true
      });
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
          headers: {
            Authorization: "Bearer INSERISCI_IL_TUO_TOKEN"
          }
        });
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false
          });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    }
  }; */
