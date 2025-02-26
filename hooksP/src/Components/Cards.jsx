function Cards({products}){

    return(
        <div className=" ">
            <div className="border ">
                <h1>{products.title}</h1>
                <p>{products.description}</p>
            </div>
        </div>
    )
}

export default Cards;