import { Card, Carousel, Tabs } from "antd";
import styles from "@/styles/tob.module.css";
import Image from "next/image";
import x from "../public/tob/x.png";
import y from "../public/tob/y.png";
import z from "../public/tob/z.png";
import jf1 from "../public/tob/jf1.png";
import jf2 from "../public/tob/jf2.png";
import rq1 from "../public/tob/rq1.png";
import rq2 from "../public/tob/rq2.png";
import kq from "../public/tob/kq.png";
import Box from "./components/box";
import UnionPointsAnalysis from "./components/x";
import CrowdAuthActivityDetail from "./components/y4";
import Z6 from "./components/z6";

const { Meta } = Card;

const IntegralExchange = () => {
  return (
    <div>
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }} className="flex flex-col">
        <div className="border flex flex-1">
          {/* 左上部份 - 左边 */}
          <div className="border flex justify-between w-full">
            <div className="w-2/3 p-6">
              <div className="text-gray-800 font-medium">积分规则拆解</div>
              <div className="text-sm text-gray-500 mb-4">平均20元：1积分</div>
              <div className="text-gray-800 font-medium">积分池</div>
              <div className="text-sm text-gray-500 mb-4">
                已发放积分：1879222
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-500">金卡积分占比：23%</div>
                <div className="text-sm text-gray-500">银卡积分占比：67%</div>
                <div className="text-sm text-gray-500">铜卡积分占比：10%</div>
              </div>
            </div>
            <div className="border-l p-6">
              <div className="text-lg font-semibold mb-4">积分消耗速率</div>
              <ul className="list-disc">
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  当年积分使用量：79222
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  金卡使用量：7856
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  银卡使用量：65558
                </li>
                <li className="flex items-center text-gray-600 mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  铜卡使用量：2296
                </li>
              </ul>
            </div>
          </div>

          {/* 左上部份 - 右边 */}
          <div className="border-r border-t border-b flex flex-col items-center p-6">
            <div className="text-lg font-semibold mb-4">建议倍率:</div>
            <div className="flex items-center">
              <input
                type="text"
                value="1.23"
                readOnly
                className="w-16 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        {/* 左下部分占据空间的代码 */}
        <div className="border border-t-0 p-5">
          <div className="text-lg font-bold text-gray-800">
            拆算规则：{" "}
            <span className="font-normal text-orange-600 font-bolder">
              1 : 1.27
            </span>
          </div>
        </div>
      </div>
      {/* 右边部分占据空间的代码 */}
    </div>
      <UnionPointsAnalysis />
    </div>
  );
};

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
      参与活动
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
        <Meta
          title="人群认证"
          description="品牌之间高价值会员的相互导流，通过高等级的认证提升新会员增量"
        />
      </Card>
      <Card
        hoverable
        style={{ width: "30%" }}
        cover={<Image alt="x" src={y} />}
      >
        <Meta
          title="积分通兑"
          description="多个品牌积分通兑，增强消费者体验的同时协助甲方拉新、激活老会员价值"
        />
      </Card>
      <Card
        hoverable
        style={{ width: "30%" }}
        cover={<Image alt="x" src={z} />}
      >
        <Meta
          title="卡券"
          description="品牌之间以卡券包的形式实现联合，激励消费者增长，集中导流，提升销售"
        />
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
      <Tabs.TabPane tab="人群认证" key="crowd">
        {/* 这里放置人群置换的活动记录 */}
        <CrowdAuthActivityDetail />
        <Z6 />
      </Tabs.TabPane>
      <Tabs.TabPane tab="积分通兑" key="points">
        {/* 这里放置积分通兑的活动记录 */}
        <IntegralExchange />
      </Tabs.TabPane>
      <Tabs.TabPane tab="卡券" key="coupon">
        {/* 这里放置卡券的活动记录, 左右布局的card */}
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
          <div className="flex items-center space-x-4 m-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg transform -skew-x-6"></div>
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-4 transform skew-x-6">
                <div className="text-gray-700 font-semibold mb-2">
                  满200-20代金券
                </div>
                <div className="text-gray-600">× 100</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-500 rounded-lg shadow-lg transform -skew-x-6"></div>
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-4 transform skew-x-6">
                <div className="text-gray-700 font-semibold mb-2">
                  满500-50代金券
                </div>
                <div className="text-gray-600">× 500</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-lg shadow-lg transform -skew-x-6"></div>
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-4 transform skew-x-6">
                <div className="text-gray-700 font-semibold mb-2">
                  无门槛5元代金券
                </div>
                <div className="text-gray-600">× 1000</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-500 rounded-lg shadow-lg transform -skew-x-6"></div>
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-4 transform skew-x-6">
                <div className="text-gray-700 font-semibold mb-2">
                  满700-100代金券
                </div>
                <div className="text-gray-600">× 500</div>
              </div>
            </div>
          </div>
          <div className="relative w-160 h-160">
            {/* <div className="absolute inset-0 bg-gray-300 rounded-full"></div> */}
            {/* <Image
              alt="x"
              src={kq}
              // className="w-full h-full rounded-full object-cover"
            /> */}
            <div className="grid grid-cols-2 gap-4 p-8 bg-white shadow rounded-lg">
              <div className="col-span-2 text-2xl font-bold">
                联盟券包营销活动分析
              </div>

              <div className="col-span-2 md:col-span-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-lg font-medium mb-4 text-gray-800">
                  活动报告
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">报告明细</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
                      新增
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">
                      活动效果分析
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-gray-800">
                      进行中
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-lg font-medium mb-4 text-gray-800">
                  QC-活动订单分析报告
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">订单汇总</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
                      新增
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">订单明细</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-gray-800">
                      进行中
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-lg font-medium mb-4">本次活动拉新人数</div>
                <div className="text-5xl font-bold">341,122,765</div>
              </div>

              <div className="col-span-2 md:col-span-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-lg font-medium mb-4">购买订单数</div>
                <div className="text-5xl font-bold">162,137,521</div>
              </div>

              <div className="col-span-2 md:col-span-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-lg font-medium mb-4">购买人数</div>
                <div className="text-5xl font-bold">131,021,453</div>
              </div>

              <div className="col-span-2 md:col-span-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-lg font-medium mb-4">购买商品数</div>
                <div className="text-5xl font-bold">276,273,598</div>
              </div>

              <div className="col-span-2 md:col-span-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-lg font-medium mb-4">优惠券销售占比</div>
                <div className="text-5xl font-bold">0.00%</div>
              </div>
            </div>
          </div>
        </div>
      </Tabs.TabPane>
    </Tabs>
  </>
);

// 页面部分，将三个组件结合在一起
const Page = () => (
  <Box css={{ w: "100%", padding: 20 }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <ExcellentCases />
      <MyActivities />
      <ActivityTypes />
    </div>
  </Box>
);

export default Page;
