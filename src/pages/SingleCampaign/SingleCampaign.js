import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleCampaign } from "../../store/campaigns/selectors";
import {
  deleteCampaign,
  getSingleCampaign,
} from "../../store/campaigns/actions";
import { Card, CardColumns } from "react-bootstrap";
import { Button } from "@material-ui/core";
import "../../index.css";

const SingleCampaign = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("what is params??", params.campaignId);

  const campaignId = params.campaignId;

  //   const isLoading = useSelector(selectAppLoading);
  const singleCampaign = useSelector(selectSingleCampaign);
  console.log("i the single Campaign", singleCampaign.campaignImages);

  useEffect(() => {
    dispatch(getSingleCampaign(campaignId));
  }, [dispatch]);

  const onDelete = (id) => {
    console.log("deleting campaign!", id);

    dispatch(deleteCampaign(id));
    history.push("/campaigns");
  };

  if (!singleCampaign.campaignImages) return <h1>Loading</h1>;

  return (
    <div>
      <div>
        <h1>{singleCampaign.title}</h1>
      </div>
      <div>
        <h4>{singleCampaign.description}</h4>
      </div>
      <div>
        <h6>
          Date to go live
          {singleCampaign.dueDate}
        </h6>
      </div>
      <CardColumns>
        {singleCampaign.campaignImages.map((ci) => (
          <Card className="talent__card">
            <Card.Img src={ci.imageUrl} />
            <Card.Body>
              <Card.Title>Caption : {ci.caption}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
      <div className="__button">
        <Button
          variant="contained"
          onClick={() => {
            onDelete(singleCampaign.id);
          }}
        >
          Delete this campaign
        </Button>
      </div>
    </div>
  );
};

export default SingleCampaign;
