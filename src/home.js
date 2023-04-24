import React from "react";
import "./home.css"
import Product from "./product"
import styled from "@emotion/styled";

const Home = ()=>{
    return(
        <div className="Home">
            <div className="Home-container">
                <img className="home-img" src ="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61s5QLgMYGL._SX3000_.jpg"/>
           

            <div className="Product-detail">
                <Product 
                title="Instant Pot Duo Plus60 9-in-1 Stainless Steel Multi-Functional Outer Lid Pressure Cooker, 6 Qt | CAMERA | WEIGHING MACHINE " 
                price={129.99} 
                image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img19/OOC/Gateway/PC/XCM_Manual_1530580_2847589_5290762_379x304_en_IN._SY304_CB616354778_.jpg" 
                rating={4}/>

                <Product 
                title="Honor MagicBook 14, AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop (16GB/512GB PCIe SSD/Windows 11/Fingerprint Login/Metal Body/Backlit KB/1.38Kg), Gray, NobelM-WFQ9AHNE"
                price={299.9}
                image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                rating={4}/>

            </div>

            <div className="Product-detail">
            <Product
            title="Natural Finish Solid Sheesham Wood 6 Seater Dining Table with 6 Chairs for Home & Office | Hotel & Restaurant| Honey Finish"
            price={12.2}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71RpTYfbRiL._AC_SY200_.jpg"
            rating={3}/>

            <Product
            title="PR Furniture Sheesham Wood Study Table with Chair for Home and Office Table Work from Home Table | Study Desk | Rustic Walnut Finish"
            price={52.1}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Ulpys6xML._AC_SY200_.jpg"
            rating={4}/>

            <Product
            title="ES ESPINHO Maddison Solid Sal Wood Fabric Upholstered 3 Seater Right Hand Side Facing Modular, Sectional, Corner L Shape Sofa Set for Living Room, Teal Color"
            price={85.3}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51cf92qyyAS.jpg"
            rating={3}/>
            </div>
                
            <div className="Product-detail">
                <Product
                title="ENDEAVOUR WEAR FOR COUPLE Regular Fit Trackpants "
                price={45.23}
                image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img18/apparel/wave3/men/postw3/GW/Brand-QC-withoutCopy-420x420-under599-7.jpg"
                rating={5}/>
                <Product
                title="HammerSmith Men Casual Shirt FOR MEN AS WELL AS FEMALE"
                price={85.22}
                image="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img18/apparel/wave3/men/postw3/GW/Brand-QC-withoutCopy-420x420-under599-4.jpg"
                rating={5}/>
            </div>
        </div>
        </div>
    )
}

export default Home;