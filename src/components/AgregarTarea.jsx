import React from "react";
import { useState } from "react";
import { Container, FormControl, Switch } from "@mui/material";
import { Margin } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const AgregarTarea = ({ lista }) => {
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    lista(tarea);
    setTarea("");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
      sm={6}
      md={12}
      lg={6}
    >
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 5 }}>
          <TextField
            type="text"
            label="Agregar Tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            inputProps={{ maxLength: 30 }}
          />
          <Button
            variant="contained"
            sx={{ mt: 1, ml: 5, mr: 5, alignItems: "center" }}
            type="submit"
          >
            Agregar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};
