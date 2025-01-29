import { Card, CardContent, Typography, Box } from "@mui/material";
import dataProvider from "../dataProvider";

const Dashboard = () => {

    const bhakti = dataProvider.getList("bhakti", 0);
    console.log(bhakti)

  const stats = [
    { title: "Bhakti", value: "10"},
    { title: "Book", value: "24"},
    { title: "Temple", value: "27"},
    { title: "Avatar", value: "54"},
    { title: "God", value: "44"},
    { title: "Sloka", value: "20"},
    { title: "Granth", value: "5"},
  ];

  return (
    <Box sx={{ p: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 1 }}>
      {stats.map((stat, index) => (
        <Card key={index} sx={{ p: 1, boxShadow: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary" fontWeight={400} ml={-1} mt={-2}>
              {stat.title}
            </Typography>
            <Typography variant="h4" fontWeight={700} mb={-2} color="success">
              {stat.value}<Typography variant="" fontWeight={100} fontSize={12} color="gray"> Total</Typography>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Dashboard;
