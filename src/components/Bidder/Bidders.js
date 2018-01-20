import React from 'react';
import BidderList from './BidderList';
import Loader from '../Loader/Loader';
import BidderHeader from './BidderHeader';
import Api from '../../api';
import './Bidder.css';

class Bidders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bidders: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        Api.all().then(data => {
            this.setState({
                bidders: data,
                isLoading: false
            });
        })
    }

    render() {
        const {bidders, isLoading} = this.state;
        return (
            <div className="bidders" data-testid="bidders">
                <BidderHeader />
                <div className="bidders-cols">
                    {isLoading && <Loader />}
                    {!isLoading && <BidderList name={"1. Submitted"} state={"CREATED"} bidders={bidders}/>}
                    {!isLoading && <BidderList name={"2. Live"} state={"LIVE"} bidders={bidders}/>}
                </div>
            </div>
        );
    }
}

export default Bidders;