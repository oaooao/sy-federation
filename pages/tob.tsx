import { Card, Carousel, Tabs } from "antd";
import Image from "next/image";
import x from "../public/tob/x.png";
import y from "../public/tob/y.png";
import z from "../public/tob/z.png";
import Box from "./components/box";

const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  height: "100%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

// 活动类型部分
const ActivityTypes = () => (
  <>
    <Box css={{ fontSize: 20, fontWeight: 700, padding: "20px 0" }}>
      活动类型
    </Box>
    <Box
      css={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 32,
        gap: 20,
      }}
    >
      <Card
        hoverable
        style={{ width: "30%" }}
        cover={<Image alt="x" src={x} />}
      >
        <Meta title="人群置换" description="xxxxxxxx" />
      </Card>
      <Card
        hoverable
        style={{ width: "30%" }}
        cover={<Image alt="x" src={y} />}
      >
        <Meta title="积分通兑" description="xxxxxxxx" />
      </Card>
      <Card
        hoverable
        style={{ width: "30%" }}
        cover={<Image alt="x" src={z} />}
      >
        <Meta title="卡券" description="xxxxxxxx" />
      </Card>
    </Box>
  </>
);

// 优秀案例部分
const ExcellentCases = () => (
  <>
    <Box css={{ fontSize: 20, fontWeight: 700, padding: "20px 0" }}>
      优秀案例
    </Box>
    <Carousel autoplay style={{ marginBottom: 32 }}>
      <div style={{ height: 320 }}>
        <h3 style={{ ...contentStyle, lineHeight: "320px" }}>优秀案例1</h3>
      </div>
      <div style={{ height: 320 }}>
        <h3 style={{ ...contentStyle, lineHeight: "320px" }}>优秀案例2</h3>
      </div>
      <div style={{ height: 320 }}>
        <h3 style={{ ...contentStyle, lineHeight: "320px" }}>优秀案例3</h3>
      </div>
    </Carousel>
  </>
);

// 我的活动部分
const MyActivities = () => (
  <>
    <Box css={{ fontSize: 20, fontWeight: 700, padding: "20px 0" }}>
      我的活动
    </Box>
    <Tabs style={{ marginBottom: 32 }}>
      <Tabs.TabPane tab="人群置换" key="crowd">
        {/* 这里放置人群置换的活动记录 */}
        <div style={{ padding: 16 }}>暂无记录</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="积分通兑" key="points">
        {/* 这里放置积分通兑的活动记录 */}
        <div style={{ padding: 16 }}>暂无记录</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="卡券" key="coupon">
        {/* 这里放置卡券的活动记录 */}
        <div style={{ padding: 16 }}>暂无记录</div>
      </Tabs.TabPane>
    </Tabs>
  </>
);

// 页面部分，将三个组件结合在一起
const Page = () => (
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <ActivityTypes />
    <ExcellentCases />
    <MyActivities />
  </div>
);

export default Page;
