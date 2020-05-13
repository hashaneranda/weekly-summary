/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Warapper Components of the App
 * Date: 12-06-2020
 */

import React, { useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//styles
import "./wrapper.scss";

/**
 *Table Component
 *
 * @param {*} { tableClass - table classname, data- table data, ...props }
 * @returns table component
 */
export const TableView = ({ tableClass = "", data = {}, ...props }) => {
  return (
    <TableContainer>
      <Table className={tableClass} aria-label="simple table">
        <TableHead>
          <TableRow>
            {data.header.map((row) => (
              <TableCell>{row.value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((row) => (
            <TableRow key={row.name}>
              {data.header.map((val) => (
                <TableCell component="th" scope="row">
                  {row[val.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

/**
 *ContentCard Component
 *
 * @param {*} { className -  classname, children- children elements, ...props }
 * @returns table component
 */
export const ContentCard = ({ className = "", children, ...props }) => {
  return <div className={`contentCard ${className}`}>{children}</div>;
};
