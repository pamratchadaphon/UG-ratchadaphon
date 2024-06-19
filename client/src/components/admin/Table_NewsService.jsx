import { useState } from "react";
import Pagonation from "./Pagonation";
import axios from "axios";
import Swal from "sweetalert2";
import { IoTrashOutline } from "react-icons/io5";
import PropTypes from 'prop-types'
import EditNewService from "./EditNewService";

const Table_NewsService = ({ data }) => {
  const [records, setRecords] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);

  const deleteNewService = async (id, name) => {
    try {
      Swal.fire({
        title: "ยืนยันการลบ?",
        text: `คุณต้องการลบ ${name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:8080/newsService/${id}`);
          await Swal.fire({
            title: "ลบสำเร็จ",
            icon: "success",
          });
          window.location.reload();
        }
      });
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  return (
    <div className="hidden lg:flex flex-wrap">
      <table className="w-full text-sm  text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 w-1/4">
              ลำดับที่
            </th>
            <th scope="col" className="px-6 py-3 w-1/4">
              หัวข้อ
            </th>
            <th scope="col" className="px-6 py-3  w-1/4 ">
            ลิงค์ของข้อมูล
            </th>
            <th scope="col" className="px-6 py-3 text-center w-1/4">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i} className="bg-white border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center w-1/4"
              >
                {firstIndex + i + 1}
              </th>

              <th scope="row" className="px-6 py-4 font-normal  w-1/4">
                {d.name}
              </th>
              <th scope="row" className="px-6 py-4 font-normal  w-1/4 border">
                {/* {d.content} */}
              </th>
              <th scope="row" className="px-6 py-4 font-normal  w-1/4">
                <div className="flex justify-center items-center gap-2">
                  <EditNewService id={d.newService_id} />
                  <button
                    className="flex justify-center items-center"
                    onClick={() => deleteNewService(d.newService_id, d.name)}
                  >
                    <div className="hover:bg-red-400 rounded-md bg-red-100 text-red-500 hover:text-white w-8 h-8 flex justify-center items-center border border-red-300">
                      <IoTrashOutline className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </th>
            </tr>
          ))}
          {records.length === 0 ? (
            <tr>
              <td className="text-center py-4" colSpan="8">
                ไม่พบข้อมูล
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <Pagonation
        data={data}
        setRecords={setRecords}
        setFirstIndex={setFirstIndex}
      />
    </div>
  );
};

Table_NewsService.propTypes = {
  data: PropTypes.array
}

export default Table_NewsService;
