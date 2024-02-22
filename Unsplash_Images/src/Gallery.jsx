import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGlobalContext from "./utlis/Context";

const url =
  "https://api.unsplash.com/search/photos?client_id=BY40-rzyYWrB_jSmJhcrpmwH9eHZ80oPOfwDrKRVuwM&";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios(`${url}query=${searchTerm}`);
      return result.data;
    },
  });

  console.log(response);

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>Error</h4>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No Images Found</h4>
      </section>
    );
  }

  console.log(results);
  return (
    <section className="image-container">
      {results.map((item) => {
        return (
          <>
            <img
              src={item.urls.regular}
              alt={item.alt_description}
              key={item.id}
              className="img"
            />
          </>
        );
      })}
    </section>
  );
};
export default Gallery;
