import { Select } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "./SelectComponent.scss";
const { Option } = Select;

export default function SelectComponent(props) {
  const  [color,setColor]=useState(false);
    const onFocus=(e)=>{
        setColor(true)
    }
    const onBlur=(e)=>{
        setColor(false)
    }

  return (
    <>
      <div className="continent">
        <label className={ color? "change" : "initial" }>{props.label}</label>
        <Select
          placeholder="Entrer"
          style={{ width: 120 }}
          onChange={props.handleProvinceChange}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {props.Data.map((province, index) => (
            <Option key={index} value={province.name}>
              {province.name}
            </Option>
          ))}
        </Select>
      </div>
    </>
  );
}
