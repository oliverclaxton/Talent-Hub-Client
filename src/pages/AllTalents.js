import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TalentCard from "../components/TalentCard";
import { selectAllTalents } from "../store/talents/selectors";
import { getAllTalents } from "../store/user/actions";

const AllTalents = () => {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectAppLoading);
  const allTalents = useSelector(selectAllTalents);
  console.log("i am all tallents", allTalents);

  useEffect(() => {
    dispatch(getAllTalents());
  }, [dispatch]);

  return (
    <div>
      <div>
        {allTalents.map((t) => {
          console.log("i am at");
          return (
            <div key={t.id}>
              <TalentCard
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
