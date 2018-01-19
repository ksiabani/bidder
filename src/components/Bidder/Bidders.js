import React from 'react';
import BidderList from './BidderList';
import Loader from '../Loader/Loader';
import './Bidders.css';
import Api from '../../api';

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
                <i className="icon design_code x3 bidders__icon"/>
                <div className="bidders__breadcrumbs">
                    <span></span>
                    <div>View your bidders</div>
                    <span></span>
                </div>
                <div className="bidders__cols">
                    {isLoading && <Loader />}
                    {!isLoading && <BidderList name={"1. Submitted"} state={"CREATED"} bidders={bidders}/>}
                    {!isLoading && <BidderList name={"2. Live"} state={"LIVE"} bidders={bidders}/>}
                </div>
            </div>
        );
    }
}

export default Bidders;