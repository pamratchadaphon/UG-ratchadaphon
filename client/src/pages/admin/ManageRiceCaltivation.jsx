import { useState } from "react";
import AddRiceCaltivation from "../../components/admin/AddRiceCaltivation";
import Navbar from "../../components/admin/Navbar";
import Search from "../../components/admin/Search";
import Sidebar from "../../components/admin/Sidebar";
import Table_RiceCaltivation from "../../components/admin/Table_RiceCaltivation";

const ManageRiceCaltivation = () => {
  const [search, setSearch] = useState("");

  const searchName = (string) => setSearch(string);
  return (
    <div className="mx-auto flex">
      <div className="hidden lg:block basis-1/6">
        <Sidebar page={"riceCaltivation"} />
      </div>
      <div className="w-full lg:basis-5/6">
        <Navbar />
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <AddRiceCaltivation/>
            <div className="flex space-x-2">
              <Search
                search={search}
                searchName={searchName}
                text={"ค้นหาอีเมล"}
              />
            </div>
          </div>
          <Table_RiceCaltivation search={search}/>
        </div>
      </div>
    </div>
  );
};

export default ManageRiceCaltivation;
