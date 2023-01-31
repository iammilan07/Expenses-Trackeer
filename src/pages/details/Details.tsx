import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import {
  selectExpenseList,
  selectpiechart,
  selectpiechartcat,
} from "../../store/expense/index";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Newexpenselist from "../../components/expense-list/Newexpenselist";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { ImFilesEmpty } from "react-icons/im";

const Details = () => {
  //state
  const [date, setDate] = useState(new Date());
  //selector
  const list = useSelector(selectExpenseList);
  const data = useSelector(selectpiechart);
  const data2 = useSelector(selectpiechartcat);
  //piecharts
  const COLORS = ["red", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <Box paddingTop="10px" marginBottom="100px" width="100%">
      {/* <pre>{JSON.stringify(data1, null, 2)}</pre> */}

      <Link to="/">
        <Button
          colorScheme="gray.200"
          width="50px"
          height="30px"
          fontSize="12px"
          border="1px solid white"
          borderRadius="6px"
          backgroundColor="transparent"
          marginLeft="300px"
        >
          <HStack justifyContent="center" alignItems="center">
            <MdOutlineArrowBackIos />
            {/* <Text>Home</Text> */}
          </HStack>
        </Button>
      </Link>
      <Text textAlign="center" fontSize="20px">
        Your Expense Details!
      </Text>
      <Box alignItems="center" justifyContent="center">
        <Box marginTop="50px">
          {Object.keys(data).length > 0 ? (
            <PieChart width={400} height={400}>
              <Legend layout="vertical" verticalAlign="top" align="center" />
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {list.map((expense: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          ) : (
            <Box height="200px" paddingTop="100px">
              <Box display="flex" justifyContent="center">
                <Text textAlign="center" fontSize="25px" color="red">
                  PieChart Empty!!
                </Text>
                <ImFilesEmpty />
              </Box>
              <Text textAlign="center" color="red">
                Please add some expenses ...
              </Text>
            </Box>
          )}

          <Text as="b" paddingLeft="70px">
            Chart: Pie-Chart based on expense.
          </Text>
        </Box>
        <Box paddingTop="50px">
          {Object.keys(data2).length > 0 ? (
            <PieChart width={400} height={500}>
              <Legend layout="vertical" verticalAlign="top" align="center" />
              <Pie
                data={data2}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {list.map((expense: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          ) : (
            <Box height="200px" paddingTop="100px">
              <Box display="flex" justifyContent="center">
                <Text textAlign="center" fontSize="25px" color="red">
                  PieChart Empty!!
                </Text>
                <ImFilesEmpty />
              </Box>
              <Text textAlign="center" color="red">
                Please add some expenses ...
              </Text>
            </Box>
          )}
          <Text as="b" paddingLeft="70px">
            Chart: Pie-Chart based on category.
          </Text>
        </Box>
      </Box>
      <Box
        // className="app"

        marginRight="10px"
        paddingTop="50px"
        // width="300px"
      >
        <Text textAlign="center" className="header">
          Items According to the date!!
        </Text>
        <Box
          paddingLeft="20px"
          width="300px"
          alignItems="center"
          justifyContent="center"
        >
          <Calendar onChange={setDate} value={date} />
        </Box>
        <Box className="text-center">
          Expense list of : {date.toLocaleDateString()}
        </Box>
      </Box>

      <Box marginLeft="10px">
        <Newexpenselist date={date.toLocaleDateString()} />
      </Box>
    </Box>
  );
};

export default Details;
