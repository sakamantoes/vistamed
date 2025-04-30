import { Outlet } from "react-router";
import UnAuthNav from "../components/common/unAuthNav";
import Footer from "../components/common/footer";

export function DefaultLayout() {
  return (
    <>
      <UnAuthNav />
      <Outlet />
      <Footer />
    </>
  );
}
