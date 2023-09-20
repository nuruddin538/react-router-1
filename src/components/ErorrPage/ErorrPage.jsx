import { Link, useRouteError } from 'react-router-dom';

const ErorrPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Oops!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <p>Go back where you from</p>
          <button>Home</button>
          <Link to="/">Home</Link>
        </div>
      )}
    </div>
  );
};

export default ErorrPage;
