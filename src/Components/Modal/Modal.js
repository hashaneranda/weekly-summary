/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Modal Components of the App
 * Date: 12-06-2020
 */

import React, { useState } from "react";

import Modal from "@material-ui/core/Modal";

//assets
import { closeBtn } from "../../Config/Images";

//styles
import "./modal.scss";

/**
 *Modal Component
 *
 * @param {*} {
 *   children - modal body,
 *   open = false - modal open status,
 *   handleClose = () => {} - function to close modal,
 *   showCloseBtn = false - show default close button,
 *   ...props
 * }
 * @returns Modal Component
 */
export const ModalComponent = ({
  children,
  open = false,
  handleClose = () => {},
  showCloseBtn = false,
  ...props
}) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
      {...props}
      className={`modalComponent`}
    >
      <div className="modalBody">
        {showCloseBtn ? (
          <img
            src={closeBtn}
            className="closeBtn"
            alt="close"
            onClick={handleClose}
          />
        ) : (
          ""
        )}
        {children}
      </div>
    </Modal>
  );
};
