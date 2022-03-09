import React from 'react';
import pic from './files/01.jpg';
import './Petitions.css';

function Petition()
{
  return(
    <div className='petition'>

      <div className='subject'>
        <h3>subject of the petition</h3>
				<i class="material-icons">more_vert</i>
      </div>

      <div className='photos'>
        <img src={pic} alt="photo"></img>
      </div>

      <div className='progress'>
        <div class="progress-bar">100%</div>
      </div>

      <div className='actions'>
        <div class="vote">
					<i class="material-icons">check_circle</i>
					<p>vote</p>
				</div>
				<div class="more">
					<i class="material-icons">info</i>
					<p>info</p>
				</div>
				<div class="share">
					<i class="material-icons">share</i>
					<p>share</p>
				</div>
      </div>

      <div className='info'>
        <h4>subject</h4>
				<p>description of petition description of petition description of petition</p>
      </div>

    </div>
  )
}

function PetitionsContainer()
{
  return(
    <div className='petitions'>
      <Petition />
    </div>
  )
}

export default function Petitions()
{
  return(
    <PetitionsContainer />
  )
}
