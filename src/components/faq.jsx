import { Container, Stack, Typography } from "@mui/material";
import SimpleAccordion from "./accardion";

const Faq = () => {
  return (
    <Container fixed>
      <Stack alignItems={'center'} p="50px">
        <Typography variant="h2" fontWeight={'bold'}>
           FAQ
        </Typography>
        <Typography fontSize={'15px'}>
          Search our FAQ for answers to anything you might ask
        </Typography>
      </Stack>
      <SimpleAccordion />
    </Container>
  );
};

export default Faq;
