import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar, Col, Radio, Row, Select, ConfigProvider } from "antd";
import dayLocaleData from "dayjs/plugin/localeData";
dayjs.extend(dayLocaleData);

const App = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Calendar: {
            colorBgContainer: "#1f1f1f",
            colorText: "#ffffff",
            colorTextDisabled: "#8c8c8c",
            colorTextHeading: "#ffffff",
            colorTextSecondary: "#d9d9d9",
            borderRadiusLG: "8px",
          },
        },
      }}
    >
      <div
        style={{ padding: 16, backgroundColor: "#1f1f1f", borderRadius: "8px" }}
      >
        <Calendar
          fullscreen={false}
          headerRender={({ value, type, onChange, onTypeChange }) => {
            const start = 0;
            const end = 12;
            const monthOptions = [];
            let current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
              current = current.month(i);
              months.push(localeData.monthsShort(current));
            }
            for (let i = start; i < end; i++) {
              monthOptions.push(
                <Select.Option key={i} value={i} className="month-item">
                  {months[i]}
                </Select.Option>
              );
            }
            const year = value.year();
            const month = value.month();
            const options = [];
            for (let i = year - 10; i < year + 10; i += 1) {
              options.push(
                <Select.Option key={i} value={i} className="year-item">
                  {i}
                </Select.Option>
              );
            }
            return (
              <div
                style={{
                  padding: 8,
                  backgroundColor: "#1f1f1f",
                  color: "#ffffff",
                }}
              >
                <Row gutter={8}>
                  <Col>
                    <Radio.Group
                      size="small"
                      onChange={(e) => onTypeChange(e.target.value)}
                      value={type}
                      style={{ color: "#ffffff" }}
                    >
                      <Radio.Button value="month">Month</Radio.Button>
                      <Radio.Button value="year">Year</Radio.Button>
                    </Radio.Group>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      popupMatchSelectWidth={false}
                      className="my-year-select"
                      value={year}
                      onChange={(newYear) => {
                        const now = value.clone().year(newYear);
                        onChange(now);
                      }}
                      style={{ color: "#ffffff" }}
                    >
                      {options}
                    </Select>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      popupMatchSelectWidth={false}
                      value={month}
                      onChange={(newMonth) => {
                        const now = value.clone().month(newMonth);
                        onChange(now);
                      }}
                      style={{ color: "#ffffff" }}
                    >
                      {monthOptions}
                    </Select>
                  </Col>
                </Row>
              </div>
            );
          }}
          onPanelChange={onPanelChange}
        />
      </div>
    </ConfigProvider>
  );
};

export default App;
