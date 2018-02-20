import React, { Component } from 'react';
import MobilePaymentOperator from '../MobilePaymentOperator';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';
import { Grid } from 'semantic-ui-react';

import { operatorsRequest } from '../../actions/operatorsActions';

class MobilePaymentOperatorsGrid extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
    } //constructor

    componentDidMount = () => {
        this._isMounted = true;
        if (!this.props.operators.isFetched && this._isMounted) {
            this.props.operatorsRequest();
        }
    };

    componentWillUnmount = () => {
        this._isMounted = false;
    };

    handleClickOnOperator = value => {
        console.log('operator+++++');
        console.log(value);
        console.log('operator+++++');
    };

    render() {
        const { isFetching, operators } = this.props;

        return (
            <div className="MobileOperatorsList">
                {isFetching ? (
                    <div>
                        <Grid centered columns={2}>
                            <Grid.Column>
                                <Spinner size="64px" color="#66BEF2" gap={5} />
                            </Grid.Column>
                        </Grid>
                    </div>
                ) : (
                    <div>
                        {operators.operators.map(operator => (
                            <MobilePaymentOperator
                                key={operator.index}
                                operator={operator}
                                onSelectedOperatorClick={
                                    this.handleClickOnOperator
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.operatorsFromAPI.isFetching,
    operators: state.operatorsFromAPI
});

const mapDispatchToProps = {
    operatorsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(
    MobilePaymentOperatorsGrid
);
