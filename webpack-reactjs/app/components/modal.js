/** @jsx React.DOM **/

var React = require('react/addons');
var Reflux = require('reflux');

var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var Modal = require('react-modal');


var appElement = document.getElementById('app');
Modal.setAppElement(appElement);
Modal.injectCSS();

var modalApp = React.createClass({
    getDefaultProps : function() {
        return {
            "firstName" : "chris",
            "lastName"  : "pitt"
        };
    },

    getInitialState: function() {
        return {
            modalIsOpen: false,
            name: ' click bollow button to change me'
        };
    },

    openModal: function() {
        this.setState({modalIsOpen: true });
    },

    closeModal: function() {
        this.setState({
            modalIsOpen: false,
            name: 'change me again after close modal',
        });
    },

    onChangeName: function() {
        this.setState({name: 'tsingson'});

    },

    render: function() {
        return (
            <div className="all">
                <button onClick={this.openModal}>Open Modal</button>
                <div>{this.state.name }</div>
                <button onClick={this.onChangeName}> change Name </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                >
                    <h2>Hello Modal</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button >the modal</button>
                    </form>
                </Modal>
            </div>
        );
    }
});

module.export = modalApp;
