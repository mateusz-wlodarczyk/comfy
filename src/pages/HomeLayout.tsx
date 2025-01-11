import { Loading } from "@/components";
import Navbar from "@/components/Navbar";
import { Header } from "@/components/ui";
import { Outlet, useNavigation } from "react-router-dom";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  // const isPageLoading = true;
  return (
    <>
      <Header />
      <Navbar />

      <div className="align-element py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}
export default HomeLayout;
