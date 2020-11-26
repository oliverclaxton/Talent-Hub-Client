import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ImageUploader() {
  const myCropWidget = async () => {
    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "drzludyk5",
        uploadPreset: "rvercepq",
        cropping: true,
      },

      (error, result) => {
        console.log(error, result);

        if (result.event === "success") {
          //   uploadImageUrl(result.info.url);
          console.log("result.event", result.info.url);
        }
      }
    );
    uploadWidget.open();
  };

  return (
    <div>
      <Button variant="" onClick={myCropWidget}>
        Upload picture
      </Button>
    </div>
  );
}
