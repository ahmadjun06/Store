import axios from "axios";
import React, { useEffect, useState } from "react";

function RandomUserPage() {
  const [person, setPerson] = useState([]);

  const getPerson = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setPerson(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      {person?.map(
        (
          {
            gender,
            location: { street },
            email,
            login,
            dob,
            registered,
            phone,
            call,
            id,
            picture,
            nat,
          },
          index
        ) => (
          <>
            <p>{street.number}</p>
            <p>{street.name}</p>
          </>
        )
      )}
    </div>
  );
}

export default RandomUserPage;
