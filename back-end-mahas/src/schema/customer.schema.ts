import { object, number, string, TypeOf } from "zod";
// var validator = require('email-validator')
const payload = {
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "email is required",
    }),
    age: number({
      required_error: "age is required",
    }),
    phoneNumber: number({
      required_error: "Number is required",
    })
  }),
};

const params = {
  params: object({
    _id: string({
      required_error: "Customer_Id is required",
    }),
    name: string({
      required_error: "Customer name is required",
    })
  }),
};

export const createCustomerSchema = object({
  ...payload,
});

export const updateCustomerSchema = object({
  ...payload,
  ...params,
});

export const deleteCustomerSchema = object({
  ...params,
});

export const getCustomerSchema = object({
  ...params,
});

export type CreateCustomerInput = TypeOf<typeof createCustomerSchema>;
export type UpdateCustomerInput = TypeOf<typeof updateCustomerSchema>;
export type ReadCustomerInput = TypeOf<typeof getCustomerSchema>;
export type DeleteCustomerInput = TypeOf<typeof deleteCustomerSchema>;
