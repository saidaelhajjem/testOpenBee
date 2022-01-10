
import { useState } from "react";
import "./CountrieView.scss";
import { countriesService } from "../../_services/countrieService";
import SelectComponent from "../../components/select/SelectComponent";
import DetailsComponent from "../../components/details/DetailsComponent";

/* const provinceData = ["Africa", "Americas", "Asia", "Europe", "Oceania"]; */
const provinceData = [
  { id: 0, name: "Africa" },
  { id: 1, name: "Americas" },
  { id: 2, name: "Asia" },
  { id: 3, name: "Europe" },
  { id: 4, name: "Oceania" },
];

export default function CountrieView() {
  const [countries, setCountries] = useState();
  const [update, setUpdated] = useState(false);
  const [pays, setPays] = useState(false);
  const [details, setDetails] = useState();

  const get_countries = (data) => {
    countriesService.get_countries(data).then((response) => {
      setCountries(response);
      setUpdated(true);
    });
  };

  const handleProvinceChange = (value) => {
    get_countries(value);
  };

  const handlePaysChange = (value) => {
    countries.find(element => {if(element.name=== value){
      return setDetails(element);
    }
    });
    setPays(true);
  };
  return (
    <>
      <h1 className="title">Informations sur pays</h1>
      <div className="global">
        <SelectComponent label="contenant"  handleProvinceChange={handleProvinceChange}  Data={provinceData}/>
        {update ? (
          <SelectComponent label="pays"  handleProvinceChange={handlePaysChange}  Data={countries}/>
        ) : null}
      </div>
      {pays ? <DetailsComponent superObj={details} /> : null}
    </>
  );
}
