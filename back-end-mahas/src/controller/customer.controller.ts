import { Request, Response } from "express";
import {
  UpdateCustomerInput,
} from "../schema/customer.schema";
import {
  createCustomer,
  deleteCustomer,
  findAndUpdateCustomer,
  findCustomer,
  getCustomers,
  findCustomers
} from "../service/customer.service";

export async function createCustomerHandler(
  req: Request,
  res: Response
) {

  const body = req.body;

  const customer = await createCustomer(body);

  return res.send(customer);
}

export async function updateCustomerHandler(
  req: Request<UpdateCustomerInput["params"]>,
  res: Response
) {

  const _id = req.params._id;
  const update = req.body;

  const Customer = await findCustomer({ _id });

  if (!Customer) {
    return res.sendStatus(404);
  }

  const updatedCustomer = await findAndUpdateCustomer({ _id }, update, {
    new: true,
  });

  return res.send(updatedCustomer);
}

export async function getCustomerHandler(
  req: Request<UpdateCustomerInput["params"]>,
  res: Response
) {

  
  const name = req.params.name;
  const customer = await findCustomers({ name });

  if (!customer) {
    return res.sendStatus(404);
  }

  return res.send(customer);
}


export async function getCustomerHandler_id(
  req: Request<UpdateCustomerInput["params"]>,
  res: Response
) {

  
  const _id = req.params._id;
  const customer = await findCustomer({ _id });

  if (!customer) {
    return res.sendStatus(404);
  }

  return res.send(customer);
}

export async function getCustomersHandler(
  req: Request,
  res: Response
){
  const customers = await getCustomers();

  if (!customers){
    return res.sendStatus(404)
  }

  return res.send(customers)
}

export async function deleteCustomerHandler(
  req: Request<UpdateCustomerInput["params"]>,
  res: Response
) {

  const _id = req.params._id;

  const customer = await findCustomer({ _id });

  if (!customer) {
    return res.sendStatus(404);
  }

  await deleteCustomer({ _id });

  return res.sendStatus(200);
}
