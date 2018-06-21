import React from 'react';
import { graphql, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Form } from 'react-final-form';
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
import { connect } from 'react-redux';
import {
    setTitle,
    setOriginalPrice,
    setImage,
    setCondition,
    setYear,
    setCategory,
    setPrice,
    setPriceOneWeek,
    setPriceOneMonth,
    setDescription,
    setLatitude,
    setLongitude,
    setLocation,
    resetForm
} from '../../redux/modules/SubmitItem';

const options = {
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
const createItem = gql`
    mutation(
        $title: String!
        $originalPrice: String!
        $image: String!
        $condition: String!
        $year: String!
        $category: String!
        $price: String!
        $priceOneWeek: String!
        $priceOneMonth: String!
        $description: String!
        $latitude: Float!
        $longitude: Float!
    ) {
        createItem(
            title: $title
            originalPrice: $originalPrice
            image: $image
            condition: $condition
            year: $year
            category: $category
            price: $price
            priceOneWeek: $priceOneWeek
            priceOneMonth: $priceOneMonth
            description: $description
            latitude: $latitude
            longitude: $longitude
        ) {
            id
        }
    }
`;
class LendForm extends React.Component {
    updateTitle = title => {
        this.props.dispatch(setTitle(title));
    };
    updateOriginalPrice = price => {
        this.props.dispatch(setOriginalPrice(price));
    };
    updateImage = image => {
        this.props.dispatch(setImage(image));
    };
    updateCondition = condition => {
        this.props.dispatch(setCondition(condition));
    };
    updateYear = year => {
        this.props.dispatch(setYear(year));
    };
    updateCategory = category => {
        this.props.dispatch(setCategory(category));
    };
    updatePrice = price => {
        this.props.dispatch(setPrice(price));
    };
    updatePriceOneWeek = price => {
        this.props.dispatch(setPriceOneWeek(price));
    };
    updatePriceOneMonth = price => {
        this.props.dispatch(setPriceOneMonth(price));
    };
    updateDescription = description => {
        this.props.dispatch(setDescription(description));
    };
    updateLatitude = latitude => {
        this.props.dispatch(setLatitude(latitude));
    };
    updateLongitude = longitude => {
        this.props.dispatch(setLongitude(longitude));
    };

    updateLocation = location => {
        this.props.dispatch(setLocation(location));
    };
    resetForm = () => {
        this.props.dispatch(resetForm());
    };
    render() {
        const yearsData = [
            {
                value: '2018'
            },
            {
                value: '2017'
            },
            {
                value: '2016'
            }
        ];
        const conditionsData = [
            {
                value: 'Bad'
            },
            {
                value: 'Medium'
            },
            {
                value: 'Good'
            }
        ];
        const categorysData = [
            {
                value: 'Camera'
            },
            {
                value: 'Games'
            },
            {
                value: 'Apple'
            }
        ];
        return (
            <ScrollView>
                <Mutation mutation={createItem}>
                    {(addItem, { data }) => (
                        <Form
                            onSubmit={values => {
                                const newItem = {
                                    title: this.props.title,
                                    originalPrice: this.props.originalPrice,
                                    image: this.props.image,
                                    condition: this.props.condition,
                                    year: this.props.year,
                                    category: this.props.category,
                                    price: this.props.price,
                                    priceOneWeek: this.props.priceOneWeek,
                                    priceOneMonth: this.props.priceOneMonth,
                                    description: this.props.description,
                                    latitude: this.props.latitude,
                                    longitude: this.props.longitude
                                };
                                console.log(newItem);
                                addItem({ variables: newItem });
                                this.resetForm();
                            }}
                            render={({
                                handleSubmit,
                                pristine,
                                invalid,
                                values
                            }) => (
<<<<<<< HEAD
                                    <View>
                                        <Text>Item Name</Text>
                                        <TextInput
                                            onChangeText={title => {
                                                this.updateTitle(title);
                                            }}
                                            placeholder="Item"
                                        />
                                        <Dropdown
                                            label="Category"
                                            data={categorysData}
                                            onChangeText={category => {
                                                this.updateCategory(category);
                                            }}
                                        />
                                        <Dropdown
                                            label="Year Bought"
                                            data={yearsData}
                                            onChangeText={year => {
                                                this.updateYear(year);
                                            }}
                                        />
                                        <Dropdown
                                            label="Condition"
                                            data={conditionsData}
                                            onChangeText={condition => {
                                                this.updateCondition(condition);
                                            }}
                                        />
                                        <TextInput
                                            onChangeText={price => {
                                                this.updateOriginalPrice(price);
                                            }}
                                            placeholder="Original Price"
                                        />
                                        <GooglePlacesAutocomplete
                                            placeholder="Enter Location"
                                            minLength={2}
                                            autoFocus={false}
                                            returnKeyType="default"
                                            fetchDetails
                                            query={{
                                                key: GOOGLE_API_KEY,
                                                language: 'en',
                                                types: 'address'
                                            }}
                                            styles={{
                                                textInputContainer: {
                                                    backgroundColor:
                                                        'rgba(0,0,0,0)',
                                                    borderTopWidth: 0,
                                                    borderBottomWidth: 0
                                                },
                                                textInput: {
                                                    marginLeft: 0,
                                                    marginRight: 0,
                                                    height: 38,
                                                    color: '#5d5d5d',
                                                    fontSize: 16
                                                },
                                                predefinedPlacesDescription: {
                                                    color: '#1faadb'
                                                }
                                            }}
                                            onPress={(data, details = null) => {
                                                console.log(details);
                                                this.updateLongitude(details.geometry.location.lng);
                                                this.updateLatitude(details.geometry.location.lat);
                                            }}
                                            currentLocation={false}
                                        />
                                        <TextInput
                                            onChangeText={description => {
                                                this.updateDescription(description);
                                            }}
                                            placeholder="Description"
                                        />
                                        <TouchableHighlight
                                            onPress={() => {
                                                ImagePicker.showImagePicker(
                                                    options,
                                                    async response => {
=======
                                <View>
                                    <Text>Item Name</Text>
                                    <TextInput
                                        onChangeText={title => {
                                            this.updateTitle(title);
                                        }}
                                        placeholder="Item"
                                        value={this.props.title}
                                    />
                                    <Dropdown
                                        label="Category"
                                        data={categorysData}
                                        onChangeText={category => {
                                            this.updateCategory(category);
                                        }}
                                        value={this.props.category}
                                    />
                                    <Dropdown
                                        label="Year Bought"
                                        data={yearsData}
                                        onChangeText={year => {
                                            this.updateYear(year);
                                        }}
                                        value={this.props.year}
                                    />
                                    <Dropdown
                                        label="Condition"
                                        data={conditionsData}
                                        onChangeText={condition => {
                                            this.updateCondition(condition);
                                        }}
                                        value={this.props.condition}
                                    />
                                    <TextInput
                                        onChangeText={price => {
                                            this.updateOriginalPrice(price);
                                        }}
                                        placeholder="Original Price"
                                        value={this.props.originalPrice}
                                    />
                                    <GooglePlacesAutocomplete
                                        placeholder="Enter Location"
                                        minLength={2}
                                        autoFocus={false}
                                        returnKeyType="default"
                                        fetchDetails
                                        query={{
                                            key:
                                                'AIzaSyC5l4jbFsh4kmmgzwC3Y5BOXmQJJaeZaQ8',
                                            language: 'en',
                                            types: 'address'
                                        }}
                                        styles={{
                                            textInputContainer: {
                                                backgroundColor:
                                                    'rgba(0,0,0,0)',
                                                borderTopWidth: 0,
                                                borderBottomWidth: 0
                                            },
                                            textInput: {
                                                marginLeft: 0,
                                                marginRight: 0,
                                                height: 38,
                                                color: '#5d5d5d',
                                                fontSize: 16
                                            },
                                            predefinedPlacesDescription: {
                                                color: '#1faadb'
                                            }
                                        }}
                                        textInputProps={{
                                            value: this.props.location
                                        }}
                                        onPress={(data, details = null) => {
                                            console.log(details);
                                            this.updateLongitude(details.geometry.location.lng);
                                            this.updateLatitude(details.geometry.location.lat);
                                            this.updateLocation(details.formatted_address);
                                        }}
                                        currentLocation={false}
                                    />
                                    <TextInput
                                        onChangeText={description => {
                                            this.updateDescription(description);
                                        }}
                                        placeholder="Description"
                                        value={this.props.description}
                                    />
                                    <TouchableHighlight
                                        onPress={() => {
                                            ImagePicker.showImagePicker(
                                                options,
                                                async response => {
                                                    console.log(
                                                        'Response = ',
                                                        response
                                                    );
                                                    if (response.error) {
>>>>>>> message text input is now reset after submit, form values for lend form is also reset after submit
                                                        console.log(
                                                            'Response = ',
                                                            response
                                                        );
                                                        if (response.error) {
                                                            console.log(
                                                                'ImagePicker Error: ',
                                                                response.error
                                                            );
                                                        } else {
                                                            const formData = new FormData();
                                                            const data = {
                                                                uri: response.uri,
                                                                name: `${
                                                                    response.fileName
                                                                    }`,
                                                                type: 'image/jpeg'
                                                            };
                                                            formData.append(
                                                                'data',
                                                                data
                                                            );
                                                            const options = {
                                                                method: 'POST',
                                                                body: formData,
                                                                headers: {
                                                                    Accept:
                                                                        'application/json',
                                                                    'Content-Type':
                                                                        'multipart/form-data'
                                                                }
                                                            };
                                                            return fetch(
                                                                'https://api.graph.cool/file/v1/cjidp1w9z1cn30149s8454eyu',
                                                                options
                                                            )
                                                                .then(response => {
                                                                    console.log(response);
                                                                    return response.json();
                                                                })
                                                                .then(image => {
                                                                    this.updateImage(image.url);
                                                                    console.log(this.props
                                                                        .image);
                                                                    return image;
                                                                })
                                                                .catch(error =>
                                                                    console.error('Error uploading image'));
                                                        }
                                                    }
<<<<<<< HEAD
                                                );
                                            }}
                                        >
                                            <Text>Upload Image</Text>
                                        </TouchableHighlight>
                                        <TextInput
                                            onChangeText={price => {
                                                this.updatePrice(price);
                                            }}
                                            placeholder="Price One Day"
                                        />
                                        <TextInput
                                            onChangeText={price => {
                                                this.updatePriceOneWeek(price);
                                            }}
                                            placeholder="Price One Week"
                                        />

                                        <TextInput
                                            onChangeText={price => {
                                                this.updatePriceOneMonth(price);
                                            }}
                                            placeholder="Price One Month"
                                        />
                                        <TouchableOpacity
                                            disabled={invalid || pristine}
                                        >
                                            <Text onPress={handleSubmit}>
                                                Create Post
=======
                                                }
                                            );
                                        }}
                                    >
                                        <Text>Upload Image</Text>
                                    </TouchableHighlight>
                                    <TextInput
                                        onChangeText={price => {
                                            this.updatePrice(price);
                                        }}
                                        placeholder="Price One Day"
                                        value={this.props.price}
                                    />
                                    <TextInput
                                        onChangeText={price => {
                                            this.updatePriceOneWeek(price);
                                        }}
                                        placeholder="Price One Week"
                                        value={this.props.priceOneWeek}
                                    />

                                    <TextInput
                                        onChangeText={price => {
                                            this.updatePriceOneMonth(price);
                                        }}
                                        placeholder="Price One Month"
                                        value={this.props.priceOneMonth}
                                    />
                                    <TouchableOpacity
                                        disabled={invalid || pristine}
                                    >
                                        <Text onPress={handleSubmit}>
                                            Create Post
>>>>>>> message text input is now reset after submit, form values for lend form is also reset after submit
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                        />
                    )}
                </Mutation>
            </ScrollView>
        );
    }
}

export default graphql(createItem, { name: 'createItem' })(connect(state => ({
    title: state.SubmitItem.title,
    originalPrice: state.SubmitItem.originalPrice,
    image: state.SubmitItem.image,
    condition: state.SubmitItem.condition,
    year: state.SubmitItem.year,
    category: state.SubmitItem.category,
    price: state.SubmitItem.price,
    priceOneWeek: state.SubmitItem.priceOneWeek,
    priceOneMonth: state.SubmitItem.priceOneMonth,
    description: state.SubmitItem.description,
    latitude: state.SubmitItem.latitude,
    longitude: state.SubmitItem.longitude,
    location: state.SubmitItem.location
}))(LendForm));
