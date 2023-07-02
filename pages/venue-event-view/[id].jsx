import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShareIcon from "@mui/icons-material/Share";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import TimeRemaining from "../../components/view-event-component/TimeRemaining";
import InfoCard from "../../components/view-event-component/InfoCard";
import TicketForm from "../../components/view-event-component/TicketForm";

// export const getStaticPaths = async () => {
//   let data;
//   try {
//     await fetch(`https://fakestoreapi.com/products`)
//       .then((res) => res.json())
//       .then((result) => (data = result));
//   } catch (error) {
//     console.log(error);
//   }
//   const paths = data.map((item) => {
//     return {
//       params: {
//         id: item.id.toString(),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
// export async function getStaticProps({ params }) {
//   let data;
//   await fetch(`https://fakestoreapi.com/products/${params.id}`)
//     .then((res) => res.json())
//     .then((result) => (data = result));
//   return {
//     props: {
//       data: data,
//     },
//   };
// }

const style = {
  fontSize: "clamp(.8rem, -0.875rem + 8.333vw, 1rem)",
  display: "flex",
  alignItems: "center",
  color: "grey.600",
};
export default function Product() {
  // const { description, image, title } = data;
  const data = {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  };
  const { description, image, title } = data;
  const infoData = [
    { text1: "Organised by", text2: "The Teeny Rabbit", avatar: <AccountCircleIcon /> },
    { text1: "Date and Time", text2: "Sat, Apr 30, 2022 11:30 AM", avatar: <CalendarMonthIcon /> },
    {
      text1: "Location",
      text2: "00 Challis St, Newport, Victoria, 0000, Australia",
      avatar: <FmdGoodIcon />,
    },
  ];

  console.log(data);
  return (
    <>
      <Breadcrumb>
        <Link href="/" legacyBehavior>
          <a href="/">Home</a>
        </Link>
        <Typography>venue event view</Typography>
      </Breadcrumb>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        {/* event title */}
        <Box mb={2} sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              width: { xs: "5rem" },
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "white",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                height: "2rem",
                backgroundColor: "primary.main",
                width: "100%",
                textAlign: "center",
                padding: "2px",
              }}
            >
              APR
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "center", padding: "5px" }}>
              30
            </Typography>
          </Box>
          {/* event title and time */}
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "clamp(.8rem, -0.875rem + 8.333vw, 1.8rem)", fontWeight: 700 }}
            >
              Spring Showcase Saturday April 30th 2022 at 7pm
            </Typography>
            <Box mt={2} sx={{ display: "flex", flexWrap: "wrap", columnGap: 2, rowGap: 1 }}>
              <Typography sx={style}>
                <FmdGoodIcon fontSize="small" /> Venue Event
              </Typography>
              <Typography sx={style}>
                <CalendarMonthIcon fontSize="small" /> Starts on Sat, Apr 30, 2022 11:30 AM
              </Typography>
              <Typography sx={style}>
                <AccessTimeIcon fontSize="small" /> 2h
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* event banner and book component */}
        <Grid container>
          <Grid item md={8} xs={12} sx={{ padding: " 0 .5rem" }}>
            <Box sx={{ position: "relative", height: "25rem" }}>
              <Image src="/images/test-image-1.jpg" fill={true} alt="test image" style={{ borderRadius: ".2rem" }} />
            </Box>
            <Box mt={3} sx={{ textAlign: "center" }}>
              <Button
                startIcon={<ShareIcon />}
                variant="contained"
                disableElevation={true}
                sx={{
                  backgroundColor: "white",
                  color: "grey.900",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                Share
              </Button>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, marginTop: 2 }}>
              About this event
            </Typography>
            <Typography sx={{ color: "grey.700" }}>{description}</Typography>
          </Grid>
          {/* book component */}
          <Grid
            mt={{ xs: 2, md: "0" }}
            item
            md={4}
            xs={12}
            sx={{ backgroundColor: "white", borderRadius: 2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, padding: "1rem 1.5rem" }}>
              Event Details
            </Typography>
            <Divider sx={{ marginBottom: "1rem" }} />
            <Box mb={3} sx={{ position: "relative", padding: "1rem 1rem" }}>
              <TimeRemaining />
            </Box>
            {infoData.map((item) => {
              return <InfoCard key={item.text1} item={item} />;
            })}

            <Typography
              sx={{
                fontSize: "clamp(.8rem, -0.875rem + 8.333vw, 1.3rem)",
                fontWeight: 600,
                color: "grey.800",
                padding: "1rem 1rem",
              }}
            >
              Select Ticket
            </Typography>
            <Divider
              sx={{
                width: "80%",
                position: "relative",
                left: "50%",
                transform: "translate(-50%, 0)",
                marginBottom: "1rem",
              }}
            />
            {/* choose ticket type */}
            <TicketForm />
          </Grid>
        </Grid>
      </Container>
      <style jsx>{`
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
