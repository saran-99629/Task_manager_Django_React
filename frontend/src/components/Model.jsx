import React, { Component} from "react";

import {
    Buttton,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';

class CustomModal extends Component{
    constructor(props){
        super(props);
        this.state={
            activeItem: this.props.activeItem
        };
    }
    //To check if the checkbox is checked or not
    handleChange = e=> {
        let {name, value} = e.target;
        if(e.target.type === "checkbox"){
            value = e.target.checked;
        }
        const activeItem = {...this.state.activeItem, [name]: value};
        this.setState({activeItem})
    };

    render(){
        const{ toggle , onSave} = this.props;
        return(
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Task Item</ModalHeader>
                <ModalBody>
                    <form >
                        {/* {Title} */}
                        <FormGroup>
                            <Label for="title">Tittle</Label>
                            <Input type="text" name="title"
                            value={this.state.activeItem.title}
                            onChange={this.handleChange}
                            placeholder="Enter Task title"></Input>

                        </FormGroup>
                        {/* {2 description label} */}
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="text" name="description"
                            value={this.state.activeItem.description}
                            onChange={this.handleChange}
                            placeholder="Enter Task Description"></Input>

                        </FormGroup>
                        <FormGroup>
                            <Label for="completed">
                            <Input type="checkbox" name="completed"
                            checked={this.state.activeItem.completed}
                            onChange={this.handleChange}
                            >Completed</Input>
                            </Label>

                        </FormGroup>

                    </form>
                </ModalBody>

                <ModalFooter>
                    <button color="sucess" onclick={() => onSave(this.state.activeItem)}>
                        Save
                    </button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default CustomModal;
