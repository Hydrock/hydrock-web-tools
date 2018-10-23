import React from 'react';

export default class DecodeBase64 extends React.Component {
    constructor() {
        super();
        this.myRef_1 = React.createRef();
        this.myRef_2 = React.createRef();
    }

    decodeData = () => {
        const value = this.myRef_1.current.value;
        const result = window.atob(value);

        this.myRef_2.current.value = result;
    }


    encodeData = () => {
        const value = this.myRef_1.current.value;
        const result = window.btoa(value);

        this.myRef_2.current.value = result;
    }

    render () {
        return (
            <div className="DecodeBase64">
                <p>
                    DecodeBase64
                </p>
                <div>
                    <p>
                        Вставьте исходные данные (base64 строку для декодирования, или строку для кодирования в base64)
                    </p>
                    <textarea ref={this.myRef_1} className="DecodeBase64__textarea"/>
                </div>
                <div>
                    <p>
                        Результат
                    </p>
                    <textarea ref={this.myRef_2} className="DecodeBase64__textarea" readonly={true} />
                </div>
                <div>
                    <button onClick={this.decodeData}>Decode Base 64 String</button>
                    {/* <input type="checkbox"/><label>Auto Update</label> */}
                <div>
                </div>
                    <button onClick={this.encodeData}>Encode Base 64 String</button>
                    {/* <input type="checkbox"/><label>Auto Update</label> */}
                </div>
            </div>
        )
    }
}
