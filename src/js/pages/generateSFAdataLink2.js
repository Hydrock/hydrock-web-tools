import React from 'react';

const payloadDataFromSfa = {
    "ogrn":"304560907600162",
    "SFADealIds":[
       {
          "pxObjClass":"ABR3-Int-UFR-AlfaOffice-NewTaskFrame-Data-SFADealIds",
          "productId":"LP_RKO",
          "idDealSFA":"OP-138468",
          "pyStepPageReference":"AlfaOfficeNewTaskFrameData.SFADealIds(1)"
       }
    ],
    "RegionCode":"23",
    "inn":"560902143810",
    "AttractionChannel":"MB_FIELD_M",
    "BranchId":"MOTG",
    "pxObjClass":"ABR3-Int-UFR-AlfaOffice-NewTaskFrame-Data",
    "ClientName":"Мужиков Олег Петрович (ИП)",
    "ClientManager":"RUM0NKT",
    "PinEQ":"UAD766"
}

const payloadDataFromSfaJson = JSON.stringify(payloadDataFromSfa, null, ' ');

export default class GenerateSFAdataLink extends React.Component {
    state = {
        finishLink: '',
        finishLinkForAlfaGo: '',
        baseUrlforAlfaGo: 'mobilecrm://redirect/',
        hostValue: localStorage.getItem('hostValue') || 'https://testjmb.alfabank.ru/ona/orders/new/company-info',
        data: localStorage.getItem('data') || payloadDataFromSfaJson,
        referrer: localStorage.getItem('referrer')|| 'mobilesfa',
        userType: localStorage.getItem('userType') || 'employee',
        token: localStorage.getItem('userType') || 'tokenValue',
        seamlessApp: localStorage.getItem('seamlessApp') || 'https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif',
    }

    copyToClipboard(inputId) {
        /* Get the text field */
        let copyText = document.getElementById(inputId);
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    }

    generateLink = (e) => {
        e.preventDefault();

        const {
            baseUrlforAlfaGo,
            hostValue,
            data,
            referrer,
            userType,
            token
        } = this.state;

        let objJsonB64 = Buffer.from(data).toString("base64");

        const finishLink = hostValue + `?userType=${userType}&referrer=${referrer}&token=${token}&data=${objJsonB64}`;
        const finishLinkForAlfaGo = baseUrlforAlfaGo + encodeURIComponent(finishLink);

        this.setState({
            finishLink,
            finishLinkForAlfaGo
        });
    }

    textareaOnChange = (e) => {
        localStorage.setItem('data', e.target.value.trim());
        this.setState({ data: e.target.value.trim() });
    }

    render () {
        return (
            <section className="generateSFAdataLink">
                <h4>
                    Генерация ссылки с данными для АО из SFA через AlfaGo
                </h4>
                <div className="row">
                    <label>AlfaGO base url for redirect</label>
                    <input
                        type="text"
                        name="base-url"
                        value={ this.state.baseUrlforAlfaGo }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            this.setState({
                                baseUrlforAlfaGo: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>AO base url base-url</label>
                    <input
                        type="text"
                        name="base-url"
                        value={ this.state.hostValue }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            this.setState({
                                hostValue: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>referrer (query param)</label>
                    <input
                        type="text"
                        name="referrer"
                        value={ this.state.referrer }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            localStorage.setItem('referrer', e.target.value);
                            this.setState({
                                referrer: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>userType (query param)</label>
                    <input
                        type="text"
                        name="userType"
                        value={ this.state.userType }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            localStorage.setItem('userType', e.target.value);
                            this.setState({
                                userType: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>token (query param)</label>
                    <input
                        type="text"
                        name="token"
                        value={ this.state.token }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            localStorage.setItem('token', e.target.value);
                            this.setState({
                                token: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>data (query param)</label>
                    <textarea
                        name="payloadData"
                        value={ this.state.data }
                        onChange={ this.textareaOnChange }
                    />
                </div>
                <div className="row">
                    <button type="button" onClick={ this.generateLink }>
                        Сгенерировать ссылку
                    </button>
                </div>
                <br/>
                <br/>
                <div>
                    <span>
                        Сненерированная ссылка для АО из SFA
                    </span><br/>
                    <span>
                        "const finishLink = hostValue + '?userType=' + userType + '&referrer=' + referrer + '&token=' + token + '&data=' + objJsonB64"
                    </span>
                    <input
                        type="text"
                        id="finishLink"
                        value={ this.state.finishLink }
                        readOnly style={ { width: 800 } }
                    /><br/>
                    <a href={ this.state.finishLink }>
                        { this.state.finishLink }
                    </a><br/>
                    <button type="button" onClick={ () => {
                        this.copyToClipboard('finishLink')
                    } }>
                        Скопировать
                    </button>
                </div>
                <div>
                    <span>
                        Сненерированная ссылка для АО из SFA через AlfaGo
                    </span><br/>
                    <span>
                        const finishLinkForAlfaGo = baseUrlforAlfaGo + encodeURIComponent(finishLink);
                    </span><br/>
                    <input
                        type="text"
                        id="finishLinkForAlfaGo"
                        value={ this.state.finishLinkForAlfaGo }
                        readOnly style={ { width: 800 } }
                    /><br/>
                    <a href={ this.state.finishLinkForAlfaGo }>
                        { this.state.finishLinkForAlfaGo }
                    </a>
                    <button type="button" onClick={ () => {
                        this.copyToClipboard('finishLinkForAlfaGo')
                    } }>
                        Скопировать
                    </button>
                </div>
                <div>
                    <iframe src="https://testjmb.alfabank.ru/ona/?userType=employee" width="800" height="800"/>
                </div>
                <div>
                    
                </div>
                <div className="row">
                    <label>seamlessApp url</label>
                    <input
                        type="text"
                        name="token"
                        value={ this.state.seamlessApp }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            localStorage.setItem('seamlessApp', e.target.value);
                            this.setState({
                                seamlessApp: e.target.value
                            })
                        } }
                    />
                </div>
                <div>
                    <iframe src={this.state.seamlessApp} width="800" height="800"/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
        )
    }
}
