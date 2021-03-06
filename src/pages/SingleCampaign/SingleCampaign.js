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
import { selectToken } from "../../store/user/selectors";

const SingleCampaign = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  // console.log("what is params??", params.campaignId);

  if (!token) {
    history.push("/login");
  }

  const campaignId = params.campaignId;

  //   const isLoading = useSelector(selectAppLoading);
  const singleCampaign = useSelector(selectSingleCampaign);
  // console.log("i the single Campaign", singleCampaign);

  useEffect(() => {
    dispatch(getSingleCampaign(campaignId));
  }, [dispatch, campaignId]);

  const onDelete = (id) => {
    // console.log("deleting campaign!", id);

    dispatch(deleteCampaign(id));
    history.push("/campaigns");
  };

  if (!singleCampaign.campaignImages) return <h1>Loading</h1>;

  // console.log("i am date", singleCampaign.dueDate);

  const dateFirst = singleCampaign.dueDate.slice(8, 10);
  // console.log("date first", dateFirst);
  const dateMiddle = singleCampaign.dueDate.slice(5, 7);
  // console.log("date middle", dateMiddle);
  const dateLast = singleCampaign.dueDate.slice(0, 2);
  // console.log("date last", dateLast);
  const newDate = `${dateFirst}/${dateMiddle}/${dateLast}`;

  // console.log("i am date", newDate);

  return (
    <div>
      <div>
        <div>
          <h1>{singleCampaign.title}</h1>
          <hr />
        </div>

        <div>
          <h4 className="campaign__description">
            {singleCampaign.description}
          </h4>
          <hr />
        </div>

        <div>
          <h6 className="campaign__date">Date to go live: {newDate}</h6>
        </div>

        <div className="campaign__date">
          <a href={singleCampaign.contractLink}>
            <Button>Contract</Button>
          </a>
        </div>

        <div className="campaign__date">
          <a href={singleCampaign.briefLink}>
            <Button>Brief</Button>
          </a>
          <hr />
        </div>
      </div>

      <CardColumns>
        {singleCampaign.campaignImages.map((ci) => (
          <Card key={ci.id} className="talent__card">
            <Card.Img src={ci.imageUrl} />
            <Card.Body>
              <Card.Title>
                <h3>Caption</h3>
              </Card.Title>
              <hr />
              <Card.Text>{ci.caption}</Card.Text>
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
