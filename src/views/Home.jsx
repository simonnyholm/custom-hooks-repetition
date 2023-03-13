import useSelect from "../hooks/useSelect";
//import useAxios from "../hooks/useAxios";
import useA from "../hooks/useA";
import Filter from "../components/Filter";

const Home = () => {
  const { data, loading, error } = useA({
    url: "http://localhost:4000/api/v1/classes",
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  console.log("data", data);

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
  console.log("selected", selected);

  return (
    <>
      <h1>Home</h1>

      <pre>{error}</pre>
      <section>{loading ? <p>...loading</p> : select}</section>
      <section>{loading ? <p>...loading</p> : selected}</section>
      <Filter arr={data} />
    </>
  );
};

export default Home;

/*
        {data.map((item, index) => (
          <p>{item.className}</p>
        ))}
*/
