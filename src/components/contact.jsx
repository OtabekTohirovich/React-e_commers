import { Button, Card, CardContent, Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container fixed>
      <Card>
        <CardContent>
          <Typography variant="h3">Knowledgebase</Typography>
          <Typography>We're here to help with any questions or code.</Typography>
          <Button variant="text">Contact support</Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;
