import "./Post1.css";
import GotApi from "../../services/got-api";
import React, { useEffect, useState } from "react";

const Post = ({ id }) => {
  const api = new GotApi();
  const [data, setData] = useState({});
  useEffect(() => {
    api.getPerson(id).then((person) => setData(person));
  }, [id]);
  const { name, gender, culture, title, aliases } = data;
  const aliasesView = aliases?.map((item, i) => (
    <li className="param">
      alias {i + 1}: {item}
    </li>
  ));
  return (
    <div className="post">
      <div className="name"> {name}</div>
      <ul className="param-list">
        <li className="param">gender: {gender}</li>
        <li className="param">culture: {culture}</li>
        <li className="param">title: {title ?? "null"}</li>
        {aliasesView}
      </ul>
    </div>
  );
};

export default Post;
