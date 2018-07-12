import React, { Component } from "react";
import $ from "jquery";
import { transitionEnd } from "jquery";
import "../css/style.css";
import axios from "axios";
import Particles from "react-particles-js";
import "../css/grid.css";
import "../css/procura.css";

export default class Carousel extends Component {
  //Construtor seta o estado inicial, slides eh uma lista vazia
  constructor(props) {
    super(props);
    this.state = {
      slides: []
    };
  } //Fim do construtor

  //Faz acesso a API //a API retorna 5 comentarios
  componentDidMount() {
    //Ciclo de vida do react, executa a funcao antes do codigo
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/5/comments`)
      .then(res => {
        const slides = res.data;
        this.setState({ slides });
      });
  } //Fim do acesso a API

  render() {
    return (
      <div className="body container" style={{ "margin-top": "40px" }}>
        <div className="slider-container" id="slider-container">
          <div className="slider-outer clearfix" id="slider-outer" />
          <Slides slides={this.state.slides} />
        </div>
      </div>
    );
  }
}

//Lista de Slides
const Slides = props => {
  return (
    <div className="product-list">
      {props.slides.map(comment => {
        return <Slide name={comment.name} body={comment.body} />;
      })}
    </div>
  );
}; //Fim da lista de slides

//Slide individual
const Slide = props => {
  return (
    <div className="slide clearfix">
      <div className="slide-thump">
        <img src="https://d1gkntzr8mxq7s.cloudfront.net/fe_5af1a94127bb7.png" />
        <div className="overlay" />
      </div>
      <div className="slide-details">
        <div className="header">
          <h2>{props.name}</h2>
        </div>
        <p>{props.body}</p>
        <button style={{ "margin-top": "10px" }}>VER DETALHES</button>
      </div>
    </div>
  );
}; //Fim de cada slide

//Codigo em JavaScript
window.onload = function() {
  "use strict";
  function each(e, callback) {
    var i = 0,
      l = e.length;
    for (; i < l; i++) {
      callback.call(e[i], i, e[i]);
    }
  }

  var slideDuration = 6000, // Duracao de cada slide
    pauseOnHover = false, // pause auto play on hover
    slideContainer = document.getElementById("slider-container"),
    slideOuter = document.getElementById("slider-outer"),
    slides = slideOuter.getElementsByClassName("slide"),
    slidesLen = slides.length,
    slidePercent = 100 / slidesLen,
    lastSlide = slidesLen - 1,
    slideLeft = document.getElementsByClassName("left")[0],
    slideRight = document.getElementsByClassName("right")[0],
    translateLen = slidePercent * -1,
    translateBy = 0,
    threshold = 1.3,
    i = 0,
    slideInterval;

  // slides outer container width in percent
  // equal to slides number * 100
  slideOuter.style.width = slidesLen * 100 + "%";

  // slide width
  each(slides, function(i, slide) {
    slide.style.width = slidePercent + "%";
  });

  //add active class to current slide
  function activeSlide() {
    each(slides, function(index, e) {
      e.classList.remove("active");
    });
    slides[i].classList.add("active");
  }
  activeSlide();

  function translateSlider() {
    translateBy = i * translateLen;
    slideOuter.style.transform = "translateX(" + translateBy + "%)";
    activeSlide();
    slideOuter.removeEventListener("transitionend", transitionEnd);
    slideOuter.addEventListener("transitionend", transitionEnd);
  }

  function slideForward() {
    i++;
    if (i > lastSlide) {
      i = 0;
    }
    translateSlider();
  }

  function slideBackward() {
    i--;
    if (i < 0) {
      i = lastSlide;
    }
    translateSlider();
  }

  function autoSlideInterval() {
    window.clearInterval(slideInterval);
    slideInterval = window.setInterval(slideForward, slideDuration);
  }
  autoSlideInterval();

  // next prev controls
  function setControls(control, d) {
    control.addEventListener("click", function() {
      window.clearInterval(slideInterval);
      d === -1 ? slideBackward() : slideForward();
      autoSlideInterval();
    });
  }
  setControls(slideLeft, -1);
  setControls(slideRight, 1);

  if (pauseOnHover) {
    slideContainer.addEventListener("mouseover", function() {
      window.clearInterval(slideInterval);
    });
    slideContainer.addEventListener("mouseout", function() {
      autoSlideInterval();
    });
  }

  function swipeSlide() {
    var slideLeft = slideOuter.offsetLeft,
      // translate when movedLength pass it
      slideOuterWidth = slideOuter.clientWidth,
      startPoint,
      movedLength,
      diff;

    function mouseMoveFunction(m) {
      movedLength = (m.pageX - startPoint) / slideOuterWidth * 100;
      var diff = translateBy + movedLength;
      slideOuter.style.transform = "translate3d(" + diff + "%, 0, 0)";
    }
    slideOuter.onmousedown = function(e) {
      window.clearInterval(slideInterval);
      slideOuter.style.transition = "all 0s ease";
      startPoint = e.pageX;
      slideOuter.addEventListener("mousemove", mouseMoveFunction);
    };
    slideOuter.onmouseup = function(e) {
      slideOuter.removeEventListener("mousemove", mouseMoveFunction);
      slideOuter.style.transition = "";
      if (movedLength >= threshold) {
        slideBackward();
      } else if (movedLength < -threshold) {
        slideForward();
      } else {
        slideOuter.style.transform = "translate3d(" + translateBy + "%, 0, 0)";
      }
      autoSlideInterval();
    };
  }
  swipeSlide();
}; //Fim do codigo em JavaScript
