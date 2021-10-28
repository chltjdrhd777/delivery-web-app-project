import { usePathContext } from "App";
import React, { useEffect } from "react";
import { useRouteMatch } from "react-router";

function Delivery(props: any) {
  const { setPath } = usePathContext();

  let match = useRouteMatch();

  useEffect(() => {
    setPath!(match.path);
  }, []);

  return <div>delivery</div>;
}

export default Delivery;
