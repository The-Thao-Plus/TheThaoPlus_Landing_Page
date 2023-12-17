import { AccordionSummary, Container, Stack, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { listQuestion } from 'src/_mock/listQuestion';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid  #000 `,
  backgroundColor: '#00c187',
  marginBottom: '20px',
  borderRadius: '10px',
  transition: '0.4s all linear',

  '&:before': {
    display: 'none',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderBottom: '1px solid rgba(0, 0, 0, .125)',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  backgroundColor: '#fff',
}));

function OwnerQuestion() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ mb: 15, pt: 8, pb: 3 }}>
      <Stack alignItems="center" justifyContent="center" gap={1} mb={5}>
        <Typography variant="h3" color="main.main">
          Câu hỏi thường gặp
        </Typography>
      </Stack>
      <Stack>
        {listQuestion.map((item) => (
          <Accordion key={item.id} expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
              }}
            >
              <ExpandCircleDownIcon />
              <Typography sx={{ ml: 1 }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.description?.map((des, index) => (
                <Typography key={index} gutterBottom>
                  {des}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Container>
  );
}

export default OwnerQuestion;
