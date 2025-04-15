import {useNavigate} from "react-router-dom";
import {Button} from "../buttons/button/index.tsx";
import {SizesOfButton, StylesForButton} from "../buttons/button/types.ts";
import {Icon} from "../icon/index.tsx";
import "./styles.css"

export const Menu=()=>{
    const navigate = useNavigate();
    const goToOrganizationList = () => {
        navigate("/companies/12");
    };

    return <div className='menu-container'>
        <div className='menu-small'>
            <div className='menu-small-top-buttons'>
                <div className={'logo-wrapper'}><Icon nameForIcon='logo'/></div>
                <Button icon={<Icon nameForIcon='company'/>} size={SizesOfButton.big} style={StylesForButton.primary}/>
                <Button icon={<Icon nameForIcon='search'/>} size={SizesOfButton.big} style={StylesForButton.primary}/>
            </div>
            <div className='menu-small-bottom-buttons'>
                <Button icon={<Icon nameForIcon='settings'/>} size={SizesOfButton.big} style={StylesForButton.primary}/>
                <Button icon={<Icon nameForIcon='signOut'/>} size={SizesOfButton.big} style={StylesForButton.primary}/>
            </div>
        </div>
        <div className='menu-big'>
            <div className='menu-big-header'>
                <h3 className='menu-big-header-title'>Oak Tree Cemetery</h3>
                <h2 className='menu-big-header-subtitle'>Process Manager</h2>
            </div>
            <div className='menu-big-options'>
                <Button style={StylesForButton.primary} size={SizesOfButton.big} icon={<Icon nameForIcon='company'/>}
                        text='Organizations' onClick={goToOrganizationList}/>
                <Button style={StylesForButton.outline} size={SizesOfButton.big} icon={<Icon nameForIcon='contractor'/>}
                        text='Contractors'/>
                <Button style={StylesForButton.outline} size={SizesOfButton.big} icon={<Icon nameForIcon='account'/>}
                        text='Clients'/>
            </div>
        </div>
    </div>
}