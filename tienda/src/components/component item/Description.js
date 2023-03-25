const Description = (props) =>{
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>
            <div className="description">
                <span className="descriptionTitle">Descripcion: </span> 
                <p className="text">
                    {props.paragraph}
                </p>
            </div> 

            <span className="cant">
                Cantidad: {props.cant}
            </span>
            <span className="price">
                ${props.prices}
            </span>
        </div>
    );
}

export default Description;