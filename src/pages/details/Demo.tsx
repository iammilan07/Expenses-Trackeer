import { Box, Text } from '@chakra-ui/react'
// import { useSelector } from 'react-redux'
// import { PieChart, Pie, Cell, Legend } from "recharts";
// import { selectExpenseList } from '../../redux/index'


const Demo = () => {
    // const list = useSelector(selectExpenseList)
    // // const data = useSelector(selectMappedcategory)
    // // const sdata = useSelector(selectcategorypiechart)
    // const COLORS = ['red', "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({
    //     cx,
    //     cy,
    //     midAngle,
    //     innerRadius,
    //     outerRadius,
    //     percent,
    //     index
    // }: any) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text
    //             x={x}
    //             y={y}
    //             fill="white"
    //             textAnchor={x > cx ? "start" : "end"}
    //             dominantBaseline="central"
    //         >
    //             {`${(percent * 100).toFixed(2)}%`}
    //         </text>
    //     );
    // };
    // const listt = useSelector(selectExpenseList)

    return (
        <Box>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

            <Text>This is demo...</Text>
            {/* <Box>
                <PieChart width={400} height={450}>

                    <Legend layout="vertical" verticalAlign="top" align="center" /> */}
            {/* 
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
                    </Pie> */}
            {/* </PieChart>
                <Text paddingTop='10px' as='b' paddingLeft='100px'>Pie-Chart based on expenses.</Text>
            </Box> */}
        </Box>
    )
}

export default Demo