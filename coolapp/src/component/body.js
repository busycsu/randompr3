import React, {Component} from 'react'
import Text from './text.js';
import Images from './images.js';
import Videos from './videos.js';
import Table from './table.js';
import Email from './email.js';

class Body extends Component {
    render() {
        var displayContent = () => {
            switch(this.props.activetab) {
                case 0:
                    return <Text/>
                case 1:
                    return <Images />
                case 2:
                    return <Videos />
                case 3:
                    return <Table />
                case 4:
                    return <Email />
                default:
                    break;
            }
        }

        return (displayContent());
    }
}

export default Body;