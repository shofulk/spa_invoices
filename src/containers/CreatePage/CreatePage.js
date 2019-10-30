import React from 'react';
import HeadLine from '../../components/HeadLine/HeadLine';
import Input from '../../components/UI/Input/Input';
import TextArea from '../../components/UI/TextArea/TextArea';
import Button from '../../components/UI/Button/Button';
import history from '../../history/history';
import axios from '../../axios/axios';
import {formValidation} from '../../form/form';

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

        if(this.state.date_created === "" || this.state.date_supplied === "" || this.state.number === ""){
            history.push('/');
        }else{
            if(formValidation(this.state.number, this.state.comment)){   
                addData(this.state);
                history.push('/');
            }else{
                alert('Invalid value');
            }
        }

    }

    render(){
        return(
            <main>
                <HeadLine headline='Create Invoice'/>
                <form onSubmit={this.onSubmit} style={{background: 'white', padding: '30px'}}>
                    <div>
                        <Input dopStyle={{display: 'inline-block'}} type="text" onChange={(event) => {this.setState({number: event.target.value})}} label='Number:' value={this.state.number || ''}/>
                        <Input dopStyle={{display: 'inline-block'}}  type="date" onChange={(event) => {this.setState({date_created: event.target.value})}} label='Invoice Date:' value={this.state.date_created || ''}/>
                    </div>
                    <Input type="date" onChange={(event) => {this.setState({date_supplied: event.target.value})}} label='Supply Date:' value={this.state.date_supplied || ''}/>
                    <TextArea label='Comment: ' onChange={(event) => {this.setState({comment: event.target.value})}} value={this.state.comment || ''}/>
                    <Button dopStyle={{marginLeft: '90%'}} onClick={this.onClick} text='Save'/>
                </form>
            </main>
            );
    }
}

export default CreatePage;