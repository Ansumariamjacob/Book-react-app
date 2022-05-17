import React from 'react'
import Header from './Header'

const Viewbook = () => {
    var booklist=[{
        "title":"wings of fire",
        "author":"APJ",
        "price":"200",
         "image":"https://rukminim2.flixcart.com/image/416/416/juk4gi80/book/4/6/6/wings-of-fire-original-imaffmk4gx5pxqvf.jpeg?q=70"},
        {"title":"Half girlfriend",
         "author":"Chetan B",
        "price":"300",
       "image":"https://m.media-amazon.com/images/I/51jHMdGd14L.jpg"},
        {
            "title":"Last lecture",
            "author":"ansu",
            "price":"1000",
            "image":"https://cdn.shopify.com/s/files/1/0554/9185/4380/products/THELASTLECTURE_BooksTech_1800x1800.jpg?v=1646984735"
        }
    
    ]
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                         {booklist.map((value,key)=>
                         {
                           return <div className='col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                           <div class="card" >
                           <img src={value.image} class="card-img-top" alt={value.image}/>
                           <div class="card-body">
                             <h5 class="card-title">{value.title}</h5>
                             <p class="card-text">Author:-{value.author}</p>
                             <a href="#" class="btn btn-primary">Buy</a>
                           </div></div>
                         </div>

                        

                         })}
                        
                    </div>

                </div>

            </div>

        </div>
        </div>
  )
}

export default Viewbook