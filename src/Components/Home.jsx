import React from 'react';

function Home({img =[]}) {
    return (
      <div className="Home">
        <div className='cont'>
                {
                    img.map((img) => {
                        const {title, image, photographer} = image;
                         return (
                            <div key={img.id}>
                             
                            </div>
                        )
                    })
                }
        </div>
   
      </div>
    );
  }
  
  export default Home;
  