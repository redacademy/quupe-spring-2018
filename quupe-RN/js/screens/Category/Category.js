import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Category = props => (
    <View style={styles.contentLayout}>
        <TouchableOpacity
            style={styles.categoryButton}
            onPress={() =>
                props.nav.navigate('Category', { category: 'outdoor' })
            }
        >
            <ImageBackground
                imageStyle={{ borderRadius: 7.5 }}
                source={require('../../assets/images/category/outdoor-img.jpeg')}
                style={styles.categoryImage}
            >
                <Text style={styles.categoryText}>Outdoor</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() =>
                props.nav.navigate('Category', { category: 'drones' })
            }
        >
            <ImageBackground
                imageStyle={{ borderRadius: 7.5 }}
                source={require('../../assets/images/category/drones-img.jpeg')}
                style={styles.categoryImage}
            >
                <Text style={styles.categoryText}>Drones</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() =>
                props.nav.navigate('Category', { category: 'gardening' })
            }
        >
            <ImageBackground
                imageStyle={{ borderRadius: 7.5 }}
                source={require('../../assets/images/category/gardening-img.jpeg')}
                style={styles.categoryImage}
            >
                <Text style={styles.categoryText}>Gardening</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() =>
                props.nav.navigate('Category', { category: 'camping' })
            }
        >
            <ImageBackground
                imageStyle={{ borderRadius: 7.5 }}
                source={require('../../assets/images/category/camping-img.jpeg')}
                style={styles.categoryImage}
            >
                <Text style={styles.categoryText}>Camping</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() =>
                props.nav.navigate('Category', { category: 'camera gear' })
            }
        >
            <ImageBackground
                imageStyle={{ borderRadius: 7.5 }}
                source={require('../../assets/images/category/camera-gear-img.jpeg')}
                style={styles.categoryImage}
            >
                <Text style={styles.categoryText}>Camera Gear</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() =>
                props.nav.navigate('Category', { category: 'household' })
            }
        >
            <ImageBackground
                imageStyle={{ borderRadius: 7.5 }}
                source={require('../../assets/images/category/household-img.jpeg')}
                style={styles.categoryImage}
            >
                <Text style={styles.categoryText}>Household</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() =>
                props.nav.navigate('Category', { category: 'electronics' })
            }
        >
            <ImageBackground
                imageStyle={{ borderRadius: 7.5 }}
                source={require('../../assets/images/category/electronics-img.jpeg')}
                style={styles.categoryImage}
            >
                <Text style={styles.categoryText}>Electronics</Text>
            </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() =>
                props.nav.navigate('Category', { category: 'sports' })
            }
        >
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

Category.propTypes = {
    nav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default Category;
