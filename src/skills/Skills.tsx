import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`   }>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'fhghb srhnsthth sththtrhrth hrthtrhsrh hssrhtht'}/>
                    <Skill title={'CSS'} description={'srhnsthth sththtrhrth hrthtrhsrh hssrhtht lniknin'}/>
                    <Skill title={'React'} description={'sththtrhrth hrthtrhsrh hssrhtht ghndtyyj'}/>
                </div>
            </div>
        </div>
    );
};