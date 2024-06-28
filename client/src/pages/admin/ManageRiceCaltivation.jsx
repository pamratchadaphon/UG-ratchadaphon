import { useState } from "react";
import AddRiceCaltivation from "../../components/admin/AddRiceCaltivation";
import Navbar from "../../components/admin/Navbar";
import Search from "../../components/admin/Search";
import Sidebar from "../../components/admin/Sidebar";
import Table_RiceCaltivation from "../../components/admin/Table_RiceCaltivation";
import ShowName from "../../components/admin/ShowName";

const ManageRiceCaltivation = () => {
  const [search, setSearch] = useState("");

  const [showSidebar_Moble, setShowSideBar_Moble] = useState(false);
  const [showSidebar_Web, setShowSideBar_Web] = useState(true);
  return (
    <div>
      {showSidebar_Web ? (
        <div className="mx-auto flex">
          {showSidebar_Moble ? (
            <div className="block lg:basis-1/6">
              <Sidebar
                page={"riceCaltivation"}
                showSidebar_Moble={showSidebar_Moble}
                setShowSideBar_Moble={setShowSideBar_Moble}
              />
            </div>
          ) : (
            <div className="hidden lg:block basis-1/6">
              <Sidebar page={"riceCaltivation"} />
            </div>
          )}
          <div className="w-full lg:basis-5/6">
            <Navbar
              setShowSideBar_Moble={setShowSideBar_Moble}
              setShowSideBar_Web={setShowSideBar_Web}
              showSidebar_Web={showSidebar_Web}
              showSidebar_Moble={showSidebar_Moble}
            />
            <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex space-x-2">
                  <Search setSearch={setSearch} text={"ระบุชื่อชาวนา"}/>
                </div>
                <AddRiceCaltivation />
              </div>
              {search === "" ? (
                <div>
                  {/* <h1 className="pb-4 text-sm lg:text-md">รอบการปลูกทั้งหมด</h1> */}
                  <Table_RiceCaltivation search={search}/>
                </div>
              ) : (
                <ShowName search={search} page={'riceCaltivation'}/>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {showSidebar_Moble ? (
            <div className="block lg:hidden">
              <Sidebar
                page={"riceCaltivation"}
                showSidebar_Moble={showSidebar_Moble}
                setShowSideBar_Moble={setShowSideBar_Moble}
              />
            </div>
          ) : (
            <div className="hidden">
              <Sidebar page={"riceCaltivation"} />
            </div>
          )}
          <div className="w-full lg:basis-6/6">
            <Navbar
              setShowSideBar_Moble={setShowSideBar_Moble}
              setShowSideBar_Web={setShowSideBar_Web}
              showSidebar_Web={showSidebar_Web}
              showSidebar_Moble={showSidebar_Moble}
            />
            <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex space-x-2">
                  <Search
                    search={search}
                    setSearch={setSearch}
                    text={"ระบุชื่อชาวนา"}
                  />
                </div>
                <AddRiceCaltivation />
              </div>
              <Table_RiceCaltivation search={search} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRiceCaltivation;
