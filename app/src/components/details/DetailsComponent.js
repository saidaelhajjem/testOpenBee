
import './DetailsComponent.scss';
export default function DetailsComponent(props) {
  return (
    <>
      <div className="blocdetails">
        <img className="image"  src={props.superObj.flag} alt=" Countrie" />
        <div className="blcInfo">
          <div className="info">
            <h3>Capital :</h3>
            <p>{props.superObj.capital}</p>
          </div>
          <div className="info">
            <h3>Population :</h3>
            <p>{props.superObj.population}</p>
          </div>
          <div className="info">
            <h3>Devise :</h3>
            <p>{props.superObj.currencies[0].name}</p>
          </div>
          <div className="info">
            <h3>Langue :</h3>
            <p>{props.superObj.languages[0].name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
