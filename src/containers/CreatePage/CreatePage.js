import React from 'react';
import HeadLine from '../../components/HeadLine/HeadLine';
import Input from '../../components/UI/Input/Input';
import TextArea from '../../components/UI/TextArea/TeaxtArea';
import Button from '../../components/UI/Button/Button';
import history from '../../history/history';
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
        _id: makeid(24),
        date_created: '',
        date_supplied: '',
        comment: "",
        number: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onClick = () => {

        if(this.formValidation){   
            addData(this.state);
            history.push('/');
        }

    }

    formValidation = () => {

        return this.state.comment.length < 160 ? true : false;

    }

    render(){
        return(
            <main>
                <HeadLine headline='Create Invoice'/>
                <form onSubmit={this.onSubmit}>
                    <Input type="number" onChange={(event) => {this.setState({number: +event.target.value})}} label='Number:' value={this.state.number}/>
                    <Input type="date" onChange={(event) => {this.setState({date_created: event.target.value})}} label='Invoice Date:' value={this.state.date_created}/>
                    <Input type="date" onChange={(event) => {this.setState({date_supplied: event.target.value})}} label='Supply Date:' value={this.state.date_supplied}/>
                    <TextArea onChange={(event) => {this.setState({comment: event.target.value})}} value={this.state.comment}/>
                    <Button onClick={this.onClick} text='Save'/>
                </form>
            </main>
            );
    }
}

export default CreatePage;