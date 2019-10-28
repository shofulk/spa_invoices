import React from 'react';
import HeadLine from '../../components/HeadLine/HeadLine';
import {createControl} from '../../form/form';
import Input from '../../components/UI/Input/Input';
import TextArea from '../../components/UI/TextArea/TeaxtArea';
import Button from '../../components/UI/Button/Button';
import {Link} from 'react-router-dom';
import axios from '../../axios/axios';

function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function addData(data){
    axios.post("/invoice" ,data).then(() => alert('Invoices added')).catch((e) => {console.log(e); alert('Error')});
}

class CreatePage extends React.Component{

    state = {
        _id: '',
        date_created: '',
        date_supplied: '',
        comment: "",
        number: 0
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onClick = () => {
        this.setState({
            _id: makeid(24)
        })

        addData(this.state);

        this.setState({
            _id: '',
            date_created: '',
            date_supplied: '',
            comment: "",
            number: 0
        })
    }

    render(){
        return(
            <main>
                <HeadLine headline='Create Invoice'/>
                <form onSubmit={this.onSubmit}>
                    <Input type="number" required onChange={(event) => {this.setState({number: +event.target.value})}} label='Number:' value={this.state.number}/>
                    <Input type="date" required onChange={(event) => {this.setState({date_created: event.target.value})}} label='Invoice Date:'/>
                    <Input type="date" required onChange={(event) => {this.setState({date_supplied: event.target.value})}} label='Supply Date:'/>
                    <TextArea onChange={(event) => {this.setState({comment: event.target.value})}}/>
                    <Button onClick={this.onClick}><Link to="/">Save</Link></Button>
                </form>
            </main>
            );
    }
}

export default CreatePage;