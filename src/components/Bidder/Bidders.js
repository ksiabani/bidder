import React from 'react';
import BidderList from './BidderList';
import Loader from '../Loader/Loader';
import BidderHeader from './BidderHeader';
import Api from '../../api';
import './Bidder.css';

class Bidders extends React.Component {
    constructor(props) {
        super(props);

        // Initialize state
        this.state = {
            bidders: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        // Fetch bidders and terminating loading
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
                {/*Depending on isLoading boolean, show loader or lists with bidders*/}
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
