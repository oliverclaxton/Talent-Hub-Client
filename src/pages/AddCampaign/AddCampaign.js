import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTalents } from "../../store/talents/selectors";
import { getAllTalents } from "../../store/talents/actions";
import { addCampaign } from "../../store/campaigns/actions";
import { useHistory } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import { Button } from "@material-ui/core";

import "./AddCampaign.css";

export default function AddCampaign() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allTalents = useSelector(selectAllTalents);
  //   const isLoading = useSelector(selectAppLoading);
  //   console.log("i am all tallents", allTalents);

  const token = useSelector(selectToken);

  if (!token) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getAllTalents());
  }, [dispatch]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contractLink, setContractLink] = useState("");
  const [briefLink, setBriefLink] = useState("");
  const [date, setDate] = useState("");
  const [talent, setTalent] = useState("");

  function submitForm(event) {
    event.preventDefault();
    history.push("/campaigns");

    dispatch(
      addCampaign(title, description, contractLink, briefLink, date, talent)
    );
  }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Add Campaign</h1>
      <Form.Group>
        <Form.Label>Title of Campaign</Form.Label>
        <Form.Control
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Title of Campaign"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Brief Description of what to do"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Contract</Form.Label>
        <Form.Control
          value={contractLink}
          onChange={(event) => setContractLink(event.target.value)}
          type="text"
          placeholder="Contract Link"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brief</Form.Label>
        <Form.Control
          value={briefLink}
          onChange={(event) => setBriefLink(event.target.value)}
          type="text"
          placeholder="Brief Link"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date to go live</Form.Label>
        <Form.Control
          value={date}
          onChange={(event) => setDate(event.target.value)}
          type="date"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Pick Talent</Form.Label>
          <Form.Control
            as="select"
            value={talent}
            onChange={(event) => setTalent(event.target.value)}
            required
          >
            <option value="">Select Talent</option>
            {allTalents.map((t) => {
              // console.log("i am t ", t);
              return (
                <option key={t.id} value={t.id}>
                  {t.firstName}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form.Group>
      <div className="__button">
        <Button variant="contained" type="submit" onClick={submitForm}>
          Add
        </Button>
      </div>
    </Form>
  );
}
