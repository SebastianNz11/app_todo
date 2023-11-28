import { useState, useEffect } from "react";
import { TareasHechas } from "./TareasHechas";
import {
  Container,
  Paper,
  Button,
  Grid,
  Typography,
  Switch,
} from "@mui/material";

export const TareasNoHechas = ({ listaTareas, setListaTareas }) => {
  const [ver, setVer] = useState(false);

  const handleHecho = (hecho) => {
    let tareaH = listaTareas.find((t) => t.nombre === hecho);
    console.log(tareaH);
    let tareasTrue = listaTareas.map((t) =>
      t.nombre === tareaH.nombre ? { ...t, hecho: true } : t
    );
    console.log(tareasTrue);
    setListaTareas(tareasTrue);
  };

  const handleBorrar = (dato) => {
    setListaTareas(listaTareas.filter((t) => t.nombre !== dato));
  };

  const verTareas = () => {
    setVer(true);
  };

  const ocultarTareas = () => {
    setVer(false);
  };

  return (
    <Container maxWidth="lg">
      {listaTareas.length > 0 ? (
        listaTareas.every((tarea) => tarea.hecho) ? (
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
            <Typography variant="h6">
              Todas las tareas están realizadas.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={2}>
            <Container
              maxWidth="lg"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography variant="h3" sx={{ mt: 5 }}>
                Tareas por hacer
              </Typography>
            </Container>
            {listaTareas
              .filter((t) => !t.hecho)
              .map((tarea) => (
                <Grid item key={tarea.nombre} xs={12} sm={12} md={6} lg={6}>
                  <Paper
                    elevation={5}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      gap: 1,
                      overflow: "hidden",
                      mt: 5,
                      padding: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      paragraph
                      component="p"
                      sx={{ marginLeft: 2, mt: 2, mr: 1 }}
                    >
                      {tarea.nombre}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ marginLeft: 1 }}
                      onClick={() => handleHecho(tarea.nombre)}
                    >
                      Realizado
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleBorrar(tarea.nombre)}
                    >
                      Borrar
                    </Button>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        )
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
          <Typography variant="h6">No hay tareas agregadas.</Typography>
        </Paper>
      )}

      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center", mt: 5 }}
      >
        <Typography variant="body1" gutterBottom>
          {ver ? "Ocultar tareas hechas" : "Visualizar tareas hechas"}
        </Typography>
        <Switch
          checked={ver}
          onChange={ver ? ocultarTareas : verTareas}
          inputProps={{ "aria-label": "alternar" }}
        />
      </Container>

      {ver === true ? (
        <TareasHechas listaTareas={listaTareas} handleBorrar={handleBorrar} />
      ) : null}
    </Container>
  );
};
