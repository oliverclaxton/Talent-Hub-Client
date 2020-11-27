import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { addCampaignImage } from "../store/campaigns/actions";

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
    <Button variant="contained" type="submit" onClick={myCropWidget}>
      Upload picture
    </Button>
  );
}
