import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const baseurl = "https://jsonplaceholder.typicode.com";
  const [loading, setLoading] = useState(false);
  /*
  Http Methods
  - GET
  - POST
  - PUT/PATCH
  - DELETE

  Ways to interact with backend
  - Fetch API
  - Axios
  */

  //  using fetch - GET
  // const getData =  () => {
  //   setLoading(true);
  //   const url = `${baseurl}/users`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const result = json;
  //       setData(result);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // };

  //using axios - GET
  const getData = () => {
    setLoading(true);
    const url = `${baseurl}/users`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(error);
      });
  };

  const postData = () => {
    const url = `${baseurl}/users`;
    axios
      .post(url, {
        name,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deleteUser = (userId) =>{
    axios.delete(url, )
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            postData();
          }}
          type="submit"
        >
          Submit
        </button>
      </form>

      <p> {loading ? "Loading..." : ""}</p>
      {data.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
}

export default App;
