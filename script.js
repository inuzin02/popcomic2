{\rtf1\ansi\ansicpg932\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let currentSlide = 0;\
const slides = document.querySelectorAll('.slide');\
\
function showNextSlide() \{\
  slides[currentSlide].style.display = 'none';\
  currentSlide = (currentSlide + 1) % slides.length;\
  slides[currentSlide].style.display = 'block';\
\}\
\
document.getElementById('slider').addEventListener('touchend', showNextSlide);\
}