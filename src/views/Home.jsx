import useSelect from "../hooks/useSelect";
//import useAxios from "../hooks/useAxios";
import useA from "../hooks/useA";

const Home = () => {
  const { data, loading, error } = useA({
    url: "http://localhost:4000/api/v1/classes",
    method: "GET",
    header: {
      accept: "application/json",
      //"autorisation": "Bearer 897897897897979"
    },
  });

  const { select, selected } = useSelect(
    data?.map((item) => item.className) ?? []
  );

  //console.log(data);

  /*
  const { data, error, isLoading } = useAxios(
    "http://localhost:4000/api/v1/classes"
  );

  console.log("data", data);

  */

  return (
    <>
      <h1>Home</h1>

      <pre>{error}</pre>
      <section>{loading ? <p>...loading</p> : select}</section>
      <section>{loading ? <p>...loading</p> : selected}</section>
    </>
  );
};

export default Home;

/*
        {data.map((item, index) => (
          <p>{item.className}</p>
        ))}
*/
