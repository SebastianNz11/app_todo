import React from "react";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";

export const TareasHechas = ({ listaTareas, handleBorrar }) => {
  return (
    <Container maxWidth="lg">
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography variant="h3" sx={{ mt: 5 }}>
          Tareas Realizadas
        </Typography>
      </Container>
      {listaTareas.filter((t) => t.hecho === true).length > 0 ? (
        <Grid container spacing={2}>
          {listaTareas
            .filter((t) => t.hecho === true)
            .map((tarea) => (
              <Grid item key={tarea.nombre} xs={12} sm={12} md={6} lg={6}>
                <Paper
                  elevation={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    overflow: "hidden",
                    mt: 5,
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    paragraph
                    component="p"
                    sx={{ marginLeft: 2, mt: 2 }}
                  >
                    {tarea.nombre}
                  </Typography>

                  <Button
                    variant="contained"
                    onClick={() => handleBorrar(tarea.nombre)}
                    sx={{ mr: 1 }}
                  >
                    Borrar
                  </Button>
                </Paper>
              </Grid>
            ))}
        </Grid>
      ) : (
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            overflow: "hidden",
            mt: 5,
            padding: 2,
          }}
        >
          <Typography variant="h6">No hay tareas realizadas.</Typography>
        </Paper>
      )}
    </Container>
  );
};
