import List from "./components/List";
import useData from "./hooks/useData";

function App() {
  const data = useData();
  if (data.error) {
    return <p className="text-center text-red-500">{data.error}</p>;
  }

  return data.data ? (
    <List items={data.data.hits} />
  ) : (
    <p className="text-center text-yellow-500">Loading...</p>
  );
}

export default App;
