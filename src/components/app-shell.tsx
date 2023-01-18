import { Container } from "@chakra-ui/react";

interface AppShellProps {
  children: any;
}
const AppShell = ({ children }: AppShellProps) => {
  return (
    <Container
      border="1px solid yellow"
      maxW="sm"
      bg="gray.900"
      color="gray.100"
    >
      {children}
    </Container>
  );
};

export default AppShell;
