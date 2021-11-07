import { Express, Request, Response } from "express";
import {
  createCustomerHandler,
  getCustomerHandler,
  updateCustomerHandler,
  deleteCustomerHandler,
  getCustomersHandler,
  getCustomerHandler_id
} from "../controller/customer.controller";


function routes(app: Express) {

  app.post(
    "/api/customers",
    createCustomerHandler
  );

  app.put(
    "/api/customers/:_id",
    updateCustomerHandler
  );

  app.get(
    "/api/customers/:name",
    getCustomerHandler
  );

  app.get(
    "/api/customer/:_id",
    getCustomerHandler_id
  );

  app.get(
      "/api/customers",
      getCustomersHandler
  );

  app.delete(
    "/api/customers/:_id",
    deleteCustomerHandler
  );
}

export default routes;
