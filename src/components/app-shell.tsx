import { Container } from '@chakra-ui/react'

interface AppShellProps {
    children: any
}
const AppShell = ({ children }: AppShellProps) => {
    return (
        <Container maxW="sm" bg="gray.900" color="gray.100">{children}</Container>
    )
}

export default AppShell