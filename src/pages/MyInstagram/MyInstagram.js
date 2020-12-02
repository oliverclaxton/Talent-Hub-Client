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
    history.push("/");
  }

  //   let username = "scenagency";
  //   let INSTA = "https://instagram.com/";
  //   let user = null;
  //   let posts = null;

  //   async function searchUser() {
  //     let res = await fetch("https://www.instagram.com/naaomiross/?hl=en", {
  //       method: "GET",
  //     });
  //     // let data = await res.json();
  //     console.log(res);
  //     // user = data.graphql.user;
  //     // posts = user.edge_owner_to_timeline_media.edges;
  //   }

  //   searchUser();

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
