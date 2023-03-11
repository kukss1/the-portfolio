import { Card, CardContent, CardHeader, Avatar, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

function AnimatedCard({ children }) {
  const animation = useSpring({
    from: { transform: "translateY(100px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 100
  });

  return <animated.div style={animation}>{children}</animated.div>;
}

function User({ users }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", backgroundColor: "secondary", padding: "50px 0" }}>
      {users.map((user) => (
        <AnimatedCard key={user.id}>
          <Card sx={{ mb: 4, mr: 4, maxWidth: "300px", backgroundColor: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 30px rgba(0,0,0,.1)" }}>
            <CardHeader
              avatar={<Avatar src={user.image} alt={user.maidenName} />}
              title={`${user.firstName} ${user.lastName}`}
              subheader={`${user.age} years old`}
              sx={{ pb: 0 }}
              style={{ backgroundColor: "#fbfbfb", borderRadius: "20px 20px 0 0" }}
            />
            <CardContent sx={{ pt: 0 }}>
              <Typography variant="body1" component="h5" sx={{ mb: 2, color: "#272727" }}>
                {user.gender === "male" ? "He" : "She"} loves:
              </Typography>
              <Typography variant="body1" component="h5" sx={{ mb: 2, color: "#272727" }}>
                About {user.firstName}:
              </Typography>
              <Typography variant="body2" component="p" sx={{ color: "#8f8f8f", lineHeight: "1.5", marginBottom: "10px" }}>
                {user.birthDate}
              </Typography>
            </CardContent>
          </Card>
        </AnimatedCard>
      ))}
    </div>
  );
}

export default User;
