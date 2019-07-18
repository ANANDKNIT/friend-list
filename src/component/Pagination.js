import React, { useState } from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/actions/FriendListActions";
const Pagination = props => {
  const [active, setActive] = useState(props.pagination);
  console.log(props.pagination,active,'pagination value')
  // count number of pages for pagination number
  const pages = new Array(Math.ceil(props.item.length / 3));
  for (let i = 0; i < pages.length; i++) {
    pages[i] = i + 1;
  }

  const handlePagination = index => {
      setActive(index);
      props.handlePagination(index);
  };

  return (
    <div className="pagination">
      <li onClick={active > 1 ? () => handlePagination(active - 1) : undefined}>
        &laquo;
      </li>

      {pages.map((item, index) => {
        return (
          <li
            key={index}
            className={item === active ? "active" : ""}
            onClick={() => handlePagination(index + 1)}
          >
            {item}
          </li>
        );
      })}

      <li
        onClick={
          pages.length > active ? () => handlePagination(active + 1) : undefined
        }
      >
        &raquo;
      </li>
    </div>
  );
};
const mapStateToProps = state => {
  const pagination = state.pagination;
  return { pagination };
};
const mapDispatchToProps = dispatch => {
  return {
    handlePagination: value =>
      dispatch({ type: ActionTypes.CHANGE_PAGINATION, value: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
