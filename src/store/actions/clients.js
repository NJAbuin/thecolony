import axios from "axios";
import { FETCH_CLIENTS, SELECT_CLIENT } from "../constants";

export const clientList = payload => ({
  type: FETCH_CLIENTS,
  payload
});

export const fetchClientList = () => dispatch =>
  axios
    .get(`/api/admin/clients`)
    .then(res => res.data)
    .then(allClients => dispatch(clientList(allClients)));

export const singleClient = payload => ({
  type: SELECT_CLIENT,
  payload
});

export const postSingleClient = id => dispatch =>
  axios
    .get(`/api/admin/clients/${id}`)
    .then(res => res.data)
    .then(client => dispatch(singleClient(client)));
