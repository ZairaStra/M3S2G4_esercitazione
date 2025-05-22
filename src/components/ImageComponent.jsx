//versione con props non destrutturata

/* const ImageComponent = (props) => {
    return (
      <img src={props.imageSrc} alt={props.altText} />
    )
  }

export default ImageComponent */

//versione con props destrutturate
const ImageComponent = (imageSrc, altText) => {
  return <img src={imageSrc} alt={altText} />;
};

export default ImageComponent;
