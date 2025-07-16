import React from "react";
import { Table } from "./Table";

export const BookList = () => {
  var books = [
    {
      id: 1,
      name: "java",
      price: 200,
      
    },
    {
      id: 2,
      name: "python",
      price: 250,
      
    },
  ];
  var columns = Object.keys(books[0]);
  console.log(columns);
  return (
    <div>
      <h1>BOOKS</h1>
      <Table header={columns} data = {books}></Table>
    </div>
  );
};
