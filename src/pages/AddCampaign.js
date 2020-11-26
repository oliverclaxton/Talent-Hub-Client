import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTalents } from "../store/talents/selectors";
import { getAllTalents } from "../store/talents/actions";
import { addCampaign } from "../store/campaigns/actions";

export default function AddCampaign() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectAppLoading);
  const allTalents = useSelector(selectAllTalents);
  //   console.log("i am all tallents", allTalents);

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

    dispatch(
      addCampaign(title, description, contractLink, briefLink, date, talent)
    );
  }

  console.log(
    "i am form content",
    title,
    description,
    contractLink,
    briefLink,
    date,
    talent
  );
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
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Brief Description of what to do"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Contract</Form.Label>
        <Form.Control
          value={contractLink}
          onChange={(event) => setContractLink(event.target.value)}
          type="text"
          placeholder="Contarct Link"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brief</Form.Label>
        <Form.Control
          value={briefLink}
          onChange={(event) => setBriefLink(event.target.value)}
          type="text"
          placeholder="Brief Link"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date to go live</Form.Label>
        <Form.Control
          value={date}
          onChange={(event) => setDate(event.target.value)}
          type="date"
        />
      </Form.Group>
      <Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Pick Talent</Form.Label>
          <Form.Control
            as="select"
            value={talent}
            onChange={(event) => setTalent(event.target.value)}
          >
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

      <Button variant="contained" type="submit" onClick={submitForm}>
        Add
      </Button>
    </Form>
  );
}
