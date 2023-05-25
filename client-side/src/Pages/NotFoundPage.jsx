import React from 'react';
import { Link, useRouteError } from "react-router-dom";
const NotFoundPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center">
                <h1 className="display-1">404</h1>
                <h2 className="mt-4">Page Not Found</h2>
                <p className="lead">We couldn't find what you were looking for.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/" className="btn btn-primary">Go Home</Link>
              </div>
            </div>
          </div>
        </div>
      );
};

export default NotFoundPage;