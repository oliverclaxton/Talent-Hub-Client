import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTalent } from "../../store/talents/actions";
import { selectSingleTalent } from "../../store/talents/selectors";
import SingleTalentCard from "../../components/SingleTalentCard/SingleTalentCard";

const SinlgeTalent = () => {
  const params = useParams();

  console.log("what is params??", params.talentId);

  const talentId = params.talentId;

  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectAppLoading);
  const singleTalent = useSelector(selectSingleTalent);
  console.log("i the single talent", singleTalent);

  useEffect(() => {
    dispatch(getSingleTalent(talentId));
  }, [dispatch]);

  return (
    <div>
      <div>
        <SingleTalentCard
          firstName={singleTalent.firstName}
          lastName={singleTalent.lastName}
          profileImageUrl={singleTalent.profileImageUrl}
          campaigns={singleTalent.campaigns}
        />
      </div>
    </div>
  );
};

export default SinlgeTalent;
