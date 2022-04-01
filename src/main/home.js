import React from "react";
import {
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import AppBar from "../component/Appbar";
import Carousel from 'react-native-snap-carousel';
import {banner,materCard} from '../assets/images/index';
const BannerCarouselImg = Dimensions.get('window').width;

const Home =()=>{
    const banners =[
        {
            img:banner
        },
        {
            img:materCard
        }
    ]
    const _renderItem = ({ item, index }) => {
        return (
            <Image source={item.img} style={{
                height: 145,
                width: "100%",
                borderRadius: 10
            }} />

        )
    }
    return(
        <View>
            <AppBar screenName={'Home'} />
            <View style={{ marginTop: 10 }}
        >
            <Carousel
                loop={true}
                data={banners}
                renderItem={_renderItem}
                sliderWidth={BannerCarouselImg}
                itemWidth={350}
                inactiveSlideScale={0.9}
                inactiveSlideOpacity={0.5}
                autoplay={true}
                autoplayDelay={3000}
                autoplayInterval={3000}
                contentContainerCustomStyle={{
                    // marginLeft: 10,
                }}
                activeSlideAlignment={'center'}
            />
            </View>
        </View>
    )
}

export default Home;