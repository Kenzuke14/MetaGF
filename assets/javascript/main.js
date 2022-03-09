

//Intro animation waypoints
var intro_a1 = new Waypoint({ element: document.getElementById('sheep-1'), handler: function() {document.getElementById('sheep-1').classList.add("sp-animate");document.getElementById('intro-banner').classList.add("animate-banner")}, offset: 700 })
//var intro_a1 = new Waypoint({ element: document.getElementById('intro-banner'), handler: function() {document.getElementById('intro-banner').classList.add("animate-banner")}, offset: 700 })



// Roadmap animation waypoints
var wp_p1 = new Waypoint({ element: document.getElementById('phase-1'), handler: function() {document.getElementById('phase-1').classList.add("animate-roadmap")}, offset: 900 })
var wp_p2 = new Waypoint({ element: document.getElementById('phase-2'), handler: function() {document.getElementById('phase-2').classList.add("animate-roadmap")}, offset: 900 })
var wp_p3 = new Waypoint({ element: document.getElementById('phase-3'), handler: function() {document.getElementById('phase-3').classList.add("animate-roadmap")}, offset: 900 })
var wp_p4 = new Waypoint({ element: document.getElementById('phase-4'), handler: function() {document.getElementById('phase-4').classList.add("animate-roadmap")}, offset: 900 })
var wp_p5 = new Waypoint({ element: document.getElementById('phase-5'), handler: function() {document.getElementById('phase-5').classList.add("animate-roadmap")}, offset: 900 })



/// Mint button/area togglle
var btn = document.getElementById('mint-expand-btn');
var el = document.getElementById('mint-expand')

  btn.onclick = () => el.classList.toggle('active');
