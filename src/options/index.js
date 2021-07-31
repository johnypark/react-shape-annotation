import React, { memo } from "react";
import { Button } from "reactstrap";

function ButtonOptions({
  onClickButtonRect,
  onClickButtonPolygon,
  onClickButtonPolyline,
  isClosed,
  selectedShape,
}) {
  return (
    <>
      <Button onClick={onClickButtonRect}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="draw-square"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="25"
          width="25"
          className="svg-inline--fa fa-draw-square fa-w-14 fa-9x"
        >
          <path
            fill={selectedShape === "rectangle" ? "red" : "currentColor"}
            d="M416 360.88V151.12c19.05-11.09 32-31.49 32-55.12 0-35.35-28.65-64-64-64-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 64-64 .01-23.63-12.94-44.04-31.99-55.12zm-320 0V151.12A63.825 63.825 0 0 0 119.12 128h209.75a63.825 63.825 0 0 0 23.12 23.12v209.75a63.825 63.825 0 0 0-23.12 23.12H119.12A63.798 63.798 0 0 0 96 360.88zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"
            className=""
          ></path>
        </svg>
      </Button>
      <Button onClick={onClickButtonPolygon}>
        <svg
          visible="true"
          focusable="false"
          data-prefix="fas"
          data-icon="draw-polygon"
          className="svg-inline--fa fa-draw-polygon fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="25"
          width="25"
        >
          <path
            fill={
              isClosed === true && selectedShape === "polygon"
                ? "red"
                : "currentColor"
            }
            d="M384 352c-.35 0-.67.1-1.02.1l-39.2-65.32c5.07-9.17 8.22-19.56 8.22-30.78s-3.14-21.61-8.22-30.78l39.2-65.32c.35.01.67.1 1.02.1 35.35 0 64-28.65 64-64s-28.65-64-64-64c-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 64-64 .01-35.35-28.64-64-63.99-64zm-288 8.88V151.12A63.825 63.825 0 0 0 119.12 128h208.36l-38.46 64.1c-.35-.01-.67-.1-1.02-.1-35.35 0-64 28.65-64 64s28.65 64 64 64c.35 0 .67-.1 1.02-.1l38.46 64.1H119.12A63.748 63.748 0 0 0 96 360.88zM272 256c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"
          ></path>
        </svg>
      </Button>
      <Button onClick={onClickButtonPolyline}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="mdi-vector-polyline"
          height="25"
          width="25"
          viewBox="0 0 24 24"
        >
          <path
            fill={
              isClosed === false && selectedShape === "polygon"
                ? "red"
                : "currentColor"
            }
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3M4 5H6V7H4M18 7H20V9H18M8 17H10V19H8Z"
          ></path>
        </svg>
      </Button>
    </>
  );
}

export default memo(ButtonOptions);