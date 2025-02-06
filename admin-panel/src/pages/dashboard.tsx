import { Card, CardContent, Typography, Box } from "@mui/material";
import dataProvider from "../dataProvider";
import { useEffect, useState } from "react";

const Dashboard = () => {

    const [stats, setStats] = useState([
        { title: "Bhakti", value: 0 },
        { title: "Book", value: 0 },
        { title: "Temples", value: 0 },
        { title: "Avatar", value: 0 },
        { title: "God", value: 0 },
        { title: "Sloka", value: 0 },
        { title: "Granth", value: 0 },
    ]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const updatedStats = await Promise.all(stats.map(async (stat) => {
                    const result = await dataProvider.getList(stat.title, { 
                        pagination: { page: 1, perPage: 10 }, 
                        sort: { field: "id", order: "ASC" } 
                    });
                    return { ...stat, value: result.total };
                }));

                setStats(updatedStats);
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        fetchStats();
    }, []);


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
