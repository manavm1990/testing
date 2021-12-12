import PropTypes from "prop-types";

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID} className="text-center">
          {item.title}
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
    })
  ).isRequired,
};

export default List;
