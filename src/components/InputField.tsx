import React, { Component }  from 'react';
import './styles.css';
import { BsSearch} from 'react-icons/bs'

const InputField = () => {
  return (
    
    <div className='inputField'>
      
        
    <form className='input'>
    
        <input type="input" placeholder="Search for Item..." className="inputBox"></input>
        
        <button className='inputSubmit' type='submit'>
            <div>
              <span className='searchIcon'>
              <BsSearch/>
              </span>
            </div>
        </button>
    </form>
    </div>
    
  )
}

export default InputField