import React from 'react';
import axios from '../../axios/axios';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import TextArea from '../../components/UI/TextArea/TextArea';
import history from '../../history/history';
import HeadLine from '../../components/HeadLine/HeadLine';
import {formValidation} from '../../form/form';

class EditPage extends React.Component{

    state={
        number: '', 
        date_created: '',
        date_supplied: '',
        comment: ''
    }

    async fetchDataIncoive(id){
        await axios.get(`/invoice/${id}`).then((response) => {
            console.log(response.data);

            this.setState({
                number: response.data.number, 
                date_created: response.data.date_created,
                date_supplied: response.data.date_supplied,
                comment: response.data.comment
            })
        }).catch(() => {history.push('/')});

        
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        this.fetchDataIncoive(this.props.match.params.id);
        
    }

    onClickEdit = async () => {
        if(window.confirm('Are you sure what need edit this invoice?')){
            if(formValidation(this.state.number, this.state.comment)){
                await axios.put(`/invoice/${this.props.match.params.id}`, this.state).then(() => alert('All right'));
            }else{
                alert('Invalid value');
            }
        }
        history.push('/');
    }

    onClickDelete = async () => {
        if(window.confirm('Are you sure what need delete this invoice?')){
            await axios.delete(`/invoice/${this.props.match.params.id}`, this.state);
        }
    }

    render(){
        console.log(this.state)
        return(
            <main>
                <HeadLine headline='Edit/Delete Invoices'/>
                <Button text='Back' onClick={() => {history.push('/')}} dopStyle={{marginBottom: '15px'}}/>
                <form style={{background: 'white', padding: '30px'}}>
                    <div>
                        <Input dopStyle={{display: 'inline-block'}} value={this.state.number || ''} type='text' label="Number: " onChange = {(event) => {this.setState({number: event.target.value})}}/>
                        <Input dopStyle={{display: 'inline-block'}} value={this.state.date_created || ''} label="Date Created: " type='date' onChange = {(event) => {this.setState({date_created: event.target.value})}}/>
                    </div>
                    <Input value={this.state.date_supplied || ''} type='date' label="Date Supply: " onChange = {(event) => {this.setState({date_supplied: event.target.value})}}/>
                    <TextArea label='Comment: ' value={this.state.comment || ''} type='text' onChange = {(event) => {this.setState({comment: event.target.value})}}/>
                    <div style={{marginLeft: '67%', width: '350px'}}>
                        <Button dopStyle={{margin: '0 30px', display: 'inline-block'}} text="Edit" onClick={this.onClickEdit}/>
                        <Button dopStyle={{margin: '0 30px', display: 'inline-block'}} text="Delete" onClick={this.onClickDelete}/>
                    </div>
                </form>
            </main>);
    }

}

export default EditPage;