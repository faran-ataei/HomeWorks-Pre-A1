export function Data({ image, cardTitle, cardDescription, url, label }) {
  return (
    <>
      <div className="card m-5">
        <img width={300} className="card-img-top" src={ !image ? "../../.learn/assets/Dylan.png?raw=true" : image } alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title"> { !cardTitle ? "Card title" : cardTitle } </h5>
          <p className="card-text">
            { !cardDescription ? "Some quick example text to build on the card title and make up the bulk of the cards content." : cardDescription }
          </p>
          <a href={ !url ? "#" : url } className="btn btn-primary">
            { !label ? "Go somewhere" : label }
          </a>
        </div>
      </div>
    </>
  );
}