import React from 'react';
import { connect } from 'react-redux';

import { Button, MessageInputField } from '../Components/index';
import { getBotMessage } from '../../store/actions/index';

export class ChatMessageInput extends React.Component{
  constructor(props){
    super(props);

    this.inputFieldRef = React.createRef();
  }

  handleButtonClick = (event) => {
    const inputFieldValue = this.inputFieldRef.current.value;

    if (inputFieldValue){
      this.props.actions.getBotMessage(inputFieldValue);
    }
    this.inputFieldRef.current.value = '';
  }

  render(){
    return (
      <div className="chat-input-container">
        <MessageInputField inputRef={this.inputFieldRef}/>
        <Button onClick={this.handleButtonClick}>Send</Button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    ...state,
  };
};

const mapDispatchToProps = function(dispatch) {
  const dispatchActions = {
    getBotMessage: function(message) {
      dispatch(getBotMessage(message));
    },
  };

  return {
    actions: dispatchActions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageInput);
