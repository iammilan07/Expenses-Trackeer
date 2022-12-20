import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { selectExpenseList, selectMappedList, selectpiechart } from "../../redux/index/index";
import { PieChart, Pie, Cell, Legend } from "recharts";

const Details = () => {

    const list = useSelector(selectExpenseList);


    const sdata = useSelector(selectMappedList);

    const data = useSelector(selectpiechart)





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
            {/* <pre>{JSON.stringify(sdata, null, 2)}</pre> */}
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
            <Text textAlign='center' paddingTop='25px'>Expenses Details</Text>

            <Box alignItems='center' justifyContent='center' display='flex'>
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
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />


                        ))}
                    </Pie>
                </PieChart>
            </Box>






        </Box>
    )
}

export default Details