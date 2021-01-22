import React, { useEffect } from "react";
import App, {
  Grid,
  Profile,
  Photo,
  GridControlBar,
  GridControlBarItem,
} from "react-instagram-ui-kit";
import images from "./InstagramImages/images";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSingleTalent } from "../../store/talents/actions";
import { selectSingleTalent } from "../../store/talents/selectors";
import { selectToken, selectUser } from "../../store/user/selectors";
import "./MyInstagram.css";

const MyInstagram = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLoggedIn = useSelector(selectUser);
  const singleTalent = useSelector(selectSingleTalent);
  const token = useSelector(selectToken);
  const talentId = userLoggedIn.id;

  const fullName = `${singleTalent.firstName} ${singleTalent.lastName}`;

  //   console.log("i the single talent", singleTalent);
  useEffect(() => {
    dispatch(getSingleTalent(talentId));
  }, [dispatch, talentId]);

  if (!singleTalent) return <h1>loading</h1>;

  if (!token) {
    history.push("/login");
  }

  async function getInstagramPictures(profileName) {
    const baseUrl =
      "https://cors-anywhere.herokuapp.com/https://www.instagram.com";
    const profileUrl = `${baseUrl}/${profileName}`;
    const jsonDataUrl = `${profileUrl}/?__a=1`;

    const response = await fetch(jsonDataUrl);
    const jsonData = await response.json();
    const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;

    console.log(pictures);

    if (response.ok) {
      return pictures;
    } else {
      throw new Error(pictures);
    }
  }

  getInstagramPictures("scenagency")
    .then((pictures) => console.log("Pictures:", pictures))
    .catch((error) => console.error("Error:", error));

  return (
    <div className="container insta">
      <App>
        <Profile
          bio={`
        ｎa a o m i.
        Hello! 👋🏻
        London/Amsterdam
        naomi@scenagency.com
        hello@naaomiross.com
        www.naaomiross.com
  `}
          pictureSrc={singleTalent.profileImageUrl}
          username="naaomiross"
          fullname={fullName}
          followersData={[2076, 126000, 2320]}
        />
        <Grid style={{ maxwidth: 600 }}>
          <GridControlBar>
            <GridControlBarItem isActive>𐄹 Posts</GridControlBarItem>
            <GridControlBarItem>웃 Tagged</GridControlBarItem>
          </GridControlBar>
          {images.map((photo) => (
            <Photo src={photo.src} key={photo.id} />
          ))}
        </Grid>
      </App>
    </div>
  );
};

export default MyInstagram;
