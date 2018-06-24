import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../Components/index';
import * as actions from '../../store/actions';

export class ChatHeader extends React.Component {
  constructor(props){
    super(props);

    this.props.setDefaultValue();
  }

  render(){
    const { chatBotName, chatBotDescription } = this.props;

    return (
      <Header
        chatBotName={chatBotName}
        chatBotDescription={chatBotDescription}
      />
    );
  }
}

const mapStateToProps = function(state) {
  const chatBotName = state && state.chatBotName;
  const chatBotDescription = state && state.chatBotDescription;

  return {
    chatBotName: chatBotName,
    chatBotDescription: chatBotDescription,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    setDefaultValue: function() {
      dispatch(actions.setDefaultValue());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader);
