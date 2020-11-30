import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TalentCard from "../../components/TalentCard/TalentCard";
import { selectAllTalents } from "../../store/talents/selectors";
import { getAllTalents } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { makeStyles } from "@material-ui/core/styles";
import "./AllTalents.css";

const AllTalents = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [spacing, setSpacing] = React.useState(2);
  //   const isLoading = useSelector(selectAppLoading);
  const allTalents = useSelector(selectAllTalents);
  // console.log("i am all tallents", allTalents);

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
