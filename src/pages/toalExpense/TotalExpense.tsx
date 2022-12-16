import { Box, HStack, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { selectExpenseList } from '../../redux/index';

const TotalExpense = () => {

    const list = useSelector(selectExpenseList)
    let incc = 0;
    let decc = 0;
    list.map((expense: any) => {
        if (Number(expense.amount) > 0) {
            incc = incc + Number(expense.amount);
        } else {
            decc = decc - Number(expense.amount);
        }
        return console.log("hist", expense.Expense, Number(expense.amount), incc, decc);
    });

    return (
        <HStack textAlign='center' justifyContent='center' display='flex'>
            <Text as="b">Your expenses=</Text>
            <Text as='b' color='red'>RS {incc - decc}</Text>
        </HStack>

    )
}

export default TotalExpense