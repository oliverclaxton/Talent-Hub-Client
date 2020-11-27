import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TalentCard from "../components/TalentCard";
import { selectAllTalents } from "../store/talents/selectors";
import { getAllTalents } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import "./AllTalents.css";

const AllTalents = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
    <div className="card">
      <div>
        {allTalents.map((t) => {
          console.log("i am at");
          return (
            <div key={t.id}>
              <TalentCard
                className="card"
                firstName={t.firstName}
                lastName={t.lastName}
                email={t.email}
                profileImageUrl={t.profileImageUrl}
                id={t.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTalents;
