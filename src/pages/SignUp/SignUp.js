import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import SignUpImageUploader from "../../components/ImageUploaders/SignUpImageUploader";
import { Button } from "@material-ui/core";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  const setImage = (image) => {
    // console.log("image is ", image);

    setProfileImageUrl(image);
  };

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(firstName, lastName, email, password, profileImageUrl));

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setProfileImageUrl("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h2 className="mt-5 mb-5">Sign Up</h2>
        <Form.Group controlId="formBasicName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Enter first name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Enter last name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <SignUpImageUploader setImage={setImage} />
        </Form.Group>
        <Form.Group>
          {profileImageUrl ? (
            <div>
              <Form.Label>Profile Image Preview</Form.Label>
              <Col className="mt-4" md={{ span: 8, offset: 2 }}>
                <Image src={profileImageUrl} />
              </Col>
            </div>
          ) : null}
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="contained" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>

        <Link to="/login">
          <Button> Click here to Login</Button>
        </Link>
      </Form>
    </Container>
  );
}
