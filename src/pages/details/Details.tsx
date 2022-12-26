import React from 'react'
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { selectcategoryList, selectExpenseList, selectMappedList, selectpiechart, selectpiechartcat } from "../../redux/index/index";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Newexpenselist from '../../components/expense-list/Newexpenselist';


const Details = () => {
    const [date, setDate] = useState(new Date())
    const dataa = useSelector(selectcategoryList)
    const list = useSelector(selectExpenseList);
    const data = useSelector(selectpiechart)
    const data2 = useSelector(selectpiechartcat)




    const COLORS = ['red', "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
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
        <Box>
            {/* <pre>{JSON.stringify(dataa, null, 2)}</pre> */}

            <Link to="/">
                <Button
                    border="1px solid black"
                    borderRadius="6px"
                    backgroundColor='cyan.400'
                    marginLeft="735px"
                >
                    <HStack
                        justifyContent="center"
                        alignItems="center"
                    >
                        <AiOutlineHome />
                        <Text>Home</Text>
                    </HStack>

                </Button>
            </Link>
            <Link to="/demo">
                <Button
                    border="1px solid black"
                    borderRadius="6px"
                    backgroundColor='cyan.400'
                    marginLeft="735px"
                >
                    <HStack
                        justifyContent="center"
                        alignItems="center"
                    >
                        <AiOutlineHome />
                        <Text>Demo</Text>
                    </HStack>

                </Button>
            </Link>

            <Text textAlign='center' paddingTop='25px'>Expenses Details</Text>

            <Box alignItems='center' display='flex'>

                <Box>
                    <PieChart width={400} height={450}>

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
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <Text paddingTop='10px' as='b' paddingLeft='100px'>Pie-Chart based on expenses.</Text>
                </Box>


                <Box>
                    <PieChart width={400} height={450}>

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
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />


                            ))}
                        </Pie>
                    </PieChart>
                    <Text paddingTop='10px' as='b' paddingLeft='100px'>Pie-Chart based on category.</Text>
                </Box>



            </Box>

            <Box display='flex' justifyContent='center' paddingTop='50px'>
                <Box className="app">
                    <Text className="header" textAlign='center' justifyContent='center'>React Calendar</Text>
                    <Box className="calendar-container">
                        <Calendar onChange={setDate} value={date} />
                    </Box>
                    <Box className="text-center" justifyContent='center'>
                        Selected date: {date.toLocaleDateString()}
                    </Box>
                </Box>

            </Box>

            {/* <pre>{JSON.stringify(sdata, null, 2)}</pre> */}
            <Newexpenselist date={date.toLocaleDateString()} />

        </Box>
    )
}

export default Details
