import React from "react";
import Typography from "@material-ui/core/Typography";
import "./homeSection2.css";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import image2 from "../../assets/imgs/bg3.jpg";

export const HomeSection2 = props => {
  return (
    <div className="mainContainer">
      <div className="container2">
        <Typography className="title" component="h2" variant="h1" gutterBottom>
          ¿QUE ES ARUPACHA?
        </Typography>
        <div className="card">
          <div className="thumbnail">
            <img alt="" className="left" src={image2} />
          </div>
          <h1>ESTACIÓN AGROAMBIENTAL ARUPACHA - EAAA</h1>

          <h6>“AMOR, ANCESTRALIDAD Y SERVICIO”</h6>
          <div className="separator" />
          <section>
            <p>
              Espacio natural de reserva y conservación de especies de flora,
              fauna y sus interacciones en el área urbana del municipio de
              Quibdó – Chocó.
            </p>
            <p>
              La EAAA, Es Un espacio que ofrece servicios para la formación,
              investigación, conservación, educación ambiental con un componente
              lúdico y recreación. se localiza en la Transversal 19 No 24-256
              del Barrio jardín. Con doble vía acceso; una por la calle las
              Palmeras y otra por 19a al fondo, Quibdó - Chocó
            </p>

            <h6>Objetivo principal</h6>
            <p>
              Promover, realizar y divulgar investigaciones en el área de las
              ciencias naturales y la conservación de la flora y fauna del
              departamento del Chocó.
            </p>
          </section>

          <div className="fab">
            <Fab variant="extended" aria-label="Delete">
              Leer más... &nbsp;
              <Icon>chrome_reader_mode</Icon>
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
};
