import React, { useContext } from "react";

import dummyData from "../utils/dummyData";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  amount,
  message,
  keyword,
  url,
}) => (
  <div
    className="flex flex-1 m-4 bg-[#181918] 
  2xl:min-w-[430px]
  2xl:max-w-[500px]
  sm:min-w-[270px]
  sm:max-w-[300px]
  flex-col
  p-3
  rounded-md
  hover:shadow-xl
"
  >
    <div className="flex flex-col items-center w-full mt-3">
      <div className="display-flex justify-start w-full mb-6 p-2">
        <a
          href={`https://ropsten.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-white text-base">
            From: {shortenAddress(addressFrom)}
          </p>
        </a>
        <a
          href={`https://ropsten.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-white text-base">
            To: {shortenAddress(addressTo)}
          </p>
        </a>
        <p className="text-white text-base">Amount: {amount} ETH</p>
        {message && (
          <>
            <br />
            <p className="text-white text-base">Message: {message}</p>
          </>
        )}
      </div>
      <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
        <p className="text-[#37c7da] font-bold">{timestamp}</p>
      </div>
    </div>
  </div>
);

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h1 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h1>
        ) : (
          <h1 className="text-white text-3xl text-center my-2">
            Connect Your Account
          </h1>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions?.map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
