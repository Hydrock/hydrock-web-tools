import React from 'react';
import { FormattedMessage } from 'react-intl';

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
                <h4>
                    Decode / Encode Base64 String
                </h4>
                <div>
                    <p>
                        <FormattedMessage
                            id="app.page.base64.value_1"
                            defaultMessage="Вставьте исходные данные"
                            description=""
                        />
                    </p>
                </div>
                <div className="row">
                    <div className="one-half column">
                        <label>
                            <FormattedMessage
                                id="app.page.base64.value_2"
                                defaultMessage="Иходная строка"
                                description=""
                            />
                        </label>
                        <textarea
                            ref={this.myRef_1}
                            className="DecodeBase64__textarea"
                            placeholder='...'
                        />
                    </div>
                    <div className="one-half column">
                        <label>
                            <FormattedMessage
                                id="app.page.base64.value_3"
                                defaultMessage="Результат"
                                description=""
                            />
                        </label>
                        <textarea
                            ref={this.myRef_2}
                            className="DecodeBase64__textarea"
                            readOnly={true}
                            //defaultValue={"{testObject: 'testValue'}"}
                            placeholder='...'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="one-half column">
                        <button onClick={this.decodeData}>Decode Base 64 String</button>
                    </div>
                    <div className="one-half column">
                        <button onClick={this.encodeData}>Encode Base 64 String</button>
                    </div>
                </div>
            </div>
        )
    }
}
