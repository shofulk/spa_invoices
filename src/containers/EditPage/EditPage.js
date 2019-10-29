import React from 'react';
import axios from '../../axios/axios';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import TextArea from '../../components/UI/TextArea/TeaxtArea';
import history from '../../history/history';

class EditPage extends React.Component{

    state={

    }

    async fetchDataIncoive(id){
        let response = await axios.get(`/invoice/${id}`);

        console.log(response.data);

        this.setState({
            number: response.data.number, 
            date_created: response.data.date_created,
            date_supplied: response.data.date_supplied,
            comment: response.data.comment
        })
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        this.fetchDataIncoive(this.props.match.params.id);
        
    }

    onClickEdit = async () => {
        if(window.confirm('Are you sure what need edit this invoice?')){
            await axios.put(`/invoice/${this.props.match.params.id}`, this.state).then(() => alert('All right'));
        }
        history.push('/');
    }

    onClickDelete = async () => {
        if(window.confirm('Are you sure what need delete this invoice?')){
            await axios.delete(`/invoice/${this.props.match.params.id}`, this.state).then(() => alert('All right'));
        }
        history.push('/');
    }

    render(){
        console.log(this.state)
        return(
            <main>
                <form>
                    <Input value={this.state.number || ''} type='text' label="Number: " onChange = {(event) => {this.setState({number: event.target.value})}}/>
                    <Input value={this.state.date_created || ''} label="Date Created: " type='date' onChange = {(event) => {this.setState({date_created: event.target.value})}}/>
                    <Input value={this.state.date_supplied || ''} type='date' label="Date Supply: " onChange = {(event) => {this.setState({date_supplied: event.target.value})}}/>
                    <TextArea value={this.state.comment || ''} type='text' onChange = {(event) => {this.setState({comment: event.target.value})}}/>
                    <Button text="Edit" onClick={this.onClickEdit}/>
                    <Button text="Delete" onClick={this.onClickDelete}/>
                </form>
            </main>);
    }

}

export default EditPage;