import React from 'react';
import cn from 'cn-decorator';

import './css-triangle-generator.scss';

@cn('cssTriangleGenerator')
class CssTriangleGenerator extends React.Component {
    render(cn: any) {
        return (
            <section className={ cn() } >
                <h4>
                    CSS Triangle Generator
                </h4>
                <div className="row">
                    <div className="one-half column">
                        <div className={ cn('triangle-position') }>
                            <div>
                                <div>
                                    <label className={ cn('corner') } htmlFor="">
                                        1
                                    </label>
                                    <label className={ cn('corner') } htmlFor="">
                                        2
                                    </label>
                                    <label className={ cn('corner') } htmlFor="">3</label>
                                    <label className={ cn('corner') } htmlFor="">4</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="one-half column">
                        2
                    </div>
                </div>
            </section>
        );
    }
}

export default CssTriangleGenerator;