import React, { Component } from 'react';
import $ from 'jquery';
import {transitionEnd} from 'jquery';
import '../css/style.css'
import Particles from 'react-particles-js';


export default class Carousel extends Component {
    render() {
        return (
            <div className="body container" style={{ "margin-top": "40px" }}>
                <div className="slider-container" id="slider-container">
                    <div className="slider-outer clearfix" id="slider-outer">
                        <div className="slide clearfix">
                            <div className="slide-thump"><img src="https://d1gkntzr8mxq7s.cloudfront.net/fe_5af1a94127bb7.png" />
                                <div className="overlay"></div>
                            </div>
                            <div className="slide-details">
                                <div className="header">
                                    <h2>Aperiri Sapientem</h2>
                                </div>
                                <p>Nam ante est euismod id consequat eget congue et lacus Sed consequat laoreet purus efficitur semper turpis pretium vitae.</p>
                                <button>VER DETALHES</button>
                            </div>
                        </div>
                        <div className="slide clearfix">
                            <div className="slide-thump"><img src="https://d1gkntzr8mxq7s.cloudfront.net/fe_5aaa8899ea6b3.png" />
                                <div className="overlay"></div>
                            </div>
                            <div className="slide-details">
                                <div className="header">
                                    <h2>Erant Aperiri<span className="top"></span><span className="bottom"></span><span className="left-border"></span></h2>
                                </div>
                                <p>congue et lacus Sed consequat laoreet purus efficitur semper turpis pretium vitae Nam ante est euismod id consequat eget.</p>
                                <button>VER DETALHES</button>
                            </div>
                        </div>
                        <div className="slide clearfix">
                            <div className="slide-thump"><img src="https://d1gkntzr8mxq7s.cloudfront.net/fe_5b02dedde46de.png" />
                                <div className="overlay"></div>
                            </div>
                            <div className="slide-details">
                                <div className="header">
                                    <h2>Lorem ipsum dolor sit amet<span className="top"></span><span className="bottom"></span><span className="left-border"></span></h2>
                                </div>
                                <p>Ante est, euismod id consequat eget, congue et lacus. Sed consequat laoreet purus, efficitur semper turpis pretium vitae</p>
                                <button>VER DETALHES</button>
                            </div>
                        </div>
                        <div className="slide clearfix">
                            <div className="slide-thump"><img src="https://d1gkntzr8mxq7s.cloudfront.net/fe_5af5d4c006e1a.png" />
                                <div className="overlay"></div>
                            </div>
                            <div className="slide-details">
                                <div className="header">
                                    <h2>consectetur adipiscing elit<span className="top"></span><span className="bottom"></span><span className="left-border"></span></h2>
                                </div>
                                <p>Sed finibus malesuada sem sed placerat. Sed id neque mattis dui hendrerit mattis. Etiam ultrices varius risus.</p>
                                <button>VER DETALHES</button>
                            </div>
                        </div>
                        <div className="slide clearfix">
                            <div className="slide-thump"><img src="https://d1gkntzr8mxq7s.cloudfront.net/fe_5b02e6ee45193.png" />
                                <div className="overlay"></div>
                            </div>
                            <div className="slide-details">
                                <div className="header">
                                    <h2>tempus nulla lacinia<span className="top"></span><span className="bottom"></span><span className="left-border"></span></h2>
                                </div>
                                <p>Maecenas euismod mauris pretium nibh vestibulum pellentesque. Sed porta malesuada viverra, Pellentesque egestas faucibus turpis.</p>
                                <button>VER DETALHES</button>
                            </div>
                        </div>
                        <div className="slide clearfix">
                            <div className="slide-thump"><img src="https://d1gkntzr8mxq7s.cloudfront.net/fe_5b02e7429c22f.png" />
                                <div className="overlay"></div>
                            </div>
                            <div className="slide-details">
                                <div className="header">
                                    <h2>Nam consequat felis<span className="top"></span><span className="bottom"></span><span className="left-border"></span></h2>
                                </div>
                                <p>In blandit lorem ut ante cursus pharetra Nulla ultrices, metus vehicula tristique sagittis lectus dui fermentum quam.</p>
                                <button>VER DETALHES</button>
                            </div>
                        </div>
                    </div>
                    <div className="slide-controls">
                        <div className="left">‹</div>
                        <div className="right">›</div>
                    </div>
                </div>
            </div>
        )
    };
}

window.onload = function () {
    'use strict';
    function each(e, callback) {
        var i = 0, l = e.length;
        for (; i < l; i++) {
            callback.call(e[i], i, e[i]);
        }
    }
    
    var slideDuration = 6000, // slide duration in ms
        pauseOnHover = false, // pause auto play on hover

        slideContainer = document.getElementById('slider-container'),
        slideOuter = document.getElementById('slider-outer'),
        slides = slideOuter.getElementsByClassName('slide'),
        slidesLen = slides.length,
        slidePercent = 100 / slidesLen,
        lastSlide = slidesLen - 1,
        slideLeft = document.getElementsByClassName('left')[0],
        slideRight = document.getElementsByClassName('right')[0],
        translateLen = slidePercent * -1,
        translateBy = 0,
        threshold = 1.3,
        i = 0,
        slideInterval;

    // slides outer container width in percent
    // equal to slides number * 100
    slideOuter.style.width = slidesLen * 100 + '%';

    // slide width
    each(slides, function (i, slide) {
        slide.style.width = slidePercent + '%';
    });

    //add active class to current slide
    function activeSlide() {
        each(slides, function (index, e) {
            e.classList.remove('active');
        });
        slides[i].classList.add('active');
    }
    activeSlide();
    
    function translateSlider() {
        translateBy = i * translateLen;
        slideOuter.style.transform = 'translateX('+ translateBy +'%)';
        activeSlide();
        slideOuter.removeEventListener('transitionend', transitionEnd);
        slideOuter.addEventListener('transitionend', transitionEnd);
    }
    
    function slideForward() {
        i++;
        if (i > lastSlide) {i = 0;}
        translateSlider();
    }
    
    function slideBackward() {
        i--;
        if (i < 0) {i = lastSlide;}
        translateSlider();
    }
    
    function autoSlideInterval () {
        window.clearInterval(slideInterval);
        slideInterval = window.setInterval(slideForward, slideDuration);
    }
    autoSlideInterval();
    
    // next prev controls
    function setControls(control, d) {
        control.addEventListener('click', function () {
            window.clearInterval(slideInterval);
            d === -1 ? slideBackward() : slideForward();
            autoSlideInterval();
        });
    }
    setControls(slideLeft, -1);
    setControls(slideRight, 1);
    
    if (pauseOnHover) {
        slideContainer.addEventListener('mouseover', function () {
            window.clearInterval(slideInterval);
        });
        slideContainer.addEventListener('mouseout', function () {
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
            slideOuter.style.transform = 'translate3d('+ diff +'%, 0, 0)';
        }
        slideOuter.onmousedown = function (e) {
            window.clearInterval(slideInterval);
            slideOuter.style.transition = 'all 0s ease';
            startPoint = e.pageX;
            slideOuter.addEventListener('mousemove', mouseMoveFunction);
        };
        slideOuter.onmouseup = function (e) {
            slideOuter.removeEventListener('mousemove', mouseMoveFunction);
            slideOuter.style.transition = '';
            if (movedLength >= threshold) {
                slideBackward();
            }
            else if (movedLength < -threshold ) {
                slideForward();
            }
            else {
                slideOuter.style.transform = 'translate3d('+translateBy+'%, 0, 0)';
            }
            autoSlideInterval();
        };
    }
    swipeSlide();
};