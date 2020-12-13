import React, { Component } from "react";
import * as fiicons from "react-icons/fc";
import { Card, CardText, CardBody, CardTitle, CardHeader } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../asset/css/App.css";

class AllSitesCardview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("allsites")), //Fetching sites from local storage
    };
  }

  componentDidMount() {
    this.setState({
      data: JSON.parse(localStorage.getItem("allsites")),
    });
  }

  render() {
    var { data } = this.state;

    return (
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-sm-4">
              <Card className="card-width">
                <CardHeader
                  tag="h6"
                  style={{
                    backgroundColor: "#333",
                    borderColor: "#333",
                    color: "white",
                  }}
                >
                  {item}
                </CardHeader>
                <CardBody className="card-box">
                  <CardText>
                    <fiicons.FcElectroDevices size={30} />
                    &nbsp;&nbsp;<b>Devices : {6}</b>
                  </CardText>
                  <br />
                  <br />
                  <Link to="/Device">
                    {" "}
                    <Button>View Details</Button>
                  </Link>
                </CardBody>
              </Card>{" "}
              <br />
            </div>
          ))}
        </div>{" "}
      </div>
    );
  }
}

export default AllSitesCardview;
