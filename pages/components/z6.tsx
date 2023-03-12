// @ts-nocheck
import React from "react";
import {
  Badge,
  Card,
  Table,
  Row,
  Col,
  Divider,
  Typography,
  Space,
  Progress,
//   Chart,
} from "antd";

const { Title, Text } = Typography;
const { Column } = Table;
// const { Line } = Chart;

const genderData = [
  {
    name: "女性",
    percentage: "62%",
    ageRange: "18-35",
    interest: "奈雪的茶，可爱多",
  },
  {
    name: "男性",
    percentage: "38%",
    ageRange: "18-35",
    interest: "奈雪的茶，可爱多",
  },
  {
    name: "其他",
    percentage: "0%",
    ageRange: "-",
    interest: "-",
  },
];

const ageData = [
  {
    range: "18-25",
    percentage: "40%",
    interest: "奈雪的茶，可爱多",
  },
  {
    range: "26-35",
    percentage: "50%",
    interest: "奈雪的茶，可爱多",
  },
  {
    range: "36-45",
    percentage: "5%",
    interest: "奈雪的茶，可爱多",
  },
  {
    range: "46+",
    percentage: "5%",
    interest: "奈雪的茶，可爱多",
  },
];

const interestData = [
  {
    name: "奈雪的茶",
    percentage: "80%",
  },
  {
    name: "可爱多",
    percentage: "70%",
  },
  {
    name: "咖啡",
    percentage: "20%",
  },
  {
    name: "茶叶",
    percentage: "10%",
  },
];

const ageChartData = [
  {
    month: "1月",
    age: 30,
  },
  {
    month: "2月",
    age: 35,
  },
  {
    month: "3月",
    age: 45,
  },
  {
    month: "4月",
    age: 50,
  },
  {
    month: "5月",
    age: 55,
  },
  {
    month: "6月",
    age: 60,
  },
  {
    month: "7月",
    age: 65,
  },
  {
    month: "8月",
    age: 70,
  },
  {
    month: "9月",
    age: 75,
  },
];

function Z6() {
  return (
    <div className="container mx-auto">
      <Card className="mt-8">
        <div className="flex justify-between items-center">
          <Title level={3} className="mb-4">
            人群认证活动分析报告
          </Title>
        </div>
        <p className="mb-8">
          这是一个有关奈雪的茶和可爱多联合营销活动的人群认证的报告。本报告旨在通过数据分析来帮助您更好地了解参与活动的受众群体，从而更好地制定营销策略。
        </p>
        <Divider orientation="left">性别分布</Divider>
        <Table dataSource={genderData} pagination={false}>
          <Column title="性别" dataIndex="name" key="name" />
          <Column title="比例" dataIndex="percentage" key="percentage" />
          <Column title="年龄范围" dataIndex="ageRange" key="ageRange" />
          <Column title="感兴趣的产品" dataIndex="interest" key="interest" />
        </Table>
        <Divider orientation="left">年龄分布</Divider>
        <Table dataSource={ageData} pagination={false}>
          <Column title="年龄范围" dataIndex="range" key="range" />
          <Column title="比例" dataIndex="percentage" key="percentage" />
          <Column title="感兴趣的产品" dataIndex="interest" key="interest" />
        </Table>
        <Divider orientation="left">产品兴趣度</Divider>
        <Row gutter={[16, 16]}>
          {interestData.map((item, index) => (
            <Col key={index} xs={24} md={12} lg={6}>
              <div className="bg-white p-4 rounded-md">
                <Space align="center" direction="vertical">
                  <Title level={4} className="mb-0">
                    {item.name}
                  </Title>
                  <Progress percent={item.percentage.replace("%", "")} />
                </Space>
              </div>
            </Col>
          ))}
        </Row>
        {/* <Divider orientation="left">年龄分布趋势</Divider> */}
        {/* <Line height={400} data={ageChartData} xField="month" yField="age" /> */}
      </Card>
    </div>
  );
}

export default Z6;
