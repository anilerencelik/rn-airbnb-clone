import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles'
import CustomMarker from '../../components/CustomMarker'
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = (props) => {
  
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width
  const { posts } = props
  const flatList = useRef();
  const map = useRef();
  /*const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if(viewableItems.length > 0 ){
      const selectedPlace = viewableItems[0].item
      setSelectedPlaceId(selectedPlace.id)
    }
  });*/

  useEffect(() => {
    if(!selectedPlaceId || !flatList)
      return;
    const index = posts.findIndex(place => place.id === selectedPlaceId)
    //const index = selectedPlaceId
    flatList.current.scrollToIndex({animated:true, index:index, viewPosition:0.5})
    const selectedPlace = posts[index]
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8
    }
    map.current.animateToRegion(region)
  }, [selectedPlaceId])


  return (
    <View>
      <MapView
        ref={map}
        style={styles.container}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {posts.map(place => (
          <CustomMarker 
            key={place.id}
            coordinate={{latitude: place.latitude, longitude: place.longitude}} 
            price={place.newPrice} 
            isSelected={place.id === selectedPlaceId }
            onPress={() => setSelectedPlaceId(place.id)}  
          />
        ))}
      </MapView>


      <View style={styles.carouselContainer}>
        <FlatList 
          ref={flatList}
          data={posts}
          renderItem={({item}) => (
            <PostCarouselItem 
              post={item}
              set={setSelectedPlaceId}  
            />)}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          //viewabilityConfig={viewConfig.current}
          //onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
