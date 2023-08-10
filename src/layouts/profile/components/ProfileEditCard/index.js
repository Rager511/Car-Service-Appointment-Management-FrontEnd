import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// eslint-disable-next-line react/prop-types
function ProfileEditCard({ profileInfo, onSave, onCancel }) {
  const [editedInfo, setEditedInfo] = useState(profileInfo);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <ProfileInfoCard
        title="Edit Profile"
        info={editedInfo}
        social={[]} // Don't show social icons in edit mode
        action={{
          route: "",
          tooltip: "Cancel",
          onClick: onCancel,
        }}
        shadow={false}
      />
      <Divider orientation="vertical" sx={{ mx: 0 }} />
      <div>
        {/* Render the form fields here */}
        <input
          type="text"
          name="fullName"
          value={editedInfo.fullName}
          onChange={handleInputChange}
        />
        <input type="text" name="mobile" value={editedInfo.mobile} onChange={handleInputChange} />
        <input type="email" name="email" value={editedInfo.email} onChange={handleInputChange} />
        <input
          type="text"
          name="location"
          value={editedInfo.location}
          onChange={handleInputChange}
        />
        <button onClick={() => onSave(editedInfo)}>Save</button>
      </div>
    </>
  );
}

export default ProfileEditCard;
