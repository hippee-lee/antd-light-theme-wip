import { useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Collapse,
  CollapseProps,
  ConfigProvider,
  Divider,
  Drawer,
  DrawerProps,
  Dropdown,
  Flex,
  MenuProps,
  message,
  Modal,
  Pagination,
  PaginationProps,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
  Spin,
  ThemeConfig,
  Tooltip,
} from "antd";
import "./App.css";
import "./themes.css";
import { useResponsive } from "antd-style";
import { lightTheme } from "./components/style/theme";
import Title from "antd/es/typography/Title";
import Link from "antd/es/typography/Link";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  UserOutlined,
  DownOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import { Menu } from "antd";

import { useMemo } from "react";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];

const Context = React.createContext({ name: "Default" });

const baseStyle: React.CSSProperties = {
  width: "25%",
  height: 54,
};

function App() {
  // Notification code
  // const [api, contextHolder] = notification.useNotification();

  // const openNotification = (placement: NotificationPlacement) => {
  //   api.info({
  //     message: `Notification ${placement}`,
  //     description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
  //     placement,
  //   });
  // };

  const [value, setValue] = useState<string>("horizontal");
  const { xxl } = useResponsive();
  const [theme, setTheme] = useState("duro-light");

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menuItems: any[] = [
    {
      key: "sub1",
      label: "Navigation One",
      icon: <MailOutlined />,
      children: [
        {
          key: "g1",
          label: "Item 1",
          type: "group",
          children: [
            { key: "1", label: "Option 1" },
            { key: "2", label: "Option 2" },
          ],
        },
        {
          key: "g2",
          label: "Item 2",
          type: "group",
          children: [
            { key: "3", label: "Option 3" },
            { key: "4", label: "Option 4" },
          ],
        },
      ],
    },
    {
      key: "sub2",
      label: "Navigation Two",
      icon: <AppstoreOutlined />,
      children: [
        { key: "5", label: "Option 5" },
        { key: "6", label: "Option 6" },
        {
          key: "sub3",
          label: "Submenu",
          children: [
            { key: "7", label: "Option 7" },
            { key: "8", label: "Option 8" },
          ],
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub4",
      label: "Navigation Three",
      icon: <SettingOutlined />,
      children: [
        { key: "9", label: "Option 9" },
        { key: "10", label: "Option 10" },
        { key: "11", label: "Option 11" },
        { key: "12", label: "Option 12" },
      ],
    },
    {
      key: "grp",
      label: "Group",
      type: "group",
      children: [
        { key: "13", label: "Option 13" },
        { key: "14", label: "Option 14" },
      ],
    },
  ];

  const onMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const toggleTheme = () => {
    const newTheme = theme === "duro-light" ? "duro-dark" : "duro-light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };

  const collapseText = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const onCollapseChange = (key: string | string[]) => {
    console.log(key);
  };

  const textItems: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{collapseText}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{collapseText}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{collapseText}</p>,
    },
  ];

  // Drawer Code
  const [openDrawer, setDrawerOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Notifications
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <ConfigProvider theme={lightTheme}>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <div style={{ backgroundColor: "#f0f2f5", padding: "16px" }}>
            <Space direction={"vertical"}>
              <h2>Typography</h2>
              <Title>h1. Ant Design</Title>
              <Title level={2}>h2. Ant Design</Title>
              <Title level={3}>h3. Ant Design</Title>
              <Title level={4}>h4. Ant Design</Title>
              <Title level={5}>h5. Ant Design</Title>
              {/* <Text>Ant Design (default)</Text> */}
              {/* <Text type="secondary">Ant Design (secondary)</Text> */}
              {/* <Text type="success">Ant Design (success)</Text> */}
              {/* <Text type="warning">Ant Design (warning)</Text> */}
              {/* <Text type="danger">Ant Design (danger)</Text> */}
              {/* <Text disabled>Ant Design (disabled)</Text> */}
              {/* <Text mark>Ant Design (mark)</Text> */}
              {/* <Text code>Ant Design (code)</Text> */}
              {/* <Text keyboard>Ant Design (keyboard)</Text> */}
              {/* <Text underline>Ant Design (underline)</Text> */}
              {/* <Text delete>Ant Design (delete)</Text> */}
              {/* <Text strong>Ant Design (strong)</Text> */}
              {/* <Text italic>Ant Design (italic)</Text> */}
              <Link href="https://ant.design" target="_blank">
                Ant Design (Link)
              </Link>
              <h2>Icons</h2>
              <Space>
                <HomeOutlined />
                <SettingFilled />
                <SmileOutlined />
                <SyncOutlined spin />
                <SmileOutlined rotate={180} />
                <LoadingOutlined />
              </Space>
              <Space>
                <SmileTwoTone />
                <HeartTwoTone twoToneColor="#eb2f96" />
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              </Space>

              <h1>Duro Antd lightTheme config</h1>
              <Spin spinning={true} size={"large"} />
              {/* <Button type="primary" onClick={toggleTheme}>
          Toggle to {theme === "duro-light" ? "Dark" : "Light"} Theme
        </Button> */}
              <Flex gap="middle" vertical justify="flex-start">
                <Radio.Group
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <Radio value="horizontal">horizontal</Radio>
                  <Radio value="vertical">vertical</Radio>
                </Radio.Group>
                <Flex vertical={value === "vertical"}>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        ...baseStyle,
                        backgroundColor:
                          i % 2
                            ? lightTheme.token?.blue9
                            : lightTheme.token?.blue3,
                      }}
                    />
                  ))}
                </Flex>
                <ConfigProvider componentSize={xxl ? "middle" : "small"}>
                  <Flex vertical gap="middle">
                    <Flex gap="middle" wrap>
                      <Button color="default" variant="solid">
                        Solid
                      </Button>
                      <Button color="default" variant="outlined">
                        Outlined
                      </Button>
                      <Button color="default" variant="dashed">
                        Dashed
                      </Button>
                      <Button color="default" variant="filled">
                        Filled
                      </Button>
                      <Button color="default" variant="text">
                        Text
                      </Button>
                      <Button color="default" variant="link">
                        Link
                      </Button>
                    </Flex>
                    <Flex gap="middle" wrap>
                      <Button color="primary" variant="solid">
                        Solid
                      </Button>
                      <Button color="primary" variant="outlined">
                        Outlined
                      </Button>
                      <Button color="primary" variant="dashed">
                        Dashed
                      </Button>
                      <Button color="primary" variant="filled">
                        Filled
                      </Button>
                      <Button color="primary" variant="text">
                        Text
                      </Button>
                      <Button color="primary" variant="link">
                        Link
                      </Button>
                    </Flex>
                    <Flex gap="middle" wrap>
                      <Button color="danger" variant="solid">
                        Solid
                      </Button>
                      <Button color="danger" variant="outlined">
                        Outlined
                      </Button>
                      <Button color="danger" variant="dashed">
                        Dashed
                      </Button>
                      <Button color="danger" variant="filled">
                        Filled
                      </Button>
                      <Button color="danger" variant="text">
                        Text
                      </Button>
                      <Button color="danger" variant="link">
                        Link
                      </Button>
                    </Flex>
                  </Flex>
                </ConfigProvider>
              </Flex>
            </Space>
            <h2>Modal</h2>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <div style={{ backgroundColor: "#f0f2f5", padding: "16px" }}>
            <p>Divided text</p>
            <Divider />
            <p>Divided text</p>
            <Divider dashed />
            <p>Divided text</p>
            <h2>Breadcrumb</h2>
            <Breadcrumb
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="">Application Center</a>,
                },
                {
                  title: <a href="">Application List</a>,
                },
                {
                  title: "An Application",
                },
              ]}
            />
            <h2>Dropdowns</h2>
            <Space wrap>
              <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                menu={menuProps}
                placement="bottom"
                icon={<UserOutlined />}
              >
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                menu={menuProps}
                onClick={handleButtonClick}
                disabled
              >
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                menu={menuProps}
                buttonsRender={([leftButton, rightButton]) => [
                  <Tooltip title="tooltip" key="leftButton">
                    {leftButton}
                  </Tooltip>,
                  React.cloneElement(
                    rightButton as React.ReactElement<any, string>,
                    { loading: true }
                  ),
                ]}
              >
                With Tooltip
              </Dropdown.Button>
              <Dropdown menu={menuProps}>
                <Button>
                  <Space>
                    Button
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown.Button
                menu={menuProps}
                onClick={handleButtonClick}
                danger
              >
                Danger
              </Dropdown.Button>
            </Space>
            <h2>Menu</h2>
            <Menu
              onClick={onMenuClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={menuItems}
            />
            <h2>Notification</h2>
            <Context.Provider value={contextValue}>
              {contextHolder}
              <Space>
                <Button
                  type="primary"
                  onClick={() => openNotification("topLeft")}
                  icon={<RadiusUpleftOutlined />}
                >
                  topLeft
                </Button>
                <Button
                  type="primary"
                  onClick={() => openNotification("topRight")}
                  icon={<RadiusUprightOutlined />}
                >
                  topRight
                </Button>
              </Space>
              <Divider />
              <Space>
                <Button
                  type="primary"
                  onClick={() => openNotification("bottomLeft")}
                  icon={<RadiusBottomleftOutlined />}
                >
                  bottomLeft
                </Button>
                <Button
                  type="primary"
                  onClick={() => openNotification("bottomRight")}
                  icon={<RadiusBottomrightOutlined />}
                >
                  bottomRight
                </Button>
              </Space>
            </Context.Provider>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <div style={{ backgroundColor: "#f0f2f5", padding: "16px" }}>
            <h2>Pagination</h2>
            <Pagination
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              defaultCurrent={3}
              total={500}
            />
            <br />
            <Pagination
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              defaultCurrent={3}
              total={500}
              disabled
            />
            <h2>Collapse (accordion)</h2>
            <Collapse
              items={textItems}
              defaultActiveKey={["1"]}
              onChange={onCollapseChange}
            />
            <h2>Alerts</h2>
            <Alert message="Success Tips" type="success" showIcon />
            <br />
            <Alert message="Informational Notes" type="info" showIcon />
            <br />
            <Alert message="Warning" type="warning" showIcon closable />
            <br />
            <Alert message="Error" type="error" showIcon />
            <br />
            <Alert
              message="Success Tips"
              description="Detailed description and advice about successful copywriting."
              type="success"
              showIcon
            />
            <br />
            <Alert
              message="Informational Notes"
              description="Additional description and information about copywriting."
              type="info"
              showIcon
            />
            <br />
            <Alert
              message="Warning"
              description="This is a warning notice about copywriting."
              type="warning"
              showIcon
              closable
            />
            <br />
            <Alert
              message="Error"
              description="This is an error message about copywriting."
              type="error"
              showIcon
            />
            <h2>Drawer</h2>
            <Space>
              <Radio.Group value={placement} onChange={onChange}>
                <Radio value="top">top</Radio>
                <Radio value="right">right</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="left">left</Radio>
              </Radio.Group>
              <Button type="primary" onClick={showDrawer}>
                Open
              </Button>
            </Space>
            <Drawer
              title="Basic Drawer"
              placement={placement}
              closable={false}
              onClose={onClose}
              open={openDrawer}
              key={placement}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
}

export default App;
