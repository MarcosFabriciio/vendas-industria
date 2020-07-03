import React from "react"
import SEO from "../components/seo"
import NavBar from '../components/Navbar/navbar.js'
import VideoSection from '../components/VideoSection/videoSection.js'
import ProblemaSection from  '../components/ProblemasSection/problemas.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'; 
import '../fonts/GothamRnd-Medium_1.otf'


const IndexPage = () => (
  <>
    <SEO title="Inicio" />
    <NavBar />
    <VideoSection />
    <ProblemaSection/>
  </>
)

export default IndexPage
