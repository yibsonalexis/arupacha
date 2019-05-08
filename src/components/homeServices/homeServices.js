import React from "react";
import "./homeServices.css";
import Typography from "@material-ui/core/Typography";
import image1 from "../../assets/slider/6.jpg";
import image2 from "../../assets/slider/6.jpg";

export const HomeServices = props => {
  return (
    <div className="mainContainer">
      <div className="mainContainerServices">
        <Typography className="title" component="h2" variant="h1" gutterBottom>
          SERVICIOS
        </Typography>

        <div className="grid">
          <figure className="effect-sarah">
            <img src={image1} alt="img13" />
            <figcaption>
              <h2>
                Ruta <span> Ecológica Estudiantil</span>
              </h2>
              <p>
                La ruta ecológica estudiantil es un centro re creacional para la
                enseñanza y aprendizaje de conocimientos tradicionales sobre el
                uso de plantas típicas de nuestra región Chocoana.
              </p>
              <a href>View more</a>
            </figcaption>
          </figure>

          <figure className="effect-sarah">
            <img src={image2} alt="img20" />
            <figcaption>
              <h2>
              Avistamiento <span> de aves</span>
              </h2>
              <p>Avistamiento de aves</p>
              <a href>View more</a>
            </figcaption>
          </figure>

          <figure className="effect-sarah">
            <img src={image1} alt="img13" />
            <figcaption>
              <h2>
                 <span>Insectario</span>
              </h2>
              <p>Sarah likes to watch clouds. She's quite depressed.</p>
              <a href>View more</a>
            </figcaption>
          </figure>


          <figure className="effect-sarah">
            <img src={image2} alt="img20" />
            <figcaption>
              <h2>
              Camping <span> vacacional</span>
              </h2>
              <p>Sarah likes to watch clouds. She's quite depressed.</p>
              <a href>View more</a>
            </figcaption>
          </figure>

          <figure className="effect-sarah">
            <img src={image2} alt="img20" />
            <figcaption>
              <h2>
              Huerta <span>  escolar</span>
              </h2>
              <p>Huerta escolar</p>
              <a href>View more</a>
            </figcaption>
          </figure>


          <figure className="effect-sarah">
            <img src={image2} alt="img20" />
            <figcaption>
              <h2>
              Prácticas <span>  de campo</span>
              </h2>
              <p>La ruta ecológica estudiantil es un centro re creacional para la
                enseñanza y aprendizaje de conocimientos tradicionales sobre el
                uso de plantas típicas de nuestra región Chocoana.</p>
              <a href>View more</a>
            </figcaption>
          </figure>

          <figure className="effect-sarah">
            <img src={image2} alt="img20" />
            <figcaption>
              <h2>
              Mi <span>  azotea</span>
              </h2>
              <p>La ruta ecológica estudiantil es un centro re creacional para la
                enseñanza y aprendizaje de conocimientos tradicionales sobre el
                uso de plantas típicas de nuestra región Chocoana.</p>
              <a href>View more</a>
            </figcaption>
          </figure>


          <figure className="effect-sarah">
            <img src={image2} alt="img20" />
            <figcaption>
              <h2>
              Museo <span>  de referencia de flora y fauna del Chocó</span>
              </h2>
              <p>El museo de referencia de flora y fauna del Chocó.</p>
              <a href>View more</a>
            </figcaption>
          </figure>

          <figure className="effect-sarah">
            <img src={image2} alt="img20" />
            <figcaption>
              <h2>
              Museo <span>  de la mina</span>
              </h2>
              <p>La ruta ecológica estudiantil es un centro re creacional para la
                enseñanza y aprendizaje de conocimientos tradicionales sobre el
                uso de plantas típicas de nuestra región Chocoana.</p>
              <a href>View more</a>
            </figcaption>
          </figure>

          <figure className="effect-sarah">
            <img src={image2} alt="img20" />
            <figcaption>
              <h2>
              Venta <span>  y clínica de plantas medicinales.</span>
              </h2>
              <p>Venta y clínica de plantas medicinales..</p>
              <a href>View more</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
