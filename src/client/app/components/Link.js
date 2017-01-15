import React from 'react';

const Link = ({ visibilityFilter, setFilter, children, filter }) => {
  if (filter === visibilityFilter) {
    return <span>{children}</span>;
  }
  return (
    <a href="#" onClick={(e) => {
      e.preventDefault();
      setFilter()
    }}>
      {children}
    </a>
  );
};

export default Link;
