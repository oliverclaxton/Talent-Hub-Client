import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { addCampaignImage } from "../../store/campaigns/actions";
import { Button } from "@material-ui/core";

export default function ImageUploader(props) {
  const userLoggedIn = useSelector(selectUser);
  const dispatch = useDispatch();

  // console.log("i am props in new imageuploader", props);
  // console.log("logged imn user", userLoggedIn.id);

  const userId = userLoggedIn.id;
  const campaignId = props.campaignId;

  const myCropWidget = async () => {
    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "drzludyk5",
        uploadPreset: "rvercepq",
        cropping: true,
        croppingAspectRatio: 9 / 16,
      },

      (error, result) => {
        console.log(error, result);

        if (result.event === "success") {
          dispatch(addCampaignImage(result.info.url, userId, campaignId));
        }
      }
    );
    uploadWidget.open();
  };

  return (
    <div>
      <Button variant="contained" onClick={myCropWidget}>
        Upload picture
      </Button>
    </div>
  );
}
