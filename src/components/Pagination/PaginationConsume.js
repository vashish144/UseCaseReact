import React from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import data from "./data.json";
import { useMemo } from "react";
const PaginationConsume = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 10;//no of item displayed on one page
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    console.log("firstPageIndex",firstPageIndex);
    const lastPageIndex = firstPageIndex + PageSize;
    console.log("lastPageIndex",lastPageIndex);

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  console.log("data.length>>", data.length);
  console.log("currentTableData",currentTableData);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}//1
        totalCount={data.length}//1000
        pageSize={PageSize}//10
        onPageChange={(page) => {
            console.log("i called");
            setCurrentPage(page)}}
      />
    </>
  );
};

export default PaginationConsume;
