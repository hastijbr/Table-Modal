import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faLongArrowAltUp,
  faSearchDollar,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { isOpenDetails } from "../../Redux/Action/DetailsModalAction";

/***Skeleton***/

const SkeletonLoading = () => {
  let skeletonArray = [];
  for (let i = 0; i < 8; i++) {
    skeletonArray.push(
      <tr>
        <td className="tokenName">
          <Skeleton />
        </td>
        <td className="price">
          <Skeleton />
        </td>
        <td className="change">
          <Skeleton />
        </td>
        <td className="price">
          <Skeleton />
        </td>
      </tr>
    );
  }
};

const OneRowAppearance = (props) => {
    const dispatch = useDispatch();
  return (
    <>
      <tr id={props.id}>
        <td className="tokenName">
          <div className="d-flex align-items-center">
            <div className="symbol symbol-45px me-2">
              <div>
                {/* <i class="fab fa-bitcoin bitCoin"></i> */}
                <img src={props.icon} />
              </div>
            </div>
            <div className="d-flex justify-content-start flex-row">
              <span className="text-white fw-bolder text-hover-primary fs-6">
                {props.tokenName}
              </span>
              <span className="text-muted fw-bolder text-hover-primary px-2">
                {props.tokenNameSpan}
              </span>
            </div>
          </div>
        </td>
        <td className="price">
          <div className="d-flex align-items-center">
            <div className="d-flex justify-content-start flex-row">
              <span className="text-light fw-bolder text-hover-primary fs-6">
                ${props.price}
              </span>
            </div>
          </div>
        </td>
        <td className="change">
          <div className="d-flex align-items-center">
            <div className="d-flex justify-content-start flex-row">
              <span className="px-2">
                <FontAwesomeIcon
                  icon={faLongArrowAltUp}
                  size="xl"
                  style={{ color: "green" }}
                />
              </span>
              <span
                className="fw-bolder text-hover-primary"
                style={{ color: "green", fontSize: "18px" }}
              >
                {props.change}%
              </span>
            </div>
          </div>
        </td>
        <td className="icons">
          <div className="d-flex align-items-center">
            <div className="d-flex justify-content-between flex-row p-2">
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faEye}
                    size="lg"
                    style={{ color: "#9b9bf5", cursor: "pointer" }}
                    onClick={() => {
                        dispatch(isOpenDetails())
                    }}
                  />
                </span>
              </div>
              <span className="px-2" style={{ color: "white" }}>
                |
              </span>
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    size="lg"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

function TableComponent() {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function handleSearch(e) {
    setSearchKey(e.target.value);
    setPage(1);
  }

  const getData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData([
        {
          id: "1",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Bitcoin",
          tokenNameSpan: "BTC",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "2",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Ethereum",
          tokenNameSpan: "ETH",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "3",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Dogecoin",
          tokenNameSpan: "DOGE",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "4",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Chainlink",
          tokenNameSpan: "LINK",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "5",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Litecoin",
          tokenNameSpan: "LTC",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "6",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Thether",
          tokenNameSpan: "USDT",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "7",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Cardano",
          tokenNameSpan: "ADA",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "8",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Tron",
          tokenNameSpan: "TRX",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "9",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Bitcoin",
          tokenNameSpan: "BTC",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "10",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Ethereum",
          tokenNameSpan: "ETH",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "11",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Dogecoin",
          tokenNameSpan: "DOGE",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "12",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Chainlink",
          tokenNameSpan: "LINK",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "13",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Litecoin",
          tokenNameSpan: "LTC",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "14",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Thether",
          tokenNameSpan: "USDT",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "15",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Cardano",
          tokenNameSpan: "ADA",
          price: "43,997,02",
          change: "5.43",
        },
        {
          id: "16",
          icon: "../../Assests/Images/Bitcoin.png",
          tokenName: "Tron",
          tokenNameSpan: "TRX",
          price: "43,997,02",
          change: "5.43",
        },
      ]);
      setIsLoading(false);
    }, 4000);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="TableComponent">
      <div className='card-header border-0 pt-3  d-flex justify-content-between" TableComponent__header'>
        <div className="card-toolbar TableComponent__header-toolbarBtn">
          <div
            id="reportSearchbar"
            className="TableComponent__header-toolbarBtn-search"
          >
            <input type="text" onChange={handleSearch} />
            <FontAwesomeIcon icon={faSearchDollar} size="lg" />
          </div>
        </div>
      </div>
      <div className="card-body py-3 TableComponent__body">
        <div className="table-responsive">
          <div className="contentData">
            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
              <thead className="fw-bolder text-muted">
                <th>Token Name</th>
                <th>Price</th>
                <th>24th Change</th>
                <th>Action</th>
              </thead>
              <tbody>
                {isLoading ? (
                  <CircularProgress style={{marginTop:"45%", marginLeft:"140%"}}/>
                ) : (
                  data.map((crypto, i) => {
                    return (
                      <OneRowAppearance
                        key={i}
                        id={crypto.id}
                        icon={crypto.icon}
                        tokenName={crypto.tokenName}
                        tokenNameSpan={crypto.tokenNameSpan}
                        price={crypto.price}
                        change={crypto.change}
                      />
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
