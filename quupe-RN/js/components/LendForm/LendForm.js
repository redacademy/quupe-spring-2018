import React from 'react';
import { graphql, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
    View,
    TextInput,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    AppRegistry,
    StyleSheet,
    Button,
    Image
} from 'react-native';
import { Form } from 'react-final-form';
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { connect } from 'react-redux';
import { ViewPager } from 'rn-viewpager';
import StepIndicator from 'react-native-step-indicator';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    setLongitude
} from '../../redux/modules/SubmitItem';
import { assetColors } from '../../assets/styles';

const PAGES = ['Page2', 'Page3'];

const firstIndicatorStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: 'blue',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'blue',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: 'blue',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'blue',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'blue',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: 'blue'
};

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
        $ownerId: ID
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
            ownerId: $ownerId
        ) {
            id
        }
    }
`;
class LendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 0
        };
    }
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
    render() {
        const currentUser =
            Array.from(this.props.token.token)[0] &&
            Array.from(this.props.token.token)[0].id;

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
                value: 'Fairly New'
            },
            {
                value: 'Fair'
            },
            {
                value: 'Worn'
            }
        ];
        const categorysData = [
            {
                value: 'Outdoor'
            },
            {
                value: 'Camera Gear'
            },
            {
                value: 'Drones'
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
                                    longitude: this.props.longitude,
                                    ownerId: currentUser
                                };
                                console.log(newItem);
                                addItem({ variables: newItem });
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
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
=======
                                <View style={styles.container}>
                                    <ViewPager
                                        scrollEnabled={false}
                                        style={{
                                            flexGrow: 1,
                                            height: 500,
                                            width: 500
                                        }}
                                        ref={viewPager => {
                                            this.viewPager = viewPager;
                                        }}
                                        onPageSelected={page => {
                                            this.setState({
                                                currentPage: page.position
                                            });
                                        }}
                                    >
                                        {PAGES.map((page, index) => {
                                            if (
                                                this.state.currentPage == index
                                            ) {
                                                if (index == 0) {
                                                    return (
                                                        <View>
                                                            <View
                                                                style={
                                                                    styles.stepIndicator
                                                                }
                                                            >
                                                                <StepIndicator
                                                                    stepCount={
                                                                        2
                                                                    }
                                                                    customStyles={
                                                                        firstIndicatorStyles
                                                                    }
                                                                    currentPosition={
                                                                        this
                                                                            .state
                                                                            .currentPage
                                                                    }
                                                                />
                                                            </View>
                                                            <Text
                                                                style={
                                                                    styles.title
                                                                }
                                                            >
                                                                What do you want
                                                                to lend today?
                                                            </Text>
                                                            <TouchableHighlight
                                                                onPress={() => {
                                                                    ImagePicker.showImagePicker(
                                                                        options,
                                                                        async response => {
                                                                            console.log(
                                                                                'Response = ',
                                                                                response
                                                                            );
                                                                            if (
                                                                                response.error
                                                                            ) {
                                                                                console.log(
                                                                                    'ImagePicker Error: ',
                                                                                    response.error
                                                                                );
                                                                            } else {
                                                                                const formData = new FormData();
                                                                                const data = {
                                                                                    uri:
                                                                                        response.uri,
                                                                                    name: `${
                                                                                        response.fileName
                                                                                    }`,
                                                                                    type:
                                                                                        'image/jpeg'
                                                                                };
                                                                                formData.append(
                                                                                    'data',
                                                                                    data
                                                                                );
                                                                                const options = {
                                                                                    method:
                                                                                        'POST',
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
                                                                                        console.log(this
                                                                                            .props
                                                                                            .image);
                                                                                        return image;
                                                                                    })
                                                                                    .catch(error =>
                                                                                        console.error('Error uploading image'));
                                                                            }
                                                                        }
                                                                    );
                                                                }}
                                                            >
                                                                <View>
                                                                    {!this.props
                                                                        .image ? (
                                                                            <Text>
                                                                            Upload
                                                                            Image
                                                                            </Text>
                                                                        ) : (
                                                                            <Image
                                                                                style={{
                                                                                    width: 50,
                                                                                    height: 50
                                                                                }}
                                                                                source={{
                                                                                    uri: `${this
                                                                                        .props
                                                                                        .image &&
                                                                                    this
                                                                                        .props
                                                                                        .image}`
                                                                                }}
                                                                            />
                                                                        )}
                                                                </View>
                                                            </TouchableHighlight>
                                                            <Text>
                                                                Item Name
                                                            </Text>
                                                            <TextInput
                                                                onChangeText={title => {
                                                                    this.updateTitle(title);
                                                                }}
                                                                placeholder="Item"
                                                                style={
                                                                    styles.textInput
                                                                }
                                                            />
                                                            <Dropdown
                                                                label="Category"
                                                                data={
                                                                    categorysData
                                                                }
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
                                                                data={
                                                                    conditionsData
                                                                }
                                                                onChangeText={condition => {
                                                                    this.updateCondition(condition);
                                                                }}
                                                            />
                                                            <TextInput
                                                                style={
                                                                    styles.textInput
                                                                }
                                                                onChangeText={price => {
                                                                    this.updateOriginalPrice(price);
                                                                }}
                                                                placeholder="Original Price"
                                                            />
                                                            <GooglePlacesAutocomplete
                                                                placeholder="Enter Location"
                                                                minLength={2}
                                                                autoFocus={
                                                                    false
                                                                }
                                                                returnKeyType="default"
                                                                fetchDetails
                                                                query={{
                                                                    key:
                                                                        'AIzaSyC5l4jbFsh4kmmgzwC3Y5BOXmQJJaeZaQ8',
                                                                    language:
                                                                        'en',
                                                                    types:
                                                                        'address'
                                                                }}
                                                                styles={{
                                                                    textInputContainer: styles.textInputContainer,
                                                                    textInput: styles.textInput,
                                                                    predefinedPlacesDescription: styles.predefinedPlacesDescription,
                                                                    listView: styles.listView
                                                                }}
                                                                onPress={(
                                                                    data,
                                                                    details = null
                                                                ) => {
                                                                    console.log(details);
                                                                    this.updateLongitude(details
                                                                        .geometry
                                                                        .location
                                                                        .lng);
                                                                    this.updateLatitude(details
                                                                        .geometry
                                                                        .location
                                                                        .lat);
                                                                }}
                                                                currentLocation={
                                                                    false
                                                                }
                                                            />
                                                            <TextInput
                                                                onChangeText={description => {
                                                                    this.updateDescription(description);
                                                                }}
                                                                placeholder="Description"
                                                            />
                                                            <Button
                                                                onPress={() => {
                                                                    this.setState({
                                                                        currentPage: 1
                                                                    });
                                                                }}
                                                                title="Next"
                                                            />
                                                        </View>
                                                    );
                                                }
                                                return (
                                                    <View>
                                                        <View
                                                            style={
                                                                styles.stepIndicator
                                                            }
                                                        >
                                                            <Ionicons
                                                                style={{}}
                                                                size={30}
                                                                name="md-arrow-back"
                                                                color="black"
                                                                onPress={() => {
                                                                    this.setState({
                                                                        currentPage: 0
                                                                    });
                                                                }}
                                                            />
                                                            <StepIndicator
                                                                stepCount="2"
                                                                customStyles={
                                                                    firstIndicatorStyles
                                                                }
                                                                currentPosition={
                                                                    this.state
                                                                        .currentPage
                                                                }
                                                            />
                                                        </View>
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
                                                            disabled={
                                                                invalid ||
                                                                pristine
                                                            }
                                                        >
                                                            <Text
                                                                onPress={
                                                                    handleSubmit
                                                                }
                                                            >
                                                                Create Post
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                );
                                            }
                                        })}
                                    </ViewPager>
                                </View>
                            )}
>>>>>>> form is now working with current user and pushes up to database
                        />
                    )}
                </Mutation>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    // textInputContainer: {
    //     backgroundColor: assetColors.white,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: 1,
    //     borderRadius: 2,
    //     borderColor: assetColors.mediumGrey,
    //     width: '95%',
    //     height: 30,
    //     paddingLeft: 10
    // },
    // textInput: {
    //     paddingLeft: 0,
    //     fontSize: 14,
    //     height: 25,
    //     color: assetColors.mediumGrey,
    //     borderWidth: 0,
    //     margin: 0,
    //     marginBottom: 5
    // },
    // predefinedPlacesDescription: {
    //     color: assetColors.mediumGrey
    // },
    listView: {
        position: 'absolute',
        backgroundColor: assetColors.white,
        width: '95%'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    stepIndicator: {
        width: 300,
        marginTop: 10
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 300
    },
    title: {
        marginTop: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
        borderRadius: 7,
        width: 300,
        marginLeft: 10
    }
});

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
    token: state.Token
}))(LendForm));
