import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import './Gallery.css'

const Gallery = () => {
  const images = [];
  for(let i = 1;i<=15;i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Possimus assumenda, voluptates sequi libero deserunt alias.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image,index)=>{
              return <article key={index}>
                <img src={image} alt={`Gallery phot${index + 1}`}/>
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery