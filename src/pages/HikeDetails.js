import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Background from "../components/Background";
import HikeCard from "../components/HikeCard";

import Menu from "../components/Menu";
import Button from "../components/Button";

import hikes from "../data/hikes.json"; // Import your hikes data

import "./HikeDetails.css";

export default function HikeDetails() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [selectedHike, setSelectedHike] = useState(null); // Initialize selectedHike as null or an empty object

  const { id } = useParams();
  const parsedId = parseInt(id, 10);

  useEffect(() => {
    const foundHike = hikes.hikesData.find((hike) => hike.id === parsedId);
    if (foundHike) {
      setSelectedHike(foundHike);
      setBackgroundImage(foundHike.imageUrl || "");
    }
  }, [parsedId]);

  const navigate = useNavigate();

  if (!selectedHike) {
    console.log("Selected hike is null or undefined");
    return <div>Loading...</div>;
  }

  if (!selectedHike.title) {
    console.log("Project title is null or undefined");
    return <div>No title available</div>;
  }

  // console.log("Selected Hike:", selectedHike);

  // Filter hikes in the same continent as selectedHike
  const sameContinentHikes = hikes.hikesData.filter(
    (hike) =>
      hike.continent === selectedHike.continent && hike.id !== selectedHike.id
  );

  return (
    <>
      <div>
        <Background
          id="Hikes"
          className="Background"
          backgroundImage={`url(${backgroundImage})`}
        />
        <Menu />
      </div>
      <div className="HikeDetails">
        <div className="mb-3">
          <Button
            label="Go Back!"
            icon="return"
            iconPosition="left"
            className="IconButton"
            onClick={() => navigate(`/Hikes`)}
          />
        </div>
        <div className="hikedetails_title">
          <div className="Great_Hikes">
            <img src="../great_hikes.svg" alt="Great Hikes" width="50px" />
            <h3>Great Hikes</h3>
            
          </div>
          <div className="country">
            <span >
              {selectedHike.country}
            </span>
          </div>
          

          <h1 className="text-white">{selectedHike.title}</h1>
        </div>
        <div className="hikedetails_card">
          <div className="row">
            <div className="col-lg-6 me-lg-5">
              <h4 className="mb-3">HIKING</h4>
              <p>{selectedHike.hikingExplained}</p>

              


            </div>
            <div className="col-lg-5 ms-lg-5 ps-lg-5 border-start">
              <h4  className="mb-3">Location</h4>
              <div className="d-flex justify-content-center mb-5">
                <img
                  className="map-control"
                  src={selectedHike.map}
                  alt={selectedHike.title}
                />
              </div>
              <h4>Hikes in {selectedHike.continent}</h4>

              <div>
                {/* Render HikeCard components for hikes in the same continent */}
            {sameContinentHikes.slice(0, 6).map((hike) => (
              <HikeCard 
                key={hike.id}
                image={hike.imageUrl}
                title={hike.title}
                continent={hike.continent}
                country={hike.country}

                onClick={() => navigate(`/Hikes/${hike.id}`)}
              />
            ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}
