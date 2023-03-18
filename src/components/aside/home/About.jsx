import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";

function About() {
  const [showMoreOne, setShowMoreOne] = useState(false);
  const [showMoreTwo, setShowMoreTwo] = useState(false);

  return (
    <Container>
      <Box sx={{ mt: 4, bgcolor: "#3f51b5", color: "#fff" }}>
        <Typography variant="h3" align="center" mb={4}>
          Some Thinks
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 2, bgcolor: "#5c6bc0", color: "#fff" }}>
              <Typography variant="body1" sx={{ maxWidth: "600px" }} color="#fff">
                About World
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={() => setShowMoreOne(!showMoreOne)}>
              {showMoreOne ? "Hide" : "Read More"}
            </Button>
          </Grid>
        </Grid>
        {showMoreOne && (
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 2, bgcolor: "#5c6bc0", color: "#fff", mt: 2 }}>
                <Typography variant="body1" sx={{ maxWidth: "600px" }} color="#fff">
                The world we live in today is facing many challenges, from climate
            change to poverty and social injustice. It can be easy to feel
            overwhelmed by these issues and to believe that there is little one
            person can do to make a difference. However, the truth is that
            everyone can play a part in making the world a better place, no
            matter how small. One of the simplest ways that we can make a
            positive impact is by being kind to others. A smile, a kind word, or
            a small act of generosity can go a long way in brightening someone's
            day and spreading positivity. We can also support causes that we
            care about, whether it's by volunteering our time, donating money,
            or raising awareness. Another way to make a difference is by living
            sustainably. By reducing our carbon footprint, conserving resources,
            and making environmentally conscious choices, we can help to protect
            our planet and ensure a better future for generations to come. We
            can also strive to be more empathetic and understanding towards
            others, regardless of their backgrounds or beliefs. By listening to
            different perspectives and seeking common ground, we can foster a
            more inclusive and harmonious society. Ultimately, the key to making
            the world a better place is to recognize that our actions, however
            small, can have a ripple effect. By doing our part, we can inspire
            others to do the same and create a chain reaction of positive
            change.

                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
      <Box sx={{ mt: 8, bgcolor: "#5c6bc0", color: "#fff" }}>
        <Typography variant="h3" align="center" mb={4}>
          About Me
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 2, bgcolor: "#7986cb", color: "#fff" }}>
              <Typography variant="body1" sx={{ maxWidth: "600px" }} color="#fff">
                Front End
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={() => setShowMoreTwo(!showMoreTwo)}>
              {showMoreTwo ? "Hide" : "Read More"}
            </Button>
          </Grid>
        </Grid>
        {showMoreTwo && (
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 2, bgcolor: "#7986cb", color: "#fff", mt: 2 }}>
                <Typography variant="body1" sx={{ maxWidth: "600px" }} color="#fff">
                React developer with a passion for creating dynamic and responsive
              user interfaces. Skilled in developing high-quality web
              applications and building reusable components. Strong knowledge
              of JavaScript, HTML, and CSS. Proven ability to work
              collaboratively in cross-functional teams and deliver projects on
              time. Committed to staying up-to-date with the latest advancements
              in the React ecosystem and applying best practices to create
              performant and scalable applications.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default About;
