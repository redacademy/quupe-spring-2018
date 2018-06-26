import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  Stylesheet,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const Category = () => {
  return (
    <View style={styles.contentLayout}>
      <TouchableOpacity style={styles.categoryButton}>
        <ImageBackground
          imageStyle={{ borderRadius: 7.5 }}
          source={require('../../assets/images/category/outdoor-img.jpeg')}
          style={styles.categoryImage}
        >
          <Text style={styles.categoryText}>Outdoor</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity>
        <ImageBackground
          imageStyle={{ borderRadius: 7.5 }}
          source={require('../../assets/images/category/drones-img.jpeg')}
          style={styles.categoryImage}
        >
          <Text style={styles.categoryText}>Drones</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity>
        <ImageBackground
          imageStyle={{ borderRadius: 7.5 }}
          source={require('../../assets/images/category/gardening-img.jpeg')}
          style={styles.categoryImage}
        >
          <Text style={styles.categoryText}>Gardening</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity>
        <ImageBackground
          imageStyle={{ borderRadius: 7.5 }}
          source={require('../../assets/images/category/camping-img.jpeg')}
          style={styles.categoryImage}
        >
          <Text style={styles.categoryText}>Camping</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity>
        <ImageBackground
          imageStyle={{ borderRadius: 7.5 }}
          source={require('../../assets/images/category/camera-gear-img.jpeg')}
          style={styles.categoryImage}
        >
          <Text style={styles.categoryText}>Camera Gear</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity>
        <ImageBackground
          imageStyle={{ borderRadius: 7.5 }}
          source={require('../../assets/images/category/household-img.jpeg')}
          style={styles.categoryImage}
        >
          <Text style={styles.categoryText}>Household</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity>
        <ImageBackground
          imageStyle={{ borderRadius: 7.5 }}
          source={require('../../assets/images/category/electronics-img.jpeg')}
          style={styles.categoryImage}
        >
          <Text style={styles.categoryText}>Electronics</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity>
        <ImageBackground
          imageStyle={{ borderRadius: 7.5 }}
          source={require('../../assets/images/category/sports-img.jpeg')}
          style={styles.categoryImage}
        >
          <Text style={styles.categoryText}>Sports</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
