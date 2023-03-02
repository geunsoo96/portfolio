import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
