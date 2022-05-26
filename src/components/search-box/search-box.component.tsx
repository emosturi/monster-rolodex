import React from 'react';
import './search-box.styles.css';
import {ChangeEventHandler} from 'react';

type SearchBoxProps = {
  className: string;
  placeholder?:string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({
  handleChange,
  placeholder,
  className}:SearchBoxProps) => (<input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={handleChange}  />
    );

export default SearchBox;
