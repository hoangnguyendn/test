import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            err: null
        };

        componentDidMount() {
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({err: null});
                return req;
            });
            this.resInterceptors = axios.interceptors.response.use(res => res, err => {
                    this.setState({err: err});
                }
            );
        }

        errorConfirmHandler = () => {
            this.setState({err: null})
        };

        render() {
            return (
                <Aux>
                    <Modal show={this.state.err}
                           modalClosed={this.errorConfirmHandler}>
                        {this.state.err ? this.state.err.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }

        componentWillUnmount () {
            //console.log('Will Unmount', this.reqInterceptors, this.resInterceptors);
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);

        }
    };
};

export default withErrorHandler;