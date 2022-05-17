import React from 'react'
import Header from './Header'

const Viewbook = () => {
    var booklist={
        "title":"wings of fire",
        "author":"200",
        "price":"APJ"
    }
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <label className='form-label'>Title:-{booklist.title}</label>

                        </div>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <label className='form-label'>Author:-{booklist.author}</label>

                        </div>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <label className='form-label'>Price:-{booklist.price}</label>

                        </div>
                    </div>

                </div>

            </div>

        </div>
        </div>
  )
}

export default Viewbook