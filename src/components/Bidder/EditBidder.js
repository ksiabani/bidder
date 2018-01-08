import React, {PropTypes} from 'react';
import BidderForm from './BidderForm';

export class EditBidder extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            bidder: Object.assign({}, props.bidder),
            errors: {},
            saving: false
        };
        this.updateBidderState = this.updateBidderState.bind(this);
        this.saveBidder = this.saveBidder.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.bidder.id !== nextProps.bidder.id) {
    //         //Necessary to populate form when existing bidder is loaded directly
    //         this.setState({bidder: Object.assign({}, nextProps.bidder)});
    //     }
    // }

    updateBidderState(event) {
        const field = event.target.name;
        let bidder = Object.assign({}, this.state.bidder);
        bidder[field] = event.target.value;
        return this.setState({bidder: bidder});
    }

    bidderFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.bidder.title.length < 5) {
            errors.title = 'Title must be at least 5 characters';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    saveBidder(event) {
        event.preventDefault();

        if (!this.bidderFormIsValid()) {
            return;
        }

        this.setState({saving: true});
        this.props.actions.saveBidder(this.state.bidder)
            .then(() => this.redirect())
            .catch(error => {
                this.setState({saving: false});
            });
    }

    redirect() {
        this.setState({saving: false});
        this.context.router.push('/bidders');
    }

    render() {
        return (
            <BidderForm
                onChange={this.updateBidderState}
                onSave={this.saveBidder}
                bidder={this.state.bidder}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

EditBidder.propTypes = {
    // bidder: PropTypes.object.isRequired,
};

// Pull in the React Router context so router is available on this.context.router
// Note by the author: I'm declaring this prop as optional to avoid a linting warning when testing this component
// in an upcoming module. Behavior isn't impacted
EditBidder.contextTypes = {
    // router: PropTypes.object
};

function getBidderById(bidders, id) {
    const bidder = bidders.filter(bidder => bidder.id == id);
    if (bidder.length) return bidder[0]; //since filter return an array, have to grab the first.
    return null;
}


export default EditBidder;