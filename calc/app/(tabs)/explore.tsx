import React from "react";
import Card from "../../components/Card";
import { FlatList, View } from "react-native";
import cardData from "@/interface/cardData";
import { ScrollView } from "react-native-gesture-handler";
let data=cardData;
export default function ExploreApp() {

  return (
    <>
    <ScrollView >
{/* 
    {
      
      data.map((item)=>( 
        <Card
        title={item.title}
        productName={item.productName}
        
        oldPrice={item.oldPrice}
        finalPrice={item.finalPrice}
        url={item.url}
        />
      ) 
    )    } */}


{/*     
    <FlatList 
    data={cardData}
    renderItem={({item}) => (
      <Card
      title={item.title}
      productName={item.productName}
      
      oldPrice={item.oldPrice}
      finalPrice={item.finalPrice}
      url={item.url}
      />
    )}
    numColumns={4}

    /> */}


    
    </ScrollView>
    </>
  );
}
