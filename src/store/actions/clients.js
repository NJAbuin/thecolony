import axios from "axios";
import { FETCH_CLIENTS } from "../constants";

export const clientList = payload => ({
  type: FETCH_CLIENTS,
  payload
});

export const fetchClientList = () => dispatch =>
  axios
    .get(`/api/admin/clients`)
    .then(res => res.data)
    .then(allClients => dispatch(clientList(allClients)));
