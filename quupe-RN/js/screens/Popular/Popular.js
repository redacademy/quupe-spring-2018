import React from 'react';
import { View, Text, SectionList, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Popular = props => (
    <SectionList
        renderItem={({ index, section }) => {
            if (index % 2 !== 0) return null;
            const items = [];
            for (let i = index; i < index + 2; i++) {
                if (i >= section.data.length) {
                    break;
                }
                items.push(<TouchableOpacity
                    onPress={() =>
                        props.nav.navigate('Item', {
                            itemData: section.data[i]
                        })
                    }
                    style={styles.itemImageButton}
                    key={section.data[i].id}
                >
                    <Image
                        source={{ uri: section.data[i].image }}
                        style={styles.itemImage}
                    />
                </TouchableOpacity>);
            }
            return <View style={styles.sectionList}>{items}</View>;
        }}
        renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.categoryHeader}>{title}</Text>
        )}
        sections={props.popularData}
        keyExtractor={(item, index) => item + index}
        renderSectionFooter={({ section: { title } }) => (
            <TouchableOpacity
                onPress={() =>
                    props.nav.navigate('Category', { category: title })
                }
                style={styles.showMoreButton}
            >
                <Text style={styles.showMoreText}>Show More</Text>
            </TouchableOpacity>
        )}
        numColumns={2}
    />
);

Popular.propTypes = {
    nav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    popularData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Popular;
