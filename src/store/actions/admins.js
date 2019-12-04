import { FETCH_ADMINS } from '../constants'

import axios from 'axios'

export const adminList = payload => ({
    type: FETCH_ADMINS,
    payload
});

export const getAdminList = () => dispatch =>
    axios
        .get("/api/admin/admins")
        .then(res => res.data)
        .then(adList => dispatch(adminList(adList)));
