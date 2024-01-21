import React from "react";
import Admin from "../components/Layout/Admin";
import Profile from "../components/Profile";
import { Col, Image, Row } from "antd";
import Summary from "../components/Summary";
import Heading from "../components/Heading";

export default function Dashboard() {
  const summary = [
    {
      title: "Total Present",
      count: "24",
      percent: 75,
      type: "31 DAYS",
    },
    {
      title: "On Leaves",
      count: "03",
      percent: 14,
      type: "Casual",
    },
    {
      title: "On Absent",
      count: "02",
      percent: 24,
      type: "31 DAYS",
    },
    {
      title: "OFF Days",
      count: "08",
      percent: 50,
      type: "Weeks",
    },
  ];
  return (
    <div>
      <Profile />
      <Row gutter={20} style={{ marginTop: 80 }}>
        <Col span={24}>
          <Heading>
            <h2>
              My Attendance Summary <span>(January-2024) </span>
            </h2>

            <div className="filter_icon">
              <Image src="/images/filter-icon.png" preview={false} />
            </div>
          </Heading>
        </Col>
        {summary.map((item, index) => {
          return (
            <Col span={6} key={index}>
              <Summary stats={item} index={index} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

Dashboard.layout = Admin;
