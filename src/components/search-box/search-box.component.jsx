import './search-box.styles.css';

const SearchBox = ({handleChange, placeholder, className}) => (<input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={handleChange}  />
    );

export default SearchBox;
