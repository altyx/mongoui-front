import React from "react";
import Link from "react-router-dom/Link";

const Collection = (props) => {
  return (
    <div>
      <Link to={`/collection/${props.collection}`}>{props.collection}</Link>
    </div>
  )
}

export default Collection;