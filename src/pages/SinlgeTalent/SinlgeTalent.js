import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTalent } from "../../store/talents/actions";
import { selectSingleTalent } from "../../store/talents/selectors";
import SingleTalentCard from "../../components/SingleTalentCard/SingleTalentCard";
import { selectToken } from "../../store/user/selectors";

const SinlgeTalent = () => {
  const params = useParams();
  const history = useHistory();
  const token = useSelector(selectToken);
  // console.log("what is params??", params.talentId);s

  if (!token) {
    history.push("/login");
  }
  const talentId = params.talentId;

  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectAppLoading);
  const singleTalent = useSelector(selectSingleTalent);
  // console.log("i the single talent", singleTalent);s

  useEffect(() => {
    dispatch(getSingleTalent(talentId));
  }, [dispatch, talentId]);

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
