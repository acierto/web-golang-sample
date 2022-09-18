import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import { Route, RouteProps } from "react-router-dom";
import { PageLoader } from "./page-loader";

export const ProtectedRoute: React.FC<RouteProps> = ({ ...args }) => (
  <Route
    component={withAuthenticationRequired(
      args.component as unknown as ComponentType,
      {
        onRedirecting: () => (
          <div className="page-layout">
            <PageLoader />
          </div>
        ),
      }
    )}
    {...args}
  />
);
