import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleCampaign } from "../../store/campaigns/selectors";
import {
  deleteCampaign,
  getSingleCampaign,
} from "../../store/campaigns/actions";
import { Card, CardColumns } from "react-bootstrap";
import { Button, Link } from "@material-ui/core";
import "../../index.css";

const SingleCampaign = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("what is params??", params.campaignId);

  const campaignId = params.campaignId;

  //   const isLoading = useSelector(selectAppLoading);
  const singleCampaign = useSelector(selectSingleCampaign);
  console.log("i the single Campaign", singleCampaign);

  useEffect(() => {
    dispatch(getSingleCampaign(campaignId));
  }, [dispatch]);

  const onDelete = (id) => {
    console.log("deleting campaign!", id);

    dispatch(deleteCampaign(id));
    history.push("/campaigns");
  };

  if (!singleCampaign.campaignImages) return <h1>Loading</h1>;

  console.log("i am date", singleCampaign.dueDate);

  const dateFirst = singleCampaign.dueDate.slice(8, 10);
  console.log("date first", dateFirst);
  const dateMiddle = singleCampaign.dueDate.slice(5, 7);
  console.log("date middle", dateMiddle);
  const dateLast = singleCampaign.dueDate.slice(0, 2);
  console.log("date last", dateLast);
  const newDate = `${dateFirst}/${dateMiddle}/${dateLast}`;

  console.log("i am date", newDate);

  return (
    <div>
      <div className="campaign__info">
        <div>
          <h1>{singleCampaign.title}</h1>
        </div>
        <div>
          <h4 className="campaign__description">
            {singleCampaign.description}
          </h4>
        </div>
        <div>
          <h6 className="campaign__date">Date to go live: {newDate}</h6>
        </div>
        <hr />
        <div className="campaign__date">
          <a href={singleCampaign.contractLink}>
            <Button>Contract</Button>
          </a>
        </div>
        <div className="campaign__date">
          <a href={singleCampaign.breifLink}>
            <Button>Brief</Button>
          </a>
        </div>
      </div>

      <CardColumns>
        {singleCampaign.campaignImages.map((ci) => (
          <Card key={ci.id} className="talent__card">
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
