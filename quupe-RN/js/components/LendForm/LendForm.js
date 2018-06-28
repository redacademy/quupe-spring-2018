import React from "react";
import { graphql, Mutation } from "react-apollo";
import gql from "graphql-tag";
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
} from "react-native";
import { Form } from "react-final-form";
import ImagePicker from "react-native-image-picker";
import { Dropdown } from "react-native-material-dropdown";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { connect } from "react-redux";
import { ViewPager } from "rn-viewpager";
import Overlay from "react-native-modal-overlay";
import StepIndicator from "react-native-step-indicator";
import Ionicons from "react-native-vector-icons/Ionicons";
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
  resetForm,
  setFocus,
  setBlur
} from "../../redux/modules/SubmitItem";
import { displayMessageOverlay } from "../../redux/modules/BorrowItem";
import { assetColors, assetTypography } from "../../assets/styles";

const PAGES = ["Page2", "Page3"];
const firstIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: assetColors.darkBlue,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: assetColors.darkBlue,
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: assetColors.darkBlue,
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: assetColors.darkBlue,
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: assetColors.darkBlue,
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "blue"
};
const options = {
  storageOptions: {
    skipBackup: true,
    path: "images"
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
  updateLocation = location => {
    this.props.dispatch(setLocation(location));
  };
  resetForm = () => {
    this.props.dispatch(resetForm());
  };
  updateFocus = () => {
    this.props.dispatch(setFocus());
  };
  updateBlur = () => {
    this.props.dispatch(setBlur());
  };
  render() {
    const currentUser =
      Array.from(this.props.token.token)[0] &&
      Array.from(this.props.token.token)[0].id;

    const yearsData = [
      {
        value: "2018"
      },
      {
        value: "2017"
      },
      {
        value: "2016"
      }
    ];
    const conditionsData = [
      {
        value: "Fairly New"
      },
      {
        value: "Fair"
      },
      {
        value: "Worn"
      }
    ];
    const categorysData = [
      {
        value: "Outdoor"
      },
      {
        value: "Camera Gear"
      },
      {
        value: "Drones"
      },
      {
        value: "Household"
      },
      {
        value: "Gardening"
      },
      {
        value: "Electronics"
      },
      {
        value: "Camping"
      },
      {
        value: "Sports"
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
                addItem({ variables: newItem });
                console.log(newItem)
              }}
              render={({ handleSubmit, pristine, invalid, values }) => (
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
                      if (this.state.currentPage == index) {
                        if (index == 0) {
                          return (
                              <View key={index}>
                            <ScrollView>
                              <View style={styles.stepIndicator}>
                                <StepIndicator
                                  stepCount={2}
                                  customStyles={firstIndicatorStyles}
                                  currentPosition={this.state.currentPage}
                                />
                              </View>
                              <Text style={styles.title}>
                                What do you want to lend today?
                              </Text>
                              <TouchableHighlight
                                onPress={() => {
                                  ImagePicker.showImagePicker(
                                    options,
                                    async response => {
                                      console.log("Response = ", response);
                                      if (response.error) {
                                        console.log(
                                          "ImagePicker Error: ",
                                          response.error
                                        );
                                      } else {
                                        const formData = new FormData();
                                        const data = {
                                          uri: response.uri,
                                          name: `${response.fileName}`,
                                          type: "image/jpeg"
                                        };
                                        formData.append("data", data);
                                        const options = {
                                          method: "POST",
                                          body: formData,
                                          headers: {
                                            Accept: "application/json",
                                            "Content-Type":
                                              "multipart/form-data"
                                          }
                                        };
                                        return fetch(
                                          "https://api.graph.cool/file/v1/cjidp1w9z1cn30149s8454eyu",
                                          options
                                        )
                                          .then(response => {
                                            console.log(response);
                                            return response.json();
                                          })
                                          .then(image => {
                                            this.updateImage(image.url);
                                            console.log(this.props.image);
                                            return image;
                                          })
                                          .catch(error =>
                                            console.error(
                                              "Error uploading image"
                                            )
                                          );
                                      }
                                    }
                                  );
                                }}
                              >
                                <View>
                                  {!this.props.image ? (
                                    <Image
                                      style={{
                                        height: 150,
                                        width: "65%"
                                      }}
                                      source={require("../../assets/images/uploadimage.png")}
                                    />
                                  ) : (
                                    <Image
                                      style={{
                                        height: 150,
                                        width: "65%"
                                      }}
                                      source={{
                                        uri: `${this.props.image &&
                                          this.props.image}`
                                      }}
                                    />
                                  )}
                                </View>
                              </TouchableHighlight>
                              <View style={{ marginLeft: 10 }}>
                                <Text>Item Name</Text>
                                <TextInput
                                  value={this.props.title}
                                  onChangeText={title => {
                                    this.updateTitle(title);
                                  }}
                                  style={styles.textInput}
                                />
                                <Dropdown
                                  value={this.props.category}
                                  containerStyle={{
                                    marginTop: 20,
                                    width: 300,
                                    backgroundColor: assetColors.mediumBlue,
                                    height: 41,
                                    borderRadius: 7
                                  }}
                                  labelHeight={5}
                                  selectedItemColor={assetColors.darkGrey}
                                  dropdownPosition={-4.5}
                                  baseColor={assetColors.darkGrey}
                                  label="Category"
                                  data={categorysData}
                                  onChangeText={category => {
                                    this.updateCategory(category);
                                  }}
                                />
                                <Dropdown
                                  value={this.props.year}
                                  containerStyle={{
                                    marginTop: 20,
                                    width: 300,
                                    backgroundColor: assetColors.mediumBlue,
                                    height: 41,
                                    borderRadius: 7
                                  }}
                                  labelHeight={5}
                                  selectedItemColor={assetColors.darkGrey}
                                  dropdownPosition={-3.5}
                                  baseColor={assetColors.darkGrey}
                                  label="Year Bought"
                                  data={yearsData}
                                  onChangeText={year => {
                                    this.updateYear(year);
                                  }}
                                />
                                <Dropdown
                                  value={this.props.condition}
                                  containerStyle={{
                                    marginTop: 20,
                                    width: 300,
                                    backgroundColor: assetColors.mediumBlue,
                                    height: 41,
                                    borderRadius: 7,
                                    marginBottom: 20
                                  }}
                                  labelHeight={5}
                                  selectedItemColor={assetColors.darkGrey}
                                  dropdownPosition={-3.5}
                                  baseColor={assetColors.darkGrey}
                                  label="Condition"
                                  data={conditionsData}
                                  onChangeText={condition => {
                                    this.updateCondition(condition);
                                  }}
                                />
                                <Text>Original Price</Text>
                                <TextInput
                                  style={styles.textInput}
                                  onChangeText={price => {
                                    this.updateOriginalPrice(price);
                                  }}
                                  value={this.props.originalPrice}
                                />
                                <View style={{ marginLeft: -8 }}>
                                  <GooglePlacesAutocomplete
                                    textInputProps={{
                                      value: this.props.location
                                    }}
                                    placeholder="Enter Location"
                                    minLength={2}
                                    autoFocus={false}
                                    returnKeyType="default"
                                    fetchDetails
                                    query={{
                                      key:
                                        "AIzaSyC5l4jbFsh4kmmgzwC3Y5BOXmQJJaeZaQ8",
                                      language: "en",
                                      types: "address"
                                    }}
                                    styles={{
                                      // backgroundColor:"red"
                                      textInputContainer: {
                                        marginTop: 10,
                                        backgroundColor: "white",
                                        borderTopWidth: 0,
                                        borderBottomWidth: 0,
                                        width: 316.5
                                      },
                                      textInput: {
                                        height: 41,
                                        borderWidth: 1,
                                        borderColor: assetColors.darkBlue,
                                        borderRadius: 7
                                      }
                                    }}
                                    onPress={(data, details = null) => {
                                      this.updateLongitude(
                                        details.geometry.location.lng
                                      );
                                      this.updateLatitude(
                                        details.geometry.location.lat
                                      );
                                      this.updateLocation(
                                        details.formatted_address
                                      );
                                    }}
                                    currentLocation={false}
                                  />
                                </View>
                                <Text style={{ marginTop: 20 }}>
                                  Description
                                </Text>
                                <TextInput
                                  style={{
                                    height: 150,

                                    width: 300,
                                    borderColor: assetColors.darkBlue,
                                    borderWidth: 1,
                                    borderRadius: 7
                                  }}
                                  multiline={true}
                                  numberOfLines={4}
                                  onChangeText={description => {
                                    this.updateDescription(description);
                                  }}
                                />
                              </View>

                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({
                                    currentPage: 1
                                  });
                                }}
                                style={{
                                  backgroundColor: assetColors.darkBlue,
                                  height: 40,
                                  marginBottom: 80,
                                  marginTop: 20,
                                  width: 60,
                                  borderRadius: 7,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginLeft: 250
                                }}
                              >
                                <Text style={{ color: assetColors.white }}>
                                  Next
                                </Text>
                              </TouchableOpacity>
                            </ScrollView>
                            </View>
                          );
                        }
                        return (
                            <View key={index}>
                          <ScrollView>
                            <Ionicons
                              style={{ position: "absolute", top: 10 }}
                              size={30}
                              name="md-arrow-back"
                              color="black"
                              onPress={() => {
                                this.setState({
                                  currentPage: 0
                                });
                              }}
                            />

                            <View style={styles.stepIndicator2}>
                              <StepIndicator
                                stepCount={2}
                                customStyles={firstIndicatorStyles}
                                currentPosition={this.state.currentPage}
                              />
                            </View>

                            <Image
                              style={{
                                height: 150,
                                width: "65%"
                              }}
                              source={{
                                uri: `${this.props.image && this.props.image}`
                              }}
                            />
                            <View style={{ marginLeft: 10 }}>
                              <Text>Market Price</Text>
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: 300
                                }}
                              >
                                <View
                                  style={{
                                    borderRadius: 6,
                                    borderWidth: 1,
                                    borderColor: assetColors.darkBlue,
                                    width: 85,
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center"
                                  }}
                                >
                                  <TextInput
                                    onChangeText={price => {
                                      this.updatePrice(price);
                                    }}
                                    value={`${this.props.price}`}
                                    placeholder="$"
                                  />
                                  <Text style={{ fontSize: 8 }}>$ per day</Text>
                                </View>
                                <View
                                  style={{
                                    borderRadius: 6,
                                    borderWidth: 1,
                                    borderColor: assetColors.darkBlue,
                                    width: 85,
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center"
                                  }}
                                >
                                  <TextInput
                                    onChangeText={price => {
                                      this.updatePriceOneWeek(price);
                                    }}
                                    value={`${this.props.priceOneWeek}`}
                                    placeholder="$"
                                  />
                                  <Text style={{ fontSize: 8 }}>$ per week</Text>
                                </View>
                                <View
                                  style={{
                                    borderRadius: 6,
                                    borderWidth: 1,
                                    borderColor: assetColors.darkBlue,
                                    width: 85,
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center"
                                  }}
                                >
                                  <TextInput
                                    onChangeText={price => {
                                      this.updatePriceOneMonth(price);
                                    }}
                                    value={`${this.props.priceOneMonth}`}
                                    placeholder="$"
                                  />
                                  <Text style={{ fontSize: 8 }}>$ per month</Text>
                                </View>
                              </View>
                              <Text style={{ marginTop: 20 }}>Description</Text>
                              <TextInput
                                style={{
                                  height: 150,
                                  width: 300,
                                  borderColor: assetColors.darkBlue,
                                  borderWidth: 1,
                                  borderRadius: 7
                                }}
                                multiline={true}
                                numberOfLines={4}
                                onChangeText={description => {
                                  this.updateDescription(description);
                                }}
                                value={this.props.description}
                              />
                            </View>
                            <TouchableOpacity
                              disabled={invalid || pristine}
                              style={{
                                backgroundColor: assetColors.darkBlue,
                                height: 40,
                                marginBottom: 80,
                                marginTop: 20,
                                width: 60,
                                borderRadius: 7,
                                alignItems: "center",
                                justifyContent: "center",
                                width: "60%",
                                marginLeft: 10
                              }}
                            >
                              >
                              <Text
                                onPress={() => {
                                  handleSubmit()
                                  this.props.dispatch(displayMessageOverlay());
                                }}
                                style={{ color: assetColors.white }}
                              >
                                Confirm
                              </Text>
                              <Overlay
                                visible={this.props.modal.messageOverlay}
                                animationType="zoomIn"
                                containerStyle={styles.overlay}
                                animationDuration={500}
                              >
                                <View >
                                  <Text style={{ marginTop:60,fontSize: 13,color:assetColors.darkBlue,textAlign:"center" }}>
                                    You've just re-quupe on your investment!
                                  </Text>
                                  <Text style={{ marginTop:13, fontSize: 15,textAlign:"center" }}>
                                    Thank you for sharing, 
                                    <View style={{marginTop:-10}}>
                                    <Image
                                      style={{
                                        height: 30,
                                        width: 50,
                                        alignItems:"center"
                                      }}
                                      source={require("../../assets/images/qp_blue_org.png")}
                                      
                                    /> 
                                    </View>will notify you
                                    once the item has been verified and updated
                                    to the list
                                  </Text>
                                  <View style={{marginTop:13,flexDirection:"row", justifyContent:"space-between"}}>
                                  <TouchableOpacity 
                                  onPress={() => {
                                    this.props.navigation.navigate("Lend");
                                    this.resetForm();
                                    this.props.dispatch(
                                      displayMessageOverlay()
                                    );
                                    this.setState({
                                      currentPage: 0
                                    });
                                  }}
                                  style={{      
                                  backgroundColor: assetColors.darkBlue,
                                  height: 40,
                                  width: 110,
                                  borderRadius: 7,
                                  alignItems: "center",
                                  justifyContent: "center",}}>
                                    <Text style={{color:assetColors.white}}>Lend more</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                   style={{      
                                    borderColor:assetColors.darkBlue,
                                    borderWidth:1,
                                    height: 40,
                                    width: 110,
                                    borderRadius: 7,
                                    alignItems: "center",
                                    justifyContent: "center",}}
                                    onPress={() => {
                                      this.props.navigation.navigate("Home");
                                      this.resetForm();
                                      this.props.dispatch(
                                        displayMessageOverlay()
                                      );
                                      this.setState({
                                        currentPage: 0
                                      });
                                    }}
                                  >
                                    <Text style={{color:assetColors.darkBlue}}>Go back home</Text>
                                  </TouchableOpacity>
                                  </View>
                                </View>
                              </Overlay>
                            </TouchableOpacity>
                          </ScrollView>
                          </View>
                        );
                      }
                    })}
                  </ViewPager>
                </View>
              )}
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
    position: "absolute",
    backgroundColor: assetColors.white,
    width: "95%"
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  stepIndicator: {
    width: 300,
    marginTop: 10,
    marginLeft: 10
  },
  stepIndicator2: {
    width: 300,
    marginLeft: 10,
    marginTop: 10
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: 300
  },
  title: {
    marginTop: 20,
    marginLeft: 50,
    fontFamily: assetTypography.title,
    fontSize: 15,
    marginBottom: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: assetColors.darkBlue,
    padding: 10,
    borderRadius: 7,
    width: 300
  },
  dropdownInput: {
    borderWidth: 1,
    borderColor: "blue",
    paddingTop: 17,
    paddingBottom: 17,
    borderRadius: 7
  },
  overlay: {
    backgroundColor: "white",
    marginTop: 120,
    marginBottom: 120,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: assetColors.darkBlue,
    justifyContent: "flex-start",
    padding: 0
  }
  // googleInput: {
  //     borderWidth: 1,
  //     borderColor: assetColors.darkBlue,
  //     paddingTop: 15,
  //     paddingBottom: 15,
  //     borderRadius: 7,
  //     height:41
  // },
});

export default graphql(createItem, { name: "createItem" })(
  connect(state => ({
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
    location: state.SubmitItem.location,
    token: state.Token,
    modal: state.BorrowItem
  }))(LendForm)
);
