import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/Home";
import logo from "../images/logo.png";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
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
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
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
            background: "#001529",
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
            padding: 12,
            minHeight: 280,
            background: "#001529",
          }}
        >
          {/* <Register /> */}
          {/* <Login/> */}
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
