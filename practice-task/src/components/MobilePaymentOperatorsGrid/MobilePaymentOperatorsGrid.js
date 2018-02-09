import React, { Component } from 'react';
import MobilePaymentOperator from '../MobilePaymentOperator';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';
import { Grid } from 'semantic-ui-react';

import { operatorsRequest } from '../../actions/operatorsActions';

class MobilePaymentOperatorsGrid extends Component {
    constructor(props) {
        super(props);

        this.props.operatorsRequest();
    } //constructor

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
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.operators.isFetching,
    operators: state.operators
});

const mapDispatchToProps = {
    operatorsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(
    MobilePaymentOperatorsGrid
);
