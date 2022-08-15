import "./PostList.css";
import GotApi from "../../services/got-api";
import React, { useState, useEffect } from "react";

const PostList = ({ onClick }) => {
  const [arr, setArr] = useState();
  const api = new GotApi();
  useEffect(() => {
    api.getPersons().then((arrPerson) => setArr(arrPerson));
  }, []);

  const arrView = arr?.map((item) => (
    <div className="post-list__item" onClick={() => onClick(583)}>
      <div className="post-list__item__title">{item?.name ?? "undefined"}</div>
    </div>
  ));
  return <div className="post-list">{arrView}</div>;
};

export default PostList;
