import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();   
  console.error(error); 
  return (
    <div>
      <h1>{error.status} {error.statusText}</h1>
      <p>{error.data}</p>
    </div>
  );
};

export default Error;   