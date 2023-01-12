import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Modal,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import CreateEventTicketCard from "./CreateEventTicketCard";
import EventTicketModal from "./EventTicketModal";

export default function CreateEventStep2({ handleBack, getStep2Data}) {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(true)
  const [ticketCardDetails, setTicketCardDetails] = useState([]);
  const handleModalClose = () => setOpenModal(false);

  const handleAddTicketButton = () => {
    setOpenModal((prev) => !prev);
  };

  // handles details from modal
  const handleTicketCardDetails = (details) => {
   const duplicate =  ticketCardDetails.some((item)=>item.ticketName == details.ticketName)
   

   if(duplicate){
    const replacedValue = ticketCardDetails.map((item)=>{
      if(item.ticketName === details.ticketName){
        return details
      }
      return item
    })

    setTicketCardDetails(replacedValue)
   }
   else{

     setTicketCardDetails([...ticketCardDetails, details]);
   }
  };
  const handleDelete = ({ target }) => {
    const itemId = target.parentElement.parentElement.parentElement.id;

    const filtered = ticketCardDetails?.filter((item) => {
      const { id } = item;
      return id != itemId;
    });

    setTicketCardDetails(filtered);
  };

  const handleNextAction = ()=>{
    ticketCardDetails.length < 1? setOpenSnackBar(true) : getStep2Data(ticketCardDetails)
    
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "grey.50",
        padding: 2,
        marginTop: 4,
        position: "relative",
      }}
    >
 <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: "top", horizontal: "center"}}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          You have not created any ticket!
        </Alert>
      </Snackbar>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            columnGap: 1,
          }}
        >
          <BookOnlineIcon /> Tickets
        </Typography>
        <Divider sx={{ margin: "2rem 0" }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Let's create tickets!
        </Typography>
        <Typography sx={{ color: "grey.700" }}>
          Create tickets for your event by clicking on the 'Add Tickets' button
          below.
        </Typography>

        <Box
          mt={3}
          mb={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Tickets({ticketCardDetails.length})
          </Typography>

          <Box sx={{ position: "relative", width: "8rem" }}>
            <Button
              size="large"
              fullWidth
              sx={{
                backgroundColor: "primary.main",
                color: "grey.100",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "primary.main" },
              }}
              onClick={handleAddTicketButton}
            >
              Add Tickets
            </Button>
          </Box>

          <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <EventTicketModal
                handleModalClose={handleModalClose}
                handleTicketCardDetails={handleTicketCardDetails}
              />
            </Box>
          </Modal>
        </Box>

        {/* create tickets cards */}
        {ticketCardDetails?.map((item) => {
          const {
            id,
           
          } = item;
          return (
            <CreateEventTicketCard
              key={id}
              id={id}
             item={item}
              handleDelete={handleDelete}
              
            />
          );
        })}

        <Box mt={2} sx={{display: "flex", justifyContent: "center", gap: 2}}>
          
          <Button variant="contained" onClick={()=>handleBack()}>Previous</Button>
          <Button variant="contained" onClick={handleNextAction}>Next</Button>
        </Box>
      </Box>
    </Container>
  );
}
