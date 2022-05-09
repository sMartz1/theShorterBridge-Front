import React from 'react';
import './index.scss';
import AddLinkForm from '../Forms/AddLinkForm';
import Background from '../Background';

export default function Landpage() {
  return (
    <div className="landpage-container">
    <h1 className='landpage-title'>The<br/>Shorter<br/>Bridge</h1> 
    <h3 className='landpage-subtitle'>Tu acortador de links</h3> 
    <AddLinkForm />
    <Background />
    </div>
  )
}   
