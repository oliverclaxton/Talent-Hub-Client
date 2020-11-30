import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TalentCard from "../../components/TalentCard/TalentCard";
import { selectAllTalents } from "../../store/talents/selectors";
import { getAllTalents } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import "./AllTalents.css";
import { Container, Grid } from "@material-ui/core";
import { Col } from "react-bootstrap";
import "./AllTalents.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const AllTalents = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [spacing, setSpacing] = React.useState(2);
  //   const isLoading = useSelector(selectAppLoading);
  const allTalents = useSelector(selectAllTalents);
  console.log("i am all tallents", allTalents);

  const token = useSelector(selectToken);

  if (!token) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getAllTalents());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className="talent__card">
          {allTalents.map((t) => (
            <TalentCard
              key={t.id}
              className="card"
              firstName={t.firstName}
              lastName={t.lastName}
              email={t.email}
              profileImageUrl={t.profileImageUrl}
              id={t.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTalents;
