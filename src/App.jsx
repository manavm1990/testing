import React from "react";
import Counter from "./components/Counter/Counter";
import List from "./components/List/List";
import useData from "./hooks/useData";

function App() {
  const [count, setCount] = React.useState(0);

  const data = useData();
  if (data.error) {
    return <p className="text-center text-red-500">{data.error}</p>;
  }

  return (
    <main className="flex flex-col gap-4 py-4">
      <section>
        <div className="flex justify-center gap-2">
          <button
            className="button"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increment
          </button>
          <button
            className="button"
            onClick={() => setCount((prev) => prev - 1)}
          >
            Decrement
          </button>
        </div>
        <div className="text-center mt-4">
          <Counter count={count} />
        </div>
      </section>

      <section>
        {data.data ? (
          <List items={data.data.hits} />
        ) : (
          <p className="text-center text-yellow-500">Loading...</p>
        )}
      </section>
    </main>
  );
}

export default App;
