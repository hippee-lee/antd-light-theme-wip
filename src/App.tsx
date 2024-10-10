import { useState } from 'react';
import {Button, ConfigProvider, Flex, Radio, Space, Spin} from 'antd';
import './App.css';
import './themes.css';
import { useResponsive } from 'antd-style';
import { theme } from './components/style/theme';

const baseStyle: React.CSSProperties = {
  width: '25%',
  height: 54,
};

function App() {
  const [value, setValue] = useState<string>('horizontal');
  const { xxl } = useResponsive();
  const [theme, setTheme] = useState('duro-light');

  const toggleTheme = () => {
    const newTheme = theme === 'duro-light' ? 'duro-dark' : 'duro-light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
      <ConfigProvider
          theme={theme}
      >
      <Space direction={'vertical'}>
        <h1>Duro Antd config</h1>
        <Spin spinning={true} size={"large"}/>
        <Button type="primary" onClick={toggleTheme}>
          Toggle to {theme === 'duro-light' ? 'Dark' : 'Light'} Theme
        </Button>
        <Flex gap="middle" vertical justify="flex-start">
          <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
            <Radio value="horizontal">horizontal</Radio>
            <Radio value="vertical">vertical</Radio>
          </Radio.Group>
          <Flex vertical={value === 'vertical'}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                style={{
                  ...baseStyle,
                  backgroundColor: i % 2 ? 'var(--ant-color-primary)' : 'var(--ant-color-bg-container',
                }}
              />
            ))}
          </Flex>
          <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
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
    </ConfigProvider>
  );
}

export default App;
