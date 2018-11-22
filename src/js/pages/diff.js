import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Diff extends React.Component {
    constructor(props) {
        super(props);
        this.myRef_1 = React.createRef();
        this.myRef_2 = React.createRef();
        this.myRef_3 = React.createRef();
    }

    getCompareLink = (serviceName, versionOld, versionNew) => {
        let template = `http://git.moscow.alfaintra.net/projects/ONA/repos/${serviceName}/compare/diff?targetBranch=refs%2Ftags%2Fv${versionOld}&sourceBranch=refs%2Ftags%2Fv${versionNew}&targetRepoId=4952`
        return template;
    }

    parseData = () => {
        const nodeValue = this.myRef_1.current.value;
        let valueArr = nodeValue.split("\n");
        
        let result = [];
        valueArr.forEach((item) => {
            let preResult = item.split(" ");
            result.push(preResult)
        });

        let result2 = result.map((item) => {
            return {
            name: item[0].slice(0, -1),
            from: item[1],
            to: item[3]
            }
        });
        
        let result3 = '';
        
        result2.forEach((item) => {
            result3 = result3 + this.appendElement(item);
        })

        

        this.myRef_2.current.innerHTML = result3;
    }

    appendElement = (obj) => {
        let string_start = '<div>';
        let string_end = '</div>';
        let stringName = obj.name + ': ';
    
        let stringVersions;
        if (obj.from === obj.to) {
            stringVersions = `${obj.from} => ${obj.to}`
        } else {
            stringVersions = `<b style="color: red;">${obj.from} => ${obj.to}</b>`
        }

        let link;

        if (obj.from === obj.to) {
            link = '<br><br>';
        } else {
            link = `<a href="${this.getCompareLink(obj.name, obj.from, obj.to)}" target="_blank">Compare in Bitbucket</a><br><br>`;
        }
    
        return string_start + stringName + stringVersions + string_end + link;
    }

    render () {
        return (
            <section className="diff">
                <h4>
                    <FormattedMessage
                        id="app.diff.title"
                        defaultMessage="Генирируем разницу в версиях поставки (для работы)"
                        description="Заголовок - разница версий"
                    />
                </h4>
                <div className="diff__container / row">
                    <div className="one-half column">
                        <label>
                            <FormattedMessage
                                id="app.diff.value_1"
                                defaultMessage="Вставь версии из Jira"
                                description=""
                            />
                        </label>
                        <textarea className="diff__textarea" ref={this.myRef_1}/>
                    </div>
                    <div className="one-half column">
                        <label>
                            <FormattedMessage
                                id="app.diff.value_2"
                                defaultMessage="Результат"
                                description=""
                            />
                        </label>
                        <div className="diff__result" ref={this.myRef_2}/>
                    </div>
                </div>
                <div className="diff__container / row">
                    <div className="one-half column">
                        <button onClick={this.parseData}>
                            <FormattedMessage
                                id="app.diff.value_3"
                                defaultMessage="Показать различия версий"
                                description=""
                            />
                        </button>
                    </div>
                    {/* <div className="one-half column">
                        <div className="diff__result" ref={this.myRef_3}/>
                    </div> */}
                </div>
            </section>
        )
    }
}
