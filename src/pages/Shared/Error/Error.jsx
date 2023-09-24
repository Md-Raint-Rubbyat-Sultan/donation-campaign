import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="text-center space-y-4">
      <h1 className="text-3xl">Oops!</h1>
      <p>Sorry, This page is not available.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} className="block w-1/2 xl:w-1/4 mx-auto py-2 rounded-lg bg-blue-500 text-white">
        <button>Back to home page</button>
      </Link>
    </div>
  );
}
