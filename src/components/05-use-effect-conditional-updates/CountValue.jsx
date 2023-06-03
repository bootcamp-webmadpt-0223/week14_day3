import { useEffect } from "react";

export default function CountValue(props) {
  useEffect(() => {
    console.log("CountValue Effect!");
  }, [props.count]);

  return <h3>{props.count}</h3>;
}
