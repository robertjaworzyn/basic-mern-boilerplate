import React, {PropTypes} from 'react';
require("./css/addItem.css");

class AddItem extends React.Component{
    render() {
        return (
            <form id = "add-todo" onSubmit = {this.handleSubmit}>
                <input type = "text" required ref="newItem" />
                <input type = "submit" value = "SUMBIT TO ME" />
            </form>
        );
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
        this.refs.newItem.value = '';
    }

}

AddItem.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default AddItem;
