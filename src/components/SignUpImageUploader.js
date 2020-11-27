import { Button } from "@material-ui/core";
import React, { useState } from "react";

export default function SignUpImageUploader(props) {
  console.log("what are pros???", props);
  const [imageurl, setImageurl] = useState("");

  const setImageHandler = (url) => {
    console.log("i am urtl", url);
    props.setImage(url);
  };

  const myCropWidget = async () => {
    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "drzludyk5",
        uploadPreset: "rvercepq",
        cropping: true,
        croppingAspectRatio: 16 / 9,
      },

      (error, result) => {
        console.log(error, result);

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
