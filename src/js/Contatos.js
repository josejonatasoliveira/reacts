import React, { Component } from 'react';
import $ from 'jquery';
import '../css/contatos.css'

const Contatos = () => {
    return (
        <div className="social-container-wrap">
            <h1 style="color:#ddd;">Socialise With Me</h1>
            <br /><br /><br />
            <div className="social-container">
                <a href="https://twitter.com/HTERCUMANP" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100008152065270" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="http://plus.google.com/111320383727376607540/" className="googleplus"><i className="fa fa-google-plus"></i></a>
                <a href="https://tr.pinterest.com/harunpehlivan/" className="pinterest"><i className="fa fa-pinterest"></i></a>
                <a href="https://codepen.io/harunpehlivan" className="codepen"><i className="fa fa-codepen"></i></a>
                <a href="https://dribbble.com/harunpehlivan" className="dribbble"><i className="fa fa-dribbble"></i></a>
                <a href="https://www.instagram.com/harunpehlivantebimtebitagem/" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/harun-pehlivan-0aa34252/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.udemy.com/user/harunpehlivan2" className="envelope"><i className="fa fa-graduation-cap"></i></a>

            </div>
            );
}
export default Contatos;

        $(".twitter").hover(function () {$(".social-container-wrap").toggleClass("color-twitter")});
        $(".facebook").hover(function () {$(".social-container-wrap").toggleClass("color-facebook")});
        $(".googleplus").hover(function () {$(".social-container-wrap").toggleClass("color-googleplus")});
        $(".pinterest").hover(function () {$(".social-container-wrap").toggleClass("color-pinterest")});
        $(".dribbble").hover(function () {$(".social-container-wrap").toggleClass("color-dribbble")});
        $(".instagram").hover(function () {$(".social-container-wrap").toggleClass("color-instagram")});
        $(".codepen").hover(function () {$(".social-container-wrap").toggleClass("color-codepen")});
        $(".envelope").hover(function () {$(".social-container-wrap").toggleClass("color-envelope")});
        $(".linkedin").hover(function () {$(".social-container-wrap").toggleClass("color-linkedin")});