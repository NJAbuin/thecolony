import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import AdminRegisterModal from "../components/AdminRegisterModal";
import Admin from "../components/Admin";
import { getAdminList } from "../store/actions/admins";

import { FullDash } from "../templates/Dashboard";

function AdminAdmins(props) {
  const [admins, setAdmins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.getAdminList();
    setAdmins(props.adminList);
  }, []);

  useEffect(() => {
    if (search == "") return setAdmins(props.adminList);

    return setAdmins(
      props.adminList.filter(
        admin =>
          admin.fullName.toLowerCase().includes(search) ||
          admin.email.toLowerCase().includes(search)
      )
    );
  }, [search]);

  const handleSearch = e => {
    return setSearch(e.target.value.toLowerCase());
  };

  return (
    <FullDash>
      <hr />
      <input
        type="text"
        placeholder="Search.."
        onChange={e => handleSearch(e)}
      />
      <AdminRegisterModal />
      <hr />

      {search === ""
        ? props.adminList.map(admin => <Admin key={admin.id} admin={admin} />)
        : admins.map(admin => <Admin key={admin.id} admin={admin} />)}
    </FullDash>
  );
}

const mapStateToProps = ({ adminList }) => ({
  adminList
});

const mapDispatchToProps = {
  getAdminList
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAdmins);
