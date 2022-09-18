import axios from "axios";
import { FormResponseModel } from "../models/Form";

export const getInitialData = () => {
  return axios.get<FormResponseModel>('https://mocki.io/v1/24991ae5-bfb5-43cf-bcb3-2ad01894a91b');
}