import React from 'react'
import aboutImg from "../assests/images/aboutUs.png"

const AboutUsPage = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 bg-info rounded p-3">
          <h3>About Us</h3>
        </div>
      </div>
      <div className="row align-items-center pt-1">
        <div className="col-md-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis. Voluptas quaerat nesciunt numquam commodi veritatis quam dolore, minima iusto provident dolores voluptatibus, ab itaque nulla quos ipsam debitis quo porro accusamus. Cum quibusdam quod ipsam quidem architecto esse eum praesentium accusantium alias quas voluptatum ad laudantium, sit facere sunt dolores impedit totam aut consectetur maxime placeat mollitia numquam deleniti nemo. Magnam, quas! Harum quasi doloribus ex temporibus veritatis distinctio dolores quae facilis? Et atque unde quisquam cum sunt enim fugit, omnis incidunt. Autem ut, voluptatum doloribus suscipit ipsam sed dolorem sequi earum necessitatibus iure id magnam repudiandae debitis. Sapiente.
        </div>
        <div className="col-md-5 text-center">
          <img src={aboutImg} alt="aboutImg" className='img-fluid about-img' />
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage;
