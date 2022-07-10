import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Wrapper.css";
import WrapperDisplay from "./WrapperDisplay";
const Wrapper = () => {
  const [state, setState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [covidData, setCovidData] = useState({});
  useEffect(() => {
    axios
      .get("https://data.covid19india.org/state_district_wise.json")
      .then((data) => {
        setState(Object.entries(data.data));
      });
  }, []);
  // filterState
  const handleState = (e) => {
    let filteredDistrict = state.filter(
      (district) => district[0] === e.target.value
    );
    // console.log("filteredDistrict",Object.entries(filteredDistrict[0][1].districtData));
    setDistrict(Object.entries(filteredDistrict[0][1].districtData));
  };
  // FilterDistrict
  const handleDistrict = (e) => {
    let filteredCovidData = district.filter(
      (district) => district[0] === e.target.value
    );
    console.log("filteredCovidData", filteredCovidData[0][1]);
    setCovidData(filteredCovidData[0][1]);
  };
  // renderState
  const renderState =
    Array.isArray(state) &&
    state.map((data, index) => {
      return <WrapperDisplay key={index} data={data[0]} index={index} />;
    });
  // renderDistrict
  const renderDistct =
    district.length > 0 ? (
      Array.isArray(district) &&
      district.map((data, index) => {
        return <WrapperDisplay key={index} data={data[0]} index={index} />;
      })
    ) : (
      <option value="SelectDistrict">Select District</option>
    );

  // today date
  let today = new Date();
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  return (
    <>
      <div className="" style={{ textAlign: "center" }}>
        <div className="State" style={{ display: "inline-block" }}>
          <select name="cars" id="cars" onChange={(e) => handleState(e)}>
            <option value="selectState">Select State</option>
            {renderState}
          </select>
        </div>
        <div className="district" style={{ display: "inline-block" }}>
          <select
            name="district"
            id="district"
            onChange={(e) => handleDistrict(e)}
          >
            {renderDistct}
          </select>
        </div>
      </div>
      <CardGroup>
        <Card
          bg="info"
          text={"white"}
          style={{ margin: "10px" }}
          className="text-center"
        >
          <Card.Body>
            <Card.Title>Active</Card.Title>
            <Card.Text>
              {covidData.active ? Math.abs(covidData.active) : null}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last Updated {date}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="warning"
          text={"white"}
          style={{ margin: "10px" }}
          className="text-center"
        >
          <Card.Body>
            <Card.Title>Confirmed</Card.Title>
            <Card.Text>
              {covidData.active ? Math.abs(covidData.confirmed) : null}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last Updated {date}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text={"white"}
          style={{ margin: "10px" }}
          className="text-center"
        >
          <Card.Body>
            <Card.Title>Death</Card.Title>
            <Card.Text>
              {covidData.active ? Math.abs(covidData.deceased) : null}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last Updated {date}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text={"white"}
          style={{ margin: "10px" }}
          className="text-center"
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {covidData.active ? Math.abs(covidData.recovered) : null}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last Updated {date}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default Wrapper;
