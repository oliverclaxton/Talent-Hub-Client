// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { deleteCampaign } from "../../store/campaigns/actions";
// import { Button } from "@material-ui/core";
// import { Card } from "react-bootstrap";
// import "./SingleCampaignCard.css";

// const SingleCampaignCard = (props) => {
//   const [statusColor, setStatusColor] = useState("green");

//   const dispatch = useDispatch();
//   const history = useHistory();

//   const onDelete = (id) => {
//     console.log("deleting campaign!", id);

//     dispatch(deleteCampaign(id));
//     history.push("/campaigns");
//   };

//   console.log("i am props", props);
//   if (!props.talents) {
//     return <h1>Loading</h1>;
//   }

//   return (
//     <div>
//       <div>
//         <div className="title">
//           <h1>{props.title}</h1>
//           <h5>{props.description}</h5>
//           <h6>Date to go live: {props.dueDate}</h6>
//         </div>
//         <div className="campaign__card">
//           {props.campaignImages.map((ci) => (
//             <Card
//               className="single__card"
//               key={ci.id}
//               style={{
//                 width: "20rem",
//                 marginTop: "20px",
//                 marginBottom: "20px",
//               }}
//             >
//               <Card.Img src={ci.imageUrl} />
//               <Card.Body>
//                 <Card.Title>{ci.caption}</Card.Title>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       </div>
//       <div>
//         <div>
//           <h5>List of talents on this campaign are : </h5>
//           {props.talents.map((t) => {
//             return (
//               <div key={t.id}>
//                 <Link to={`/talents/${t.id}`}>
//                   {t.firstName} {t.lastName}
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//         <div>
//           <Button
//             variant="contained"
//             onClick={() => {
//               onDelete(props.id);
//             }}
//           >
//             Delete this campaign
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleCampaignCard;
