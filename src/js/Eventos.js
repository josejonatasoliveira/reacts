import React from "react";
import "../css/event.css";

const Eventos = () => {
  return (
    <div className="container" style={{ margin: "200px" }}>
      <div class="row">
        <div
          className="swiper-slide featured-event-box"
          style={{ margin: "20px" }}
        >
          <a
            href="https://www.sympla.com.br/farmer-friends-tour---4-edicao__310823"
            target="_blank"
          >
            <div
              className="event-image-box"
              style={{
                backgroundImage:
                  "url('//d1gkntzr8mxq7s.cloudfront.net/5b2ba28bb8cf0-xs.jpg')"
              }}
            />
            <div className="event-name">
              <p>Farmer Friends Tour - 4ª Edição</p>
            </div>
            <div className="calendar-box">
              <div className="calendar-month">Jun </div>
              <div className="calendar-day">28 </div>
            </div>
            <div className="event-local-box">
              <div className="uppercase line">
                <p>Urban Farmcy</p>
              </div>
              <div className="line">
                <i
                  className="fa fa-clock-o color-grey"
                  style={{ paddingRight: "2px" }}
                />
                13h{" "}
                <i
                  className="fa fa-map-marker color-grey"
                  style={{ padding: "0 2px 0 4px" }}
                />
                Porto Alegre, RS{" "}
              </div>
            </div>
          </a>
        </div>

        <div
          className="swiper-slide featured-event-box"
          style={{ margin: "20px" }}
        >
          <a
            href="https://www.sympla.com.br/farmer-friends-tour---4-edicao__310823"
            target="_blank"
          >
            <div
              className="event-image-box"
              style={{
                "background-image":
                  "url('//d1gkntzr8mxq7s.cloudfront.net/5b2ba28bb8cf0-xs.jpg')"
              }}
            />
            <div className="event-name">
              <p>Farmer Friends Tour - 4ª Edição</p>
            </div>
            <div className="calendar-box">
              <div className="calendar-month">Jun </div>
              <div className="calendar-day">28 </div>
            </div>
            <div className="event-local-box">
              <div className="uppercase line">
                <p>Urban Farmcy</p>
              </div>
              <div className="line">
                <i
                  className="fa fa-clock-o color-grey"
                  style={{ paddingRight: "2px" }}
                />
                13h{" "}
                <i
                  className="fa fa-map-marker color-grey"
                  style={{ padding: "40px" }}
                />
                Porto Alegre, RS{" "}
              </div>
            </div>
          </a>
        </div>

        <div
          className="swiper-slide featured-event-box"
          style={{ margin: "20px" }}
        >
          <a
            href="https://www.sympla.com.br/farmer-friends-tour---4-edicao__310823"
            target="_blank"
          >
            <div
              className="event-image-box"
              style={{
                "background-image":
                  "url('//d1gkntzr8mxq7s.cloudfront.net/5b2ba28bb8cf0-xs.jpg')"
              }}
            />
            <div className="event-name">
              <p>Farmer Friends Tour - 4ª Edição</p>
            </div>
            <div className="calendar-box">
              <div className="calendar-month">Jun </div>
              <div className="calendar-day">28 </div>
            </div>
            <div className="event-local-box">
              <div className="uppercase line">
                <p>Urban Farmcy</p>
              </div>
              <div className="line">
                <i
                  className="fa fa-clock-o color-grey"
                  style={{ paddingRight: "2px" }}
                />
                13h{" "}
                <i
                  className="fa fa-map-marker color-grey"
                  style={{ padding: "4px" }}
                />
                Porto Alegre, RS{" "}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Eventos;
