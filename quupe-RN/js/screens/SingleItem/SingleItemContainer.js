import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import SingleItem from './SingleItem';

const mockItemData = {
    title: 'Ski - Woman 160cm',
    price: '12',
    priceOneWeek: '50',
    priceOneMonth: '180',
    id: 'cjifgp62s3qhb0174jbmp0oa2',
    owner: {
        fullname: 'Andrew',
        profileImage:
            'https://hips.hearstapps.com/sev.h-cdn.co/assets/16/17/1024x762/gallery-1461600984-screen-shot-2016-04-25-at-121524-pm.jpg?resize=768:*',
        id: 'cjig7qmm227kd0122oypew1ou'
    },
    image:
        'https://images-na.ssl-images-amazon.com/images/I/51XorXpUSDL._SX425_.jpg',
    category: 'Outdoor',
    year: '2017',
    condition: 'New',
    description: 'These are some cool skis',
    latitude: 40.593374,
    longitude: -111.8905171
};

const sendMessageMutation = gql`
    mutation createRoom($peopleIds: [ID!], $messages: [RoommessagesMessages!]) {
        createRoom(peopleIds: $peopleIds, messages: $messages) {
            id
            messages {
                text
            }
        }
    }
`;

class SingleItemContainer extends Component {
    constructor() {
        super();
        this.state = {
            currentTab: 'Lender Info',
            sentMessage: false
        };
    }

    changeTab(tab) {
        this.setState({ currentTab: tab });
    }

    displaySentMessage() {
        this.setState({ sentMessage: !this.state.sentMessage });
    }

    render() {
        // TODO: instead of using mock data, take item data from this.props.navigation.state.params
        return (
            <Mutation mutation={sendMessageMutation}>
                {(createRoom, { loading, error }) => (
                    <SingleItem
                        item={mockItemData}
                        changeTab={this.changeTab.bind(this)}
                        currentTab={this.state.currentTab}
                        navigation={this.props.navigation}
                        messageOverlay={this.props.messageOverlay}
                        dispatch={this.props.dispatch}
                        createRoom={createRoom}
                        loading={loading}
                        error={error}
                        currentUserId={Array.from(this.props.id)[0].id}
                        sentMessage={this.state.sentMessage}
                        displaySentMessage={this.displaySentMessage.bind(this)}
                    />
                )}
            </Mutation>
        );
    }
}

SingleItemContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    dispatch: PropTypes.func.isRequired,
    messageOverlay: PropTypes.bool.isRequired,
    id: PropTypes.objectOf(PropTypes.object).isRequired
};

export default connect(state => ({
    messageOverlay: state.BorrowItem.messageOverlay,
    id: state.Token.token
}))(SingleItemContainer);
