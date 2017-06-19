import React, {PropTypes} from 'react';
require("./css/todoItem.css");

class TodoItem extends React.Component{
    render() {
        return(
            <li>
                <div className = "todo-item">
                    <span className = "item-name"> {this.props.item.todo} </span>
                    <span className = "item-delete" onClick = {this.handleDelete}>x</span>
                </div>
            </li>
        );
    }


    handleDelete = () => {
        this.props.onDelete(this.props.item);
    }

}

TodoItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.object
}


export default TodoItem;
