import React from 'react';

import vincent from 'src/assets/images/vct.png';
import manon from 'src/assets/images/mnn.png';
import axel from 'src/assets/images/axl.png';
import nico from 'src/assets/images/ncl.png';
import fidia from 'src/assets/images/fid.png';
import headphone from 'src/assets/images/headphone.png';

import './about.scss';

const About = () => (
  <div className="about">
    <div className="project">
      <h1 className="about-title">Pourquoi O'Calm ?</h1>
      <p>
        Les crottes de fromage, bien sqouick sqouick dans yeule, c'est ça le bonheur.
        Arrête de faire la
        baboune tabaslack, a va fondre la slutch.
        Il m'a même pas redonné mon ptit change, ya essayé de me crosser le câlice.
        Sa blonde m'en a sacré
        toute une au parcheesi, mais elle a été mardeuse.
        Baptême de crisse de cibole de viande à chien, j'en ai plein mon casse d'être
        toute décalissé de la
        vie, avec le windshier de mon char toute déviargé par l'autre esti de cave.
        Des patates pilées, du
        steak haché, du maïs en crème, pis kin toé, du pâté chinois.
      </p>
    </div>
    <h2 className="about-title">La team du zen</h2>
    <div className="us">
      <div className="id-card">
        <div className="picture">
          <img src={headphone} alt="headphones" className="headphones" />
          <img src={manon} alt="Manon" className="avatar" />
        </div>
        <div className="infos">
          <h2 className="name">Manon Gerray</h2>
          <h3 className="role">Scrum master</h3>
          <h4 className="spe">React</h4>
        </div>
      </div>
      <div className="id-card">
        <div className="picture">
          <img src={headphone} alt="headphones" className="headphones" />
          <img src={axel} alt="Axel" className="avatar" />
        </div>
        <div className="infos">
          <h2 className="name">Axel Cannit</h2>
          <h3 className="role">Lead dev Front</h3>
          <h4 className="spe">React</h4>
        </div>
      </div>
      <div className="id-card">
        <div className="picture">
          <img src={headphone} alt="headphones" className="headphones" />
          <img src={fidia} alt="Fidia" className="avatar" />
        </div>
        <div className="infos">
          <h2 className="name">Fidia El Bouanani</h2>
          <h3 className="role">Product Owner</h3>
          <h4 className="spe">Wordpress</h4>
        </div>
      </div>
      <div className="id-card">
        <div className="picture">
          <img src={headphone} alt="headphones" className="headphones" />
          <img src={vincent} alt="Vincent" className="avatar" />
        </div>
        <div className="infos">
          <h2 className="name">Vincent Zepharren</h2>
          <h3 className="role">Lead dev Back</h3>
          <h4 className="spe">Wordpress</h4>
        </div>
      </div>
      <div className="id-card">
        <div className="picture">
          <img src={headphone} alt="headphones" className="headphones" />
          <img src={nico} alt="Nicolas" className="avatar" />
        </div>
        <div className="infos">
          <h2 className="name">Nicolas Delisle</h2>
          <h3 className="role">Git master</h3>
          <h4 className="spe">Wordpress</h4>
        </div>
      </div>
    </div>
  </div>
);

export default About;
