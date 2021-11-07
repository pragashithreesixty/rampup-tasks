import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import CustomerModel, {
  CustomerDocument,
  CustomerDTO,
} from "../models/customer.model";

export async function createCustomer(input: CustomerDTO)
{
  return CustomerModel.create(input)
}

export async function findCustomer(
  query: FilterQuery<CustomerDocument>,
  options: QueryOptions = { lean: true }
) {

  return CustomerModel.findOne(query, {}, options);
}

export async function findCustomers(
  query: FilterQuery<CustomerDocument>,
  options: QueryOptions = { lean: true }
) {

  return CustomerModel.find(query, {}, options);
}

export async function getCustomers()
{
  return CustomerModel.find();
}

export async function findAndUpdateCustomer(
  query: FilterQuery<CustomerDocument>,
  update: UpdateQuery<CustomerDocument>,
  options: QueryOptions
) {
  return CustomerModel.findOneAndUpdate(query, update, options);
}

export async function deleteCustomer(query: FilterQuery<CustomerDocument>) {
  return CustomerModel.deleteOne(query);
}
