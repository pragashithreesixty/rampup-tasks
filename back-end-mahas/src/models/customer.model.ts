import mongoose from "mongoose";

export interface CustomerDTO {
  name: string
  age: number
  phoneNumber: number
  email: string

}

export interface CustomerDocument extends CustomerDTO, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const customerSchema = new mongoose.Schema(
  {
  
    name: { type: String, required: true },
    email: { type: String, unique: true,  required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const CustomerModel = mongoose.model<CustomerDocument>("Custoemrs",customerSchema);

export default CustomerModel;
