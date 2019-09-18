import Play from './engine/play';
import * as styles from './index.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Pacman extends React.Component<any, any> {
    constructor (props:any) {
        super(props);
    }

    render() {
        const {
            onClick
        } = this.props;
        return (
            <div className={styles.wrapper}>
                <canvas id="canvas" width="960" height="640">不支持画布</canvas>
                <p>按［空格］暂停或继续</p>
            </div>
        );
    }
}

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
ReactDOM.render(<Pacman />, appTarget);

let play = new Play();
play.run();