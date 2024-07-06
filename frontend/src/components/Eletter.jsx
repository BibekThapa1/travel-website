import React from 'react'
import { IoPerson } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Eletter = () => {
  return (
    <div className='container-fluid subscribe-section mt-4 py-4'>
      <div className="row">
        <div className="px-lg-5 col-sm-12 col-lg-6">
      <h1>Subscribe Our E-Newsletter</h1>
      <p>Sign up for Deals and Discount. Get News, Notifications and Updates about the recent Events and Offers.</p>
        </div>
        <div className="px-lg-5 col-sm-12 col-lg-6 email-section">
         <form className='' onSubmit={(e)=>e.preventDefault()}>
         <div><IoPerson className='icon'/>
         <input
          type="text"
          placeholder='Your Name'
          /></div>
          <div><TfiEmail className='icon'/><input
           type="email"
            placeholder="Email Address"
          /></div>
          <button>
            Subscribe
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Eletter