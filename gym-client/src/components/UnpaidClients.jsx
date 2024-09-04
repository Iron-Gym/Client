import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, ConfigProvider } from "antd";
import Highlighter from "react-highlight-words";

const data = [
  {
    clientId: 5,
    fName: "Kavinda",
    lName: "Medagoda",
    age: 14,
    email: "kavindabmedagoda@gmail.com",
    phone: "070-2322321",
    registrationDate: "2024-05-25",
    status: "ACTIVE",
    schedule: {
      scheduleId: 1,
      scheduleName: "basic",
      description: "basic",
      clients: [],
    },
    payments: [],
  },
  {
    clientId: 8,
    fName: "Jane",
    lName: "Smith",
    age: 33,
    email: "jane.smith@example.com",
    phone: "234-567-8901",
    registrationDate: "2024-03-02",
    status: "ACTIVE",
    schedule: {
      scheduleId: 1,
      scheduleName: "basic",
      description: "basic",
      clients: [],
    },
    payments: [],
  },
  {
    clientId: 9,
    fName: "Alice",
    lName: "Johnson",
    age: 31,
    email: "alice.johnson@example.com",
    phone: "345-678-9012",
    registrationDate: "2024-03-02",
    status: "ACTIVE",
    schedule: {
      scheduleId: 1,
      scheduleName: "basic",
      description: "basic",
      clients: [],
    },
    payments: [],
  },
];

const UnpaidClients = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        className="text-white"
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "First Name",
      dataIndex: "fName",
      key: "fName",
      width: "30%",
      ...getColumnSearchProps("fName"),
    },
    {
      title: "Last Name",
      dataIndex: "lName",
      key: "lName",
      width: "30%",
      ...getColumnSearchProps("lName"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#1c1c1c",
            headerColor: "#ffffff",
            rowHoverBg: "#333333",
            rowSelectedBg: "#444444",
            rowExpandedBg: "#2c2c2c",
            cellPaddingBlock: 16,
            cellPaddingInline: 16,
            bodySortBg: "#2c2c2c",
            borderColor: "#444444",
            headerBorderRadius: 8, // Darker border color
          },
        },
        token: {
          colorBgContainer: "#1c1c1c", // Background of the table
          colorText: "#ffffff", // Text color
        },
      }}
    >
      <Table columns={columns} dataSource={data} />
    </ConfigProvider>
  );
};

export default UnpaidClients;
