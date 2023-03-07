import Image from "next/image";
import { Navbar, Text, Button, Link } from "@nextui-org/react";
import { Box } from "./box";
import { Logo } from "./logo";
import menupng from "../../public/menu.png";
import a from "../../public/logos/a.jpg";
import b from "../../public/logos/b.jpg";
import c from "../../public/logos/c.jpg";
import d from "../../public/logos/d.jpg";
import e from "../../public/logos/e.jpg";
import f from "../../public/logos/f.jpg";
import g from "../../public/logos/g.jpg";
import h from "../../public/logos/h.png";
import i from "../../public/logos/i.jpg";
import j from "../../public/logos/j.png";
import k from "../../public/logos/k.jpg";
import l from "../../public/logos/l.jpg";
import styles from "@/styles/home.module.css";
import SliderContainer, { SliderItem } from "./slider";

const images = [a, b, c, d, e, f, g, h, i, j, k, l];

export const Layout: React.FC<any> = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      w: "100%",
      minHeight: "100vh",
      // backgroundColor: "#81c6939c",
      // background: "linear-gradient(#81c6939c, transparent)",
      background: "linear-gradient(rgb(255, 255, 255), rgb(176 212 185 / 35%))",
    }}
  >
    <Navbar
      variant="static"
      color=""
      css={{
        background:
          "linear-gradient(rgba(129, 198, 147, 0.61), rgba(86 ,154, 122, 0.58))",
      }}
    >
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      {/* <Navbar.Content>
        <Navbar.Item>
          <Image src={menupng} width={50} alt="menu" />
        </Navbar.Item>
      </Navbar.Content> */}
    </Navbar>

    <Box
      css={{
        padding: "5px 10px ",
        // backgroundColor: "#fff",
      }}
    >
      <Box
        css={{
          // width: '90%',
          height: 100,
          borderRadius: 7,
          backgroundColor: "#94b76a23",
          marginTop: 15,
          marginBottom: 15,
          paddingLeft: 20,
          paddingTop: 10,
        }}
      >
        <Box css={{ fontSize: 28, fontWeight: 700 }}>
          <span style={{ marginRight: 10 }}>当前积分: </span>
          <span>_ _</span>
        </Box>

        <Box css={{ display: "flex", alignItems: "center" }}>
          请
          <Button
            css={{ paddingLeft: 3, paddingRight: 3 }}
            light
            color="primary"
            auto
          >
            登录
          </Button>
          后查看积分余额
        </Box>
      </Box>

      <Box css={{ marginTop: 20 }}>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
          {images.map((image) => (
            <SliderItem key={Date.now.toString()} width={40}>
              <Image src={image} alt="logo" />
            </SliderItem>
          ))}
        </SliderContainer>
      </Box>

      {/* 活动列表 */}
      <Box css={{ fontSize: 20, fontWeight: 700, margin: "10px 0" }}>
        都在玩
      </Box>
      <Box
        css={{
          w: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          css={{
            width: "48%",
            height: 200,
            border: "2px solid #b3c1ff",
            borderRadius: 7,
            backgroundColor: "#eaf2fd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 居中的标题，蓝色背景 */}
          <Box
            css={{
              // position: "absolute",
              // top: 0,
              // left: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: 1.5,
              padding: "0 12px",
              backgroundColor: "#42a8fe",
              borderRadius: "0 0 20px 20px",
              width: "80%",
              fontSize: 14,
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            <span>进行中</span>
          </Box>

          <Unit x={a} y={b} />
          <Unit x={c} y={d} />
          <Unit x={e} y={f} />
        </Box>

        <Box
          css={{
            width: "48%",
            height: 200,
            border: "2px solid #c3c2f7",
            borderRadius: 7,
            backgroundColor: "#e6e6fd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 居中的标题，蓝色背景 */}
          <Box
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: 1.5,
              padding: "0 12px",
              backgroundColor: "#7374e8",
              borderRadius: "0 0 20px 20px",
              width: "80%",
              fontSize: 14,
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            <span>即将到来</span>
          </Box>

          <Unit x={g} y={h} />
          <Unit x={i} y={j} />
          <Unit x={k} y={l} />
        </Box>
      </Box>

      {/* 积分商城 */}
      <Box css={{ fontSize: 20, fontWeight: 700, margin: "10px 0" }}>
        都在兑换
      </Box>
    </Box>
  </Box>
);

function Unit({ x, y }: any) {
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        marginTop: 12,
        cursor: "pointer",
        padding: 5,
        borderRadius: 5,
        "&:hover": {
          backgroundColor: "rgb(152 198 22)",
        },
        "&:active": {
          backgroundColor: "rgb(152 198 22)",
        },
      }}
    >
      <Image src={x} width={50} alt="menu" />
      <span style={{ margin: "0 5px" }}>X</span>
      <Image src={y} width={50} alt="menu" />
    </Box>
  );
}
