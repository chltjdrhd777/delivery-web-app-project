import { usePathContext } from "App";
import React, { useEffect } from "react";
import { useRouteMatch } from "react-router";

function PickUp(props: any) {
  const { setPath } = usePathContext();
  let match = useRouteMatch();
  useEffect(() => {
    setPath!(match.path);
  }, []);
  return <div>pickup</div>;
}

export default PickUp;
