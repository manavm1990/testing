import PropTypes from "prop-types";

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID} className="text-center">
          <a
            href={item.url}
            className="decoration-sky-500 inline-block my-1 underline"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default List;
