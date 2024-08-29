import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
const CountCard = (props) => (
  <Row gutter={16} className="flex justify-evenly items-center h-full">
    <Col span={6}>
      <Card bordered={false}>
        <Statistic
          title={props.name}
          value={11.28}
          precision={2}
          valueStyle={{
            color: "#3f8600",
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={6}>
      <Card bordered={false}>
        <Statistic
          title={props.name}
          value={11.28}
          precision={2}
          valueStyle={{
            color: "#3f8600",
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={6}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: "#cf1322",
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);
export default CountCard;
