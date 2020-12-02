import { Button } from "@material-ui/core";
import React from "react";

export default function SignUpImageUploader(props) {
  // console.log("what are pros???", props);

  const setImageHandler = (url) => {
    // console.log("i am urtl", url);
    props.setImage(url);
  };

  const myCropWidget = async () => {
    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "drzludyk5",
        uploadPreset: "rvercepq",
        cropping: true,
        croppingAspectRatio: 9 / 16,
        width: 260,
        height: 140,
      },

      (error, result) => {
        // console.log(error, result);

        if (result.event === "success") {
          setImageHandler(result.info.url);
        }
      }
    );
    uploadWidget.open();
  };

  return (
    <Button variant="contained" onClick={myCropWidget}>
      Upload Profile Photo
    </Button>
  );
}
