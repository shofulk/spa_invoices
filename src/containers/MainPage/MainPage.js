import React from 'react';
import axios from 'axios';
import HeadLine from '../../components/HeadLine/HeadLine'
import TableSection from '../../components/TableSection/TableSection';
import Loader from '../../components/UI/Loader/Loader';
import CreateButtonSection from '../../components/CreateButtonSection/CreateButtonSection';
import history from '../../history/history';

class MainPage extends React.Component{

    state = {
        headline: ['Create', 'No', 'Supply', 'Comment'],
        data: [],
        loading: true
    }

    async getData(){
        let url = 'http://localhost:3001/invoice';
      
        let response = await axios.get(url);

        this.setState({
            data: response.data,
            loading: false
        })      
    }

    componentDidMount(){
        this.getData()
    }

    onClick = () => {
        history.push('/create');
    }

    onClickTr = (id) => {
        history.push(`/edit/${id}`);
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <HeadLine headline='Invoices'/>
                <CreateButtonSection onClick={this.onClick}/>
                {!this.state.loading ? <TableSection headline={this.state.headline} data={this.state.data} onClickTr={this.onClickTr}/> : <Loader/>}
            </div>
        );
    }
}

export default MainPage;