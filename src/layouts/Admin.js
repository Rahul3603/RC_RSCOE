import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views

import Dashboard from "../views/admin/Dashboard.js";
import Tables from "../views/admin/Tables.js";
import Team from "../views/admin/Team.js";
import Events from "../views/admin/Events.js";
import Editteam from "../views/admin/Editteam.js";
import Editevent from "../views/admin/Editevent.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-50">
        <AdminNavbar />
        <div className="w-full">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/events" exact component={Events} />
            <Route path="/admin/team" exact component={Team} />
            <Route path="/admin/editteam" exact component={Editteam} />
            <Route path="/admin/editevent" exact component={Editevent} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
