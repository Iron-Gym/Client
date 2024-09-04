import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ScheduleOutlined,
  RobotOutlined,
  DollarOutlined,
  CheckOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/Home";
import logo from "../images/logo.png";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="max-w-[1440px] w-full mx-auto">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: "#1E201E", // Change sidebar color to red
        }}
      >
        {collapsed ? (
          <div className="my-5">
            <img src={logo} alt="" />
          </div>
        ) : (
          <div className="text-2xl flex items-center justify-center pt-5 text-slate-300 font-bold mb-5">
            IRON GYM
          </div>
        )}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Clients",
            },
            {
              key: "3",
              icon: <RobotOutlined />,
              label: "Admins",
            },
            {
              key: "4",
              icon: <DollarOutlined />,
              label: "Income",
            },
            {
              key: "5",
              icon: <CheckOutlined />,
              label: "Payments",
            },
            {
              key: "6",
              icon: <ScheduleOutlined />,
              label: "Schedules",
            },
          ]}
          style={{ background: "#1E201E" }} // Change sidebar menu color to red
        />
      </Sider>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "#1E201E", // Change header color to red
            height: "40px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
        <Content
          style={{
            margin: "0px",
            minHeight: 280,
            background: "#001529",
          }}
        >
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
