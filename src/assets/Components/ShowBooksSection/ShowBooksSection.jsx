import "./ShowBooksSection.css";
import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import { ClipLoader } from "react-spinners";
const ShowBooksSection = () => {
  const [isLoading, setisLoading] = useState(false);
  const [booksData, setbooksData] = useState([]);
  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://example-data.draftbit.com/books?_limit=8")
      .then((res) => {
        console.log(res.data);
        setbooksData(res.data);
      });
    console.log(booksData);
    setisLoading(false);
  }, []);
  if (isLoading) {
    return (
      <div>
        <ClipLoader />
      </div>
    );
  }
  return (
    <div className="book-section">
      <h1>Selected for you</h1>
      <div className="book-cards">
        {booksData.map((item, i) => {
          return (
            <BookCard
              key={i}
              bookImg={item.image_url}
              author={item.authors}
              pages={item.num_pages}
              rating={item.rating}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowBooksSection;
