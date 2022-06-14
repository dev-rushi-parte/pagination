import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import CityRow from "./components/CityRow";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [currentpage, setCurrentpage] = useState(0);
  const [pageLimit] = useState(10);
const [refresh,setRefresh]=useState(null);

  const sorting = () => {
    data.sort((a, b) => (a.population > b.population) ? 1 : -1)

  setRefresh(Math.random(50));
  }

  const prev = () => {
    if (currentpage > 0) {

      pagination((currentpage - 1), pageLimit, -1)
    }


  }
  const next = () => {

    pagination((currentpage + 1), pageLimit, 1)




  }

  React.useEffect(() => {

    pagination(1, 10, 1)

  }, [])


  const pagination = async (s, e, i) => {
    try {
      return await axios

        .get(`https://json-server-mocker-masai.herokuapp.com/cities?_page=${s}&_limit=${e}}`).then((res) => {
          // console.log(res.data)
          setData(res.data)
          setCurrentpage(currentpage + i)
        })
    }
    catch (e) {
      console.log("Something went wrong!")
    }

  }



  return (
    <div className="App">
      {/* <div id="loading-container"></div> */}
      <table>
        <tr>
          <th>
            ID
          </th>
          <th>
            CITY NAME
          </th>
          <th>
            COUNTRY NAME
          </th>
          <th>
            POPULATION
          </th>
        </tr>
        {/* 
            create rows for countries

          */}
        {data.map((item) => {
          return (

            <CityRow key={item.id} {...item} />



          )
        })}


      </table>

      <div>
        <ButtonComponent onClick={sorting} id="SORT_BUTTON" title={`Sort by Increasing Population`} />
        <ButtonComponent disabled={currentpage === 0} onClick={prev} title="PREV" id="PREV" />
        <ButtonComponent onClick={next} id="NEXT" title="NEXT" />
      </div>
    </div>
  );
}
