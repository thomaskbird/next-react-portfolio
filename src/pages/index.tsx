import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import portfolioData from "../imports/portfolio.json";
import { addDoc } from "@firebase/firestore";
import {
  collectionPortfolio,
  queryAllPortfolioOrdered,
} from "@app/services/firebase";
import { getDocs, QuerySnapshot } from "firebase/firestore";
import { makeArrayFromSnapshot } from "@app/utils/makeNewArray";

const IndexView: NextPage = () => {
  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    const retrieveData = async () => {
      const portSnapshot: QuerySnapshot = await getDocs(
        queryAllPortfolioOrdered
      );
      const portFromDb = makeArrayFromSnapshot(portSnapshot);
      console.log("portFromDb", portFromDb);
      setItems(portFromDb);
    };

    retrieveData();
    // ReactGA.initialize('UA-40542612-8');
    // portfolioData.forEach(async (portfolio) => {
    //   const ref = await addDoc(collectionPortfolio, portfolio);
    //   console.log("ref", ref.id);
    // });
  }, []);

  return (
    <ul>
      {items.map((item: any) => (
        <li key={item.id}>
          {item.post_id} - {item.created_at} - {item.id}
        </li>
      ))}
    </ul>
  );
};

export default IndexView;
