import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
        totalPrice: 0
    };

    componentDidMount() {
        if (typeof this.props.location.state !== "undefined") {
            this.setState({
                ingredients: this.props.location.state.ingredients,
                totalPrice: this.props.location.state.totalPrice
            })
        }
    }

    goBackBuilder = () => {
        this.props.history.push('', this.state.ingredients);
    };

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {

        return (
            <div>
                {/*{console.log(this.props.location.state.ingredients)}*/}
                <CheckoutSummary goBackBuilder={this.goBackBuilder}
                                 checkoutContinue={this.checkoutContinue}
                                 ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path + '/contact-data'}
                       component={() => <ContactData ingredients={this.state.ingredients}
                                                     totalPrice={this.state.totalPrice}/>}/>
            </div>

        );
    }
};


export default Checkout