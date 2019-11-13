import React from 'react';
// import './App.css';
import './styles.css';
import Title from './AppTitle';
import Navbar from './Navbar';
import UsersCard from './UsersCard';
import Subsidiaries from './Subsidiaries';
import StatisticsBoxes from './StatisticsBoxes';
import Location from './Location';
import Footer from './Footer';

function App() {
  const navbarList=['About us','Career'];
  const userCardsList=[{class:'patients',title:'For patiens',description:'Find a doctor, book a visit and solve any health-related doubt',imageSource:'https://www.docplanner.com/img/screen-marketplace@2x.png',imageClass:'patients-img',optionsID:'country-switch',options:[{name:'Argentina',link:'http://www.doctoraliar.com'},{name:'Australia',link:'http://www.doctoralia.com.au'},{name:'Brazil',link:'http://www.doctoralia.com.br'},{name:'Chile',link:'http://www.doctoralia.cl'},{name:'Columbia',link:'http://www.doctoralia.co'},{name:'Czech',link:'http://www.znamylekar.cz'},{name:'France',link:'http://www.doctoralia-fr.com'},{name:'Italy',link:'http://www.miodottore.it'},{name:'Mexico',link:'http://www.doctoralia.com.mx'},{name:'Peru',link:'http://www.doctoralia.pe'},{name:'Poland',link:'http://www.znanylekarz.pl'},{name:'Portugal',link:'http://www.doctoralia.com.pt'},{name:'Spain',link:'http://www.doctoralia.es'},{name:'Turkey',link:'http://www.doktortakvimi.com'},{name:'UK',link:'http://www.doctoralia.co.uk'}]},{class:'doctors',title:'For doctors',description:'Save time managing visits and cut no-shows by half',imageSource:'https://www.docplanner.com/img/screen-saas@2x.png',imageClass:'doctors-img'}];
  const subsidiariesList=[{title:'ZnanyLekarz',imageSource:'https://www.docplanner.com/img/logo.png'},{title:'Doctoralia',imageSource:'https://www.docplanner.com/img/logo.png'},{title:'MioDottore',imageSource:'https://www.docplanner.com/img/logo.png'},{title:'DoktorTakvimi',imageSource:'https://www.docplanner.com/img/logo.png'},{title:'ZnamyLekarz',imageSource:'https://www.docplanner.com/img/logo.png'}];
  const statisticsList=[{imageSource:'https://www.docplanner.com/img/flag.png',title:'Leaders in 10 countries',description:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},{imageSource:'https://www.docplanner.com/img/visits.png',title:'1.5 million appointments',description:'booked last month',specialClass:'appointment'},{imageSource:'https://www.docplanner.com/img/patients.png',title:'30 million unique patients',description:'visit us every month'},{imageSource:'https://www.docplanner.com/img/doctors.png',title:'2 million active doctors',description:'trust in our solutions',specialClass:'doctor'}];
  const locationsList=[{imageSource:'https://www.docplanner.com/images/warsaw.png',title:'Warsaw'},{imageSource:'https://www.docplanner.com/images/barcelona.png',title:'Barcelona'},{imageSource:'https://www.docplanner.com/images/istanbul.png',title:'Istanbul'},{imageSource:'https://www.docplanner.com/images/rome.png',title:'Rome'},{imageSource:'https://www.docplanner.com/images/mexico-city.png',title:'Mexico City'},{imageSource:'https://www.docplanner.com/images/curitiba.png',title:'Curitiba'}];
  return (
    <div className="app">
      <Title/>
      <header className="app-header">
        <Navbar myList={navbarList}/>
      </header>
      <div className="app-body">
        <div className="main-section">
          <div className="logo-slogan">
              <img src="https://www.docplanner.com/img/sygnet.png" alt="logo"/>
              <h1>Making the healthcare experience more human</h1>
          </div>
          <div className="patient-doctor-paragraph">
              <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere</p>
              <p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
          </div>
        </div>
        <UsersCard myList={userCardsList}/>
        <div className="subsidiaries">
                <p>We are a global <br/>company<br/> with local culture</p>
                <div className="subsidiaries-links">
                  <Subsidiaries myList={subsidiariesList}/>
                </div>
        </div>
        <div className="statistics">
          <div className="statistics-text">
              <h1>The world's<br/> biggest healthcare platform</h1>
              <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
              <img src="https://www.docplanner.com/img/logo.png"/>
          </div>
            <StatisticsBoxes myList={statisticsList}/>
        </div>
      </div>
      <div className="locations">
        <h1>Improve the lives of millions.<br/> Change yours forever</h1>
        <p>More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and<br/> Curitiba, our search for great talent never stops.</p>
        <Location myList={locationsList}/>
      </div>
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
