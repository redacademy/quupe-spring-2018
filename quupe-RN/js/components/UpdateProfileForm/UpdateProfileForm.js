import React, { Component } from 'react';
import { graphql, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
    View,
    TextInput,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {
    setFullname,
    setBio,
    setEmail,
    setImage
} from '../../redux/modules/updateProfile';
import { Form } from 'react-final-form';
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';

const options = {
     storageOptions: {
         skipBackup: true,
         path: 'images'
     }
 };
const updateUser = gql`
    mutation(
        $fullname: String!
        $bio: String!
        $email: String!
        $profileimage: String!
    ) {
        updateUser(
            fullname: $fullname
            bio: $bio
            profileimage: $profileimage
        ) {
            id
        }
    }
`;
class BioForm extends Component {
    updateFullname = fullname => {
        this.props.dispatch(setFullname(fullname));
    };
    updateBio = bio => {
        this.props.dispatch(setBio(bio));
    };
    updateProfileImage = image => {
        this.props.dispatch(setImage(image));
    };
    updateEmail = email => {
        this.props.dispatch(setEmail(email));
    };
    render() {
        return (
            <ScrollView>
                <Mutation mutation={updateUser}>
                    {(updateUser, { data }) => (
                        <Form
                            onSubmit={values => {
                                const newProfile = {
                                    fullname: this.props.fullname,
                                    profileimage: this.props.profileimage,
                                    bio: this.props.bio,
                                    email: this.props.email
                                };
                                console.log(newProfile);
                                updateUser({ variables: newProfile });
                            }}
                            render={({
                                handleSubmit,
                                pristine,
                                invalid,
                                values
                            }) => (
                                <View>
                                    <Text>Full name</Text>
                                    <TextInput
                                        onChangeText={fullname => {
                                            this.updateFullname(fullname);
                                        }}
                                        placeholder="Name"
                                    />
                                    <Text>
                                        Life Story (keep it in 200 words or
                                        less!)
                                    </Text>
                                    <TextInput
                                        onChangeText={bio => {
                                            this.updateBio(bio);
                                        }}
                                        placeholder="Tell us about yourself!"
                                    />
                                    <Text>Notification Email</Text>
                                    <TextInput
                                        onChangeText={email => {
                                            this.updateEmail(email);
                                        }}
                                        placeholder="Email"
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
                                                                this.updateProfileImage(image.url);
                                                                console.log(this.props
                                                                    .profileimage);
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

                                    <TouchableOpacity
                                        disabled={invalid || pristine}
                                    >
                                        <Text onPress={handleSubmit}>
                                            Update Profile
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
export default graphql(updateUser, { name: 'updateUser' })(connect(state => ({
    title: state.updateProfile.fullname,
    bio: state.updateProfile.bio,
    profileimage: state.updateProfile.profileimage,
    email: state.updateProfile.email
}))(BioForm));
