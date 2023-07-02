import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  return <Link to={`/?query={"city": "Manchester"}`} />;
};

export default Sidebar;
